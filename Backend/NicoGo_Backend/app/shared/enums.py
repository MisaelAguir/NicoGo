from enum import StrEnum


class UserType(StrEnum):
    TOURIST = "tourist"
    BUSINESS = "business"
    ADMIN = "admin"


class PlaceStatus(StrEnum):
    PENDING = "pending"
    APPROVED = "approved"
    REJECTED = "rejected"
