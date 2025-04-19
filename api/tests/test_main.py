import pytest
from fastapi.testclient import TestClient
from main import app, get_db

client = TestClient(app)

@pytest.fixture(autouse=True)
def setup_db():
    """Setup a test database before each test"""
    db = get_db()
    collection = db.visitorCounter
    # Reset the counter before each test
    collection.update_one(
        {"_id": "visitorCounter"},
        {"$set": {"count": 0}},
        upsert=True
    )
    yield
    # Cleanup after test
    collection.delete_many({})

def test_get_visitor_count():
    """Test getting the visitor count"""
    response = client.get("/api/counter")
    assert response.status_code == 200
    data = response.json()
    assert "count" in data
    assert isinstance(data["count"], int)
    assert data["count"] == 1  # First visit should increment counter to 1

def test_multiple_visits():
    """Test that multiple visits increment the counter"""
    # First visit
    response1 = client.get("/api/counter")
    count1 = response1.json()["count"]
    
    # Second visit
    response2 = client.get("/api/counter")
    count2 = response2.json()["count"]
    
    assert count2 == count1 + 1

def test_cors_headers():
    """Test that CORS headers are present"""
    response = client.get("/api/counter")
    assert "access-control-allow-origin" in response.headers
    assert "access-control-allow-credentials" in response.headers
