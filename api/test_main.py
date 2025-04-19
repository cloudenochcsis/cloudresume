from fastapi.testclient import TestClient
from unittest.mock import patch, MagicMock
from main import app

client = TestClient(app)

def test_read_root():
    response = client.get("/")
    assert response.status_code == 200
    assert "message" in response.json()
    assert response.json()["message"] == "Resume Visitor Counter API is running"

@patch('main.counter_collection')
def test_visitor_counter(mock_collection):
    # Mock the find_one_and_update response
    mock_collection.find_one_and_update.return_value = {"_id": "visitorCounter", "count": 42}
    
    response = client.get("/api/counter")
    assert response.status_code == 200
    assert "count" in response.json()
    assert response.json()["count"] == 42
    
    # Verify the MongoDB call was made with correct parameters
    mock_collection.find_one_and_update.assert_called_once_with(
        {"_id": "visitorCounter"},
        {"$inc": {"count": 1}},
        upsert=True,
        return_document=True
    )
