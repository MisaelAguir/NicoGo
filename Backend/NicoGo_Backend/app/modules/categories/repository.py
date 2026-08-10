from __future__ import annotations

from sqlalchemy import select
from sqlalchemy.orm import Session

from app.modules.categories.model import Category


class CategoryRepository:
    def __init__(self, db: Session) -> None:
        self.db = db

    def list(self) -> list[Category]:
        return list(self.db.scalars(select(Category).order_by(Category.name)).all())

    def get_by_name(self, name: str) -> Category | None:
        return self.db.scalar(select(Category).where(Category.name == name.strip()))

    def get_many(self, category_ids: list[int]) -> list[Category]:
        if not category_ids:
            return []
        return list(self.db.scalars(select(Category).where(Category.id.in_(category_ids))).all())

    def create(self, category: Category) -> Category:
        self.db.add(category)
        self.db.commit()
        self.db.refresh(category)
        return category
