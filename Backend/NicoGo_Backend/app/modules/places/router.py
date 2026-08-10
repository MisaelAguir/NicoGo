from fastapi import APIRouter, Query

from app.api.dependencies import CurrentUser, DbSession
from app.modules.categories.repository import CategoryRepository
from app.modules.places.repository import PlaceRepository
from app.modules.places.schema import PlaceCreate, PlaceResponse
from app.modules.places.service import PlaceService

router = APIRouter(prefix="/places", tags=["Lugares"])


@router.get("", response_model=list[PlaceResponse])
def list_places(
    db: DbSession,
    category_id: int | None = Query(default=None, ge=1),
) -> list[PlaceResponse]:
    places = PlaceRepository(db).list(category_id)
    return [PlaceResponse.model_validate(place) for place in places]


@router.get("/{place_id}", response_model=PlaceResponse)
def get_place(place_id: int, db: DbSession) -> PlaceResponse:
    place = PlaceRepository(db).get(place_id)
    if place is None:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Lugar no encontrado")
    return PlaceResponse.model_validate(place)


@router.post("", response_model=PlaceResponse, status_code=201)
def create_place(
    payload: PlaceCreate,
    db: DbSession,
    current_user: CurrentUser,
) -> PlaceResponse:
    service = PlaceService(PlaceRepository(db), CategoryRepository(db))
    place = service.create(payload, current_user)
    return PlaceResponse.model_validate(place)
