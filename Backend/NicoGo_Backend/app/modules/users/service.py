from app.core.exceptions import AppException
from app.core.security import hash_password
from app.modules.users.model import User
from app.modules.users.repository import UserRepository
from app.modules.users.schema import UserCreate


class UserService:
    def __init__(self, repository: UserRepository) -> None:
        self.repository = repository

    def register(self, data: UserCreate) -> User:
        if self.repository.get_by_email(data.email):
            raise AppException("El correo ya está registrado", status_code=409)

        user = User(
            email=data.email.lower(),
            full_name=data.full_name.strip(),
            hashed_password=hash_password(data.password),
            user_type=data.user_type,
        )
        return self.repository.create(user)
