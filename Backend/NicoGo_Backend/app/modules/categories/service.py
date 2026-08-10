from app.core.exceptions import AppException
from app.modules.categories.model import Category
from app.modules.categories.repository import CategoryRepository
from app.modules.categories.schema import CategoryCreate


class CategoryService:
    def __init__(self, repository: CategoryRepository) -> None:
        self.repository = repository

    def create(self, data: CategoryCreate) -> Category:
        if self.repository.get_by_name(data.name):
            raise AppException("La categoría ya existe", status_code=409)
        return self.repository.create(Category(name=data.name.strip(), icon=data.icon))
