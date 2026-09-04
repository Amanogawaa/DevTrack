from pydantic import BaseModel, ConfigDict
from typing import  Optional,  TypeVar, Generic

T = TypeVar('T')

class ResponseModel(BaseModel, Generic[T]):
    message: str
    data: Optional[T] = None
    status_code: int

    model_config = ConfigDict(from_attributes=True)