# Global test configuration for mocking fetch in tests
import pytest
from unittest.mock import Mock

# Mock fetch globally for all tests
@pytest.fixture(autouse=True)
def mock_fetch(monkeypatch):
    """Mock fetch for all tests"""
    mock = Mock()
    monkeypatch.setattr("builtins.fetch", mock)
    return mock
