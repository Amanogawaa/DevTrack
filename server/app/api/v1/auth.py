from app.core.configs import settings
from fastapi import APIRouter, Depends, Response
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_db
from app.modules.auth.model import CreateUser, LoginUser
from app.modules.auth.service import register, login

router = APIRouter(prefix="/auth", tags=["Authentication"])

@router.post("/register")
async def create_user(data: CreateUser, db: AsyncSession = Depends(get_db)):
    return await register(db, data)

@router.post("/login")
async def login_user(response: Response, data: LoginUser, db: AsyncSession = Depends(get_db)):
    token = await login(db, data)

    response.set_cookie(
        key="access_token",
        value=token,
        httponly=True,
        samesite="strict",
        secure=settings.ENVIRONMENT != "local",
        max_age=settings.ACCESS_TOKEN_EXPIRE_MINUTES * 60,
    )
    
    return {"message": "Login successful"}