from pydantic import BaseModel, ConfigDict, Field


class CategoryCreate(BaseModel):
    name: str = Field(min_length=2, max_length=80)
    icon: str | None = Field(default=None, max_length=80)


class CategoryResponse(CategoryCreate):
    id: int
    model_config = ConfigDict(from_attributes=True)
