from __future__ import annotations

from sqlalchemy import select
from sqlalchemy.orm import Session, selectinload

from app.modules.places.model import Place


class PlaceRepository:
    def __init__(self, db: Session) -> None:
        self.db = db

    def list(self, category_id: int | None = None) -> list[Place]:
        statement = select(Place).options(selectinload(Place.categories)).order_by(Place.name)
        if category_id is not None:
            statement = statement.where(Place.categories.any(id=category_id))
        return list(self.db.scalars(statement).unique().all())

    def get(self, place_id: int) -> Place | None:
        statement = (
            select(Place)
            .options(selectinload(Place.categories))
            .where(Place.id == place_id)
        )
        return self.db.scalar(statement)

    def create(self, place: Place) -> Place:
        self.db.add(place)
        self.db.commit()
        self.db.refresh(place)
        return self.get(place.id) or place
