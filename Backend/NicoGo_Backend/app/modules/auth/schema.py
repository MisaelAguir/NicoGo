from pydantic import BaseModel

from app.modules.users.schema import UserResponse


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: UserResponse
