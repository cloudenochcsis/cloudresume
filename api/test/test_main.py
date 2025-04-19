import pytest
from httpx import AsyncClient
from main import app
from motor.motor_asyncio import AsyncIOMotorClient

@pytest.fixture(autouse=True)
async def setup_test_db():
    """Setup a test database before each test"""
    # Connect to test MongoDB
    client = AsyncIOMotorClient("mongodb://localhost:27017")
    db = client.test_db
    collection = db.visitorCounter

    # Reset counter before each test
    await collection.update_one(
        {"_id": "visitorCounter"},
        {"$set": {"count": 0}},
        upsert=True
    )

    # Update app state
    app.state.mongodb = client
    app.state.db = db

    yield

    # Cleanup
    await collection.delete_many({})
    await client.close()

@pytest.mark.asyncio
async def test_get_visitor_count():
    """Test getting the visitor count"""
    async with AsyncClient(app=app, base_url="http://test") as client:
        response = await client.get("/api/counter")
        assert response.status_code == 200
        data = response.json()
        assert "count" in data
        assert isinstance(data["count"], int)
        assert data["count"] == 1  # First visit should increment counter to 1

@pytest.mark.asyncio
async def test_multiple_visits():
    """Test that multiple visits increment the counter"""
    async with AsyncClient(app=app, base_url="http://test") as client:
        # First visit
        response1 = await client.get("/api/counter")
        count1 = response1.json()["count"]
        
        # Second visit
        response2 = await client.get("/api/counter")
        count2 = response2.json()["count"]
        
        assert count2 == count1 + 1

@pytest.mark.asyncio
async def test_cors_headers():
    """Test that CORS headers are present"""
    async with AsyncClient(app=app, base_url="http://test") as client:
        response = await client.get("/api/counter")
        assert response.headers.get("access-control-allow-origin")
        assert response.headers.get("access-control-allow-credentials")
