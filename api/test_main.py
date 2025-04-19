from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_read_root():
    response = client.get("/")
    assert response.status_code == 200
    assert "message" in response.json()
    assert response.json()["message"] == "Resume Visitor Counter API is running"

def test_visitor_counter():
    # First request to get initial count
    response1 = client.get("/api/counter")
    assert response1.status_code == 200
    assert "count" in response1.json()
    initial_count = response1.json()["count"]
    
    # Second request to verify counter increments
    response2 = client.get("/api/counter")
    assert response2.status_code == 200
    assert "count" in response2.json()
    assert response2.json()["count"] == initial_count + 1
