from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_read_root():
    response = client.get("/")
    assert response.status_code == 200
    assert "message" in response.json()
    assert response.json()["message"] == "Resume Visitor Counter API is running"

def test_visitor_counter():
    # In test mode, we should get a mock response
    response = client.get("/api/counter")
    assert response.status_code == 200
    assert "count" in response.json()
    assert response.json()["count"] == 0  # Mock response in test mode
