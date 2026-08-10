from app.core.exceptions import AppException
from app.modules.categories.repository import CategoryRepository
from app.modules.places.model import Place
from app.modules.places.repository import PlaceRepository
from app.modules.places.schema import PlaceCreate
from app.modules.users.model import User
from app.shared.enums import UserType


class PlaceService:
    def __init__(
        self,
        repository: PlaceRepository,
        category_repository: CategoryRepository,
    ) -> None:
        self.repository = repository
        self.category_repository = category_repository

    def create(self, data: PlaceCreate, owner: User) -> Place:
        if owner.user_type not in {UserType.BUSINESS, UserType.ADMIN}:
            raise AppException("Solo negocios o administradores pueden registrar lugares", status_code=403)

        categories = self.category_repository.get_many(data.category_ids)
        if len(categories) != len(set(data.category_ids)):
            raise AppException("Una o más categorías no existen", status_code=400)

        place = Place(
            owner_id=owner.id,
            name=data.name.strip(),
            description=data.description.strip(),
            address=data.address.strip(),
            latitude=data.latitude,
            longitude=data.longitude,
            phone=data.phone,
            price_from=data.price_from,
            categories=categories,
        )
        return self.repository.create(place)
