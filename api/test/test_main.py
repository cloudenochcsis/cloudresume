import pytest
from httpx import AsyncClient
from main import app

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
