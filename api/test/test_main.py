import pytest
import pytest_asyncio
import os
from fastapi.testclient import TestClient
from main import app
from motor.motor_asyncio import AsyncIOMotorClient
import sys

# Mark this as a pytest module
sys.modules['pytest'] = sys.modules[__name__]

@pytest_asyncio.fixture(autouse=True)
async def setup_test_db():
    """Setup a test database before each test"""
    # Connect to test MongoDB
    # Always use local MongoDB for tests
    client = AsyncIOMotorClient("mongodb://localhost:27017", serverSelectionTimeoutMS=5000)
    db = client.test_db
    collection = db.visitorCounter

    try:
        # Reset counter before each test
        await collection.delete_many({})
        await collection.insert_one({"_id": "visitorCounter", "count": 0})

        # Update app's counter collection
        import main
        main.counter_collection = collection

        # Create a test client
        test_client = TestClient(app)

        yield test_client

    finally:
        # Cleanup
        try:
            await collection.delete_many({})
        except Exception:
            pass
        try:
            await client.close()
        except Exception:
            pass

@pytest.mark.asyncio
async def test_get_visitor_count(setup_test_db):
    """Test getting the visitor count"""
    client = setup_test_db
    response = client.get("/api/counter")
    assert response.status_code == 200
    data = response.json()
    assert "count" in data
    assert isinstance(data["count"], int)
    assert data["count"] == 1  # First visit should increment counter to 1

@pytest.mark.asyncio
async def test_multiple_visits(setup_test_db):
    """Test that multiple visits increment the counter"""
    client = setup_test_db
    # First visit
    response1 = client.get("/api/counter")
    count1 = response1.json()["count"]
    
    # Second visit
    response2 = client.get("/api/counter")
    count2 = response2.json()["count"]
    
    assert count2 == count1 + 1

@pytest.mark.asyncio
async def test_cors_headers(setup_test_db):
    """Test that CORS headers are present"""
    client = setup_test_db
    response = client.get("/api/counter")
    assert response.headers.get("access-control-allow-origin")
    assert response.headers.get("access-control-allow-credentials")
