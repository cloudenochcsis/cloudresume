import pytest
from fastapi.testclient import TestClient
from main import app, counter_collection
from motor.motor_asyncio import AsyncIOMotorClient

@pytest.fixture(autouse=True)
def setup_test_db():
    """Setup a test database before each test"""
    # Connect to test MongoDB
    client = AsyncIOMotorClient("mongodb://localhost:27017")
    db = client.test_db
    collection = db.visitorCounter

    # Create a test client
    test_client = TestClient(app)

    # Update app's counter collection
    global counter_collection
    counter_collection = collection

    # Reset counter before each test
    collection.update_one(
        {"_id": "visitorCounter"},
        {"$set": {"count": 0}},
        upsert=True
    )

    yield test_client

    # Cleanup
    collection.delete_many({})
    client.close()

def test_get_visitor_count(setup_test_db):
    """Test getting the visitor count"""
    client = setup_test_db
    response = client.get("/api/counter")
    assert response.status_code == 200
    data = response.json()
    assert "count" in data
    assert isinstance(data["count"], int)
    assert data["count"] == 1  # First visit should increment counter to 1

def test_multiple_visits(setup_test_db):
    """Test that multiple visits increment the counter"""
    client = setup_test_db
    # First visit
    response1 = client.get("/api/counter")
    count1 = response1.json()["count"]
    
    # Second visit
    response2 = client.get("/api/counter")
    count2 = response2.json()["count"]
    
    assert count2 == count1 + 1

def test_cors_headers(setup_test_db):
    """Test that CORS headers are present"""
    client = setup_test_db
    response = client.get("/api/counter")
    assert response.headers.get("access-control-allow-origin")
    assert response.headers.get("access-control-allow-credentials")
