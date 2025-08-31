# Global test configuration
import pytest

# Setup global test environment
@pytest.fixture(autouse=True)
def setup_test_env():
    """Setup test environment"""
    pass
