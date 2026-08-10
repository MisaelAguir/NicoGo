from datetime import datetime

from pydantic import BaseModel, ConfigDict, EmailStr, Field

from app.shared.enums import UserType


class UserCreate(BaseModel):
    email: EmailStr
    full_name: str = Field(min_length=2, max_length=150)
    password: str = Field(min_length=8, max_length=128)
    user_type: UserType


class UserResponse(BaseModel):
    id: int
    email: EmailStr
    full_name: str
    user_type: UserType
    is_active: bool
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)
