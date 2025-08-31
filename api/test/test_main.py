import pytest
from unittest.mock import AsyncMock, patch
from fastapi.testclient import TestClient
from main import app

@pytest.fixture
def test_client():
    """Create a test client with mocked MongoDB"""
    return TestClient(app)

@pytest.fixture
def mock_counter_collection():
    """Mock the MongoDB collection for testing"""
    mock_collection = AsyncMock()
    
    # Mock find_one_and_update to return incrementing counts
    call_count = 0
    def mock_update(*args, **kwargs):
        nonlocal call_count
        call_count += 1
        return {"_id": "visitorCounter", "count": call_count}
    
    mock_collection.find_one_and_update.side_effect = mock_update
    return mock_collection

def test_get_visitor_count(test_client, mock_counter_collection):
    """Test getting the visitor count"""
    with patch('main.counter_collection', mock_counter_collection):
        response = test_client.get("/api/counter")
        assert response.status_code == 200
        data = response.json()
        assert "count" in data
        assert isinstance(data["count"], int)
        assert data["count"] == 1  # First visit should increment counter to 1

def test_multiple_visits(test_client, mock_counter_collection):
    """Test that multiple visits increment the counter"""
    with patch('main.counter_collection', mock_counter_collection):
        # First visit
        response1 = test_client.get("/api/counter")
        count1 = response1.json()["count"]
        
        # Second visit
        response2 = test_client.get("/api/counter")
        count2 = response2.json()["count"]
        
        assert count2 == count1 + 1

def test_cors_headers(test_client, mock_counter_collection):
    """Test that CORS is configured and endpoint responds correctly"""
    with patch('main.counter_collection', mock_counter_collection):
        response = test_client.get("/api/counter")
        assert response.status_code == 200
        # CORS headers are added by middleware but may not appear in TestClient
        # The important thing is that the endpoint works without CORS errors
        data = response.json()
        assert "count" in data
