import os

os.environ["DATABASE_URL"] = "sqlite:///./test_nicogo.db"
os.environ["SECRET_KEY"] = "test-secret-key-with-more-than-32-characters"

import pytest
from fastapi.testclient import TestClient

from app.database.base import Base
from app.database.session import engine
from app.main import app


@pytest.fixture(autouse=True)
def clean_database():
    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(bind=engine)
    yield
    Base.metadata.drop_all(bind=engine)


@pytest.fixture
def client() -> TestClient:
    return TestClient(app)
