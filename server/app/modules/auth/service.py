from app.modules.auth.model import CreateUser
from fastapi import HTTPException, status
from app.utils.security import verify_token
from app.modules.auth.model import User

class AuthService:
    def __init__(self, db):
        self.db = db

    async def register(self, data: CreateUser) -> User:
        pass

    async def get_current_user(self, token: str)-> User:
        user_id = verify_token(token)

        if not user_id:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid authentication credentials", headers={"WWW-Authenticate": "Bearer"})
        
        