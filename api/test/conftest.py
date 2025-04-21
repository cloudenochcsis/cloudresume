import pytest
import pytest_asyncio
import asyncio
from typing import Generator
from motor.motor_asyncio import AsyncIOMotorClient
import os

@pytest.fixture(scope="session")
def event_loop() -> Generator[asyncio.AbstractEventLoop, None, None]:
    """Create an instance of the default event loop for each test case."""
    loop = asyncio.get_event_loop_policy().new_event_loop()
    yield loop
    loop.close()

@pytest_asyncio.fixture(autouse=True)
async def setup_test_db():
    """Setup a test database before each test"""
    # Connect to test MongoDB
    # Use environment variable for MongoDB URI or default to localhost
    mongo_uri = os.getenv("MONGODB_URI", "mongodb://localhost:27017")
    client = AsyncIOMotorClient(mongo_uri, serverSelectionTimeoutMS=5000)
    db = client.test_db
    collection = db.visitorCounter

    try:
        # Reset counter before each test
        await collection.delete_many({})
        yield collection
    finally:
        # Clean up after tests
        await collection.delete_many({})
        client.close()
