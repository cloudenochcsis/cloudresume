import pytest
import asyncio
import main

@pytest.fixture(scope="session")
def event_loop():
    loop = asyncio.get_event_loop_policy().new_event_loop()
    yield loop
    loop.close()

@pytest.fixture(autouse=True)
def reset_counter_collection():
    main.counter_collection = None
    yield
    main.counter_collection = None
