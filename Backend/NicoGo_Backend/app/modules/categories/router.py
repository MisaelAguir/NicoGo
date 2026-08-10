from fastapi import APIRouter

from app.api.dependencies import CurrentUser, DbSession
from app.modules.categories.repository import CategoryRepository
from app.modules.categories.schema import CategoryCreate, CategoryResponse
from app.modules.categories.service import CategoryService

router = APIRouter(prefix="/categories", tags=["Categorías"])


@router.get("", response_model=list[CategoryResponse])
def list_categories(db: DbSession) -> list[CategoryResponse]:
    return [CategoryResponse.model_validate(item) for item in CategoryRepository(db).list()]


@router.post("", response_model=CategoryResponse, status_code=201)
def create_category(
    payload: CategoryCreate,
    db: DbSession,
    _: CurrentUser,
) -> CategoryResponse:
    category = CategoryService(CategoryRepository(db)).create(payload)
    return CategoryResponse.model_validate(category)
