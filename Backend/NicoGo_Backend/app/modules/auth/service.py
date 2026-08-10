from app.core.exceptions import AppException
from app.core.security import create_access_token, verify_password
from app.modules.auth.schema import TokenResponse
from app.modules.users.repository import UserRepository
from app.modules.users.schema import UserCreate, UserResponse
from app.modules.users.service import UserService


class AuthService:
    def __init__(self, repository: UserRepository) -> None:
        self.repository = repository

    def register(self, data: UserCreate) -> TokenResponse:
        user = UserService(self.repository).register(data)
        return self._build_token(user)

    def login(self, email: str, password: str) -> TokenResponse:
        user = self.repository.get_by_email(email)
        if user is None or not verify_password(password, user.hashed_password):
            raise AppException("Correo o contraseña incorrectos", status_code=401)
        if not user.is_active:
            raise AppException("El usuario está desactivado", status_code=403)
        return self._build_token(user)

    @staticmethod
    def _build_token(user) -> TokenResponse:
        return TokenResponse(
            access_token=create_access_token(str(user.id)),
            user=UserResponse.model_validate(user),
        )
