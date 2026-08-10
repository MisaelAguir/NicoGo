from app.database.base import Base
from app.database.session import SessionLocal, engine
from app.modules.categories.model import Category

DEFAULT_CATEGORIES = [
    ("Playa", "beach"),
    ("Naturaleza", "tree"),
    ("Aventura", "mountain"),
    ("Gastronomía", "utensils"),
    ("Historia", "landmark"),
    ("Hospedaje", "hotel"),
]


def main() -> None:
    Base.metadata.create_all(bind=engine)
    with SessionLocal() as db:
        existing = {category.name for category in db.query(Category).all()}
        for name, icon in DEFAULT_CATEGORIES:
            if name not in existing:
                db.add(Category(name=name, icon=icon))
        db.commit()
    print("Datos iniciales creados correctamente.")


if __name__ == "__main__":
    main()
