from sqlalchemy.orm import DeclarativeBase


class Base(DeclarativeBase):
    pass


# Importar modelos para que SQLAlchemy/Alembic los descubra.
from app.modules.categories.model import Category  # noqa: E402, F401
from app.modules.places.model import Place, place_categories  # noqa: E402, F401
from app.modules.users.model import User  # noqa: E402, F401
