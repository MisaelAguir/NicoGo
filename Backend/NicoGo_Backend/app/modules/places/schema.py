from datetime import datetime

from pydantic import BaseModel, ConfigDict, Field

from app.modules.categories.schema import CategoryResponse
from app.shared.enums import PlaceStatus


class PlaceCreate(BaseModel):
    name: str = Field(min_length=2, max_length=160)
    description: str = Field(min_length=10, max_length=3000)
    address: str = Field(min_length=5, max_length=255)
    latitude: float = Field(ge=-90, le=90)
    longitude: float = Field(ge=-180, le=180)
    phone: str | None = Field(default=None, max_length=30)
    price_from: float | None = Field(default=None, ge=0)
    category_ids: list[int] = Field(default_factory=list)


class PlaceResponse(BaseModel):
    id: int
    owner_id: int
    name: str
    description: str
    address: str
    latitude: float
    longitude: float
    phone: str | None
    price_from: float | None
    is_featured: bool
    status: PlaceStatus
    created_at: datetime
    categories: list[CategoryResponse]

    model_config = ConfigDict(from_attributes=True)
