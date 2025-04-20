from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
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

from contextlib import asynccontextmanager

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    global counter_collection
    if not "pytest" in sys.modules:
        try:
            counter_collection = await setup_mongodb()
        except Exception as e:
            logger.error(f"Failed to connect to MongoDB: {e}")
    yield
    # Shutdown
    if counter_collection and not "pytest" in sys.modules:
        try:
            client = counter_collection.database.client
            await client.close()
        except Exception as e:
            logger.error(f"Failed to close MongoDB connection: {e}")

app = FastAPI(lifespan=lifespan)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins in test
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB setup
async def setup_mongodb():
    mongo_uri = os.getenv("MONGODB_URI")
    if not mongo_uri:
        logger.error("MONGODB_URI environment variable is not set")
        raise ValueError("MONGODB_URI environment variable is not set")

    # Log the MongoDB URI (with sensitive parts redacted)
    redacted_uri = mongo_uri
    if '@' in mongo_uri:
        # Redact the password part of the URI
        parts = mongo_uri.split('@')
        if len(parts) == 2:
            auth_part = parts[0]
            if ':' in auth_part:
                username = auth_part.split(':')[0]
                redacted_uri = f"mongodb://{username}:****@{parts[1]}"
    logger.info(f"Using MongoDB URI: {redacted_uri}")

    try:
        logger.info("Attempting to connect to MongoDB...")
        client = AsyncIOMotorClient(
            mongo_uri,
            server_api=ServerApi('1'),
            tls=True,
            tlsAllowInvalidCertificates=True  # Only for development/testing
        )
        
        # Get database and collection
        db = client.resumeStats
        collection = db.visitorCounter
        
        # Initialize the counter if it doesn't exist
        await collection.update_one(
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



@app.get("/")
def root():
    """Root endpoint to verify API is running"""
    return {"message": "Resume Visitor Counter API is running"}

@app.get("/api/counter")
async def get_visitor_count():
    if counter_collection is None:
        raise HTTPException(status_code=503, detail="Database not connected")

    try:
        result = await counter_collection.find_one_and_update(
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
