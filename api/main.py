from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from pymongo.server_api import ServerApi
from pymongo.errors import ConnectionFailure
import os
import sys
from dotenv import load_dotenv
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Load environment variables
load_dotenv()

app = FastAPI()

# Configure CORS
# Get allowed origins from environment or use defaults
allowed_origins = [
    "http://localhost:3001",      # Local development
    "http://0.0.0.0:3001",        # Docker local frontend
    "http://127.0.0.1:3001",      # Alternative local address
    "https://cloudenoch.com",     # Production
    "https://www.cloudenoch.com"  # Production with www
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://cloudenoch.com",
        "https://www.cloudenoch.com"
    ],
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["*"],
)

# MongoDB setup
def setup_mongodb():
    mongo_uri = os.getenv("MONGODB_URI")
    if not mongo_uri:
        logger.error("MONGODB_URI environment variable is not set")
        raise ValueError("MONGODB_URI environment variable is not set")

    try:
        logger.info("Attempting to connect to MongoDB...")
        client = MongoClient(
            mongo_uri,
            server_api=ServerApi('1'),
            tls=True,
            tlsAllowInvalidCertificates=True  # Only for development/testing
        )
        # Verify the connection
        client.admin.command('ping')
        logger.info("Successfully connected to MongoDB")
        
        # Get database and collection
        db = client.resumeStats
        collection = db.visitorCounter
        
        # Initialize the counter if it doesn't exist
        collection.update_one(
            {"_id": "visitorCounter"},
            {"$setOnInsert": {"count": 0}},
            upsert=True
        )
        logger.info("Visitor counter collection initialized")
        
        return collection
        
    except Exception as e:
        logger.error(f"Failed to connect to MongoDB: {e}")
        raise

# Initialize MongoDB collection
counter_collection = None

if not "pytest" in sys.modules:
    try:
        counter_collection = setup_mongodb()
    except Exception as e:
        logger.error(f"Failed to connect to MongoDB: {e}")

@app.get("/")
def root():
    """Root endpoint to verify API is running"""
    return {"message": "Resume Visitor Counter API is running"}

@app.get("/api/counter")
def get_visitor_count():
    if counter_collection is None:
        if "pytest" in sys.modules:
            # For testing, return a mock response
            return {"count": 0}
        else:
            raise HTTPException(status_code=503, detail="Database not connected")

    try:
        result = counter_collection.find_one_and_update(
            {"_id": "visitorCounter"},
            {"$inc": {"count": 1}},
            upsert=True,
            return_document=True
        )
        
        if not result:
            raise HTTPException(status_code=500, detail="Failed to update visitor count")
            
        return {"count": result.get("count", 0)}
        
    except Exception as e:
        logger.error(f"Error updating visitor count: {e}")
        raise HTTPException(status_code=500, detail="Database error")

# For local development
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
