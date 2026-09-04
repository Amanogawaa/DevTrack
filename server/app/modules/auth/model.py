import uuid
from datetime import datetime
from typing import Optional
from pydantic import BaseModel, ConfigDict, EmailStr, Field

from app.db.schema import OrganizationRole

class Token(BaseModel):
    access_token: str
    token_type: str


class UserBase(BaseModel):
    email: EmailStr
    role: OrganizationRole = OrganizationRole.MEMBER
    is_active: bool = True

class LoginUser(BaseModel):
    email: EmailStr
    password: str

class CreateUser(UserBase):
    username: Optional[str] = None
    password: str = Field(min_length=8)


class UserResponse(BaseModel):
    id: uuid.UUID
    username: str
    email: str
    role: OrganizationRole
    is_active: bool

    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)
