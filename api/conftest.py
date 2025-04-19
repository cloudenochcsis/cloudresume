import pytest
import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
from main import app

@pytest.fixture(scope="session")
def event_loop():
    loop = asyncio.get_event_loop_policy().new_event_loop()
    yield loop
    loop.close()

@pytest.fixture(autouse=True)
async def setup_test_db():
    """Setup a test database before each test"""
    # Use a separate test database
    test_client = AsyncIOMotorClient("mongodb://localhost:27017")
    test_db = test_client.test_db
    test_collection = test_db.visitorCounter

    # Reset the counter before each test
    await test_collection.update_one(
        {"_id": "visitorCounter"},
        {"$set": {"count": 0}},
        upsert=True
    )

    # Update app state to use test database
    app.state.mongodb = test_client
    app.state.db = test_db

    yield

    # Cleanup after test
    await test_collection.delete_many({})
    await test_client.close()
