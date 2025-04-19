from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from pymongo.server_api import ServerApi
from pymongo.errors import ConnectionFailure
import os
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
    os.getenv("FRONTEND_URL", "http://localhost:3001"),  # Local development
    "https://cloudenoch.com",  # Production
    "https://www.cloudenoch.com"  # Production with www
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["*"],
)

# MongoDB connection
mongo_uri = os.getenv("MONGODB_URI")
if not mongo_uri:
    raise ValueError("MONGODB_URI environment variable is not set")

try:
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
    counter_collection = db.visitorCounter
    
except Exception as e:
    logger.error(f"Failed to connect to MongoDB: {e}")
    raise

@app.get("/")
def root():
    """Root endpoint to verify API is running"""
    try:
        client.admin.command('ping')
        return {"message": "Resume Visitor Counter API is running"}
    except Exception as e:
        logger.error(f"Health check failed: {e}")
        raise HTTPException(status_code=503, detail="Database connection error")

@app.get("/api/counter")
def get_visitor_count():
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
