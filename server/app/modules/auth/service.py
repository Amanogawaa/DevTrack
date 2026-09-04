from app.db.schema import User
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from app.modules.auth.model import CreateUser, Token, LoginUser, UserResponse
from fastapi import HTTPException, status
from app.utils.security import hash_password, verify_password, create_access_token
from app.utils.response import ResponseModel


async def register(db: AsyncSession, data: CreateUser) -> ResponseModel:
    existing_user = await db.scalar(select(User).where(User.email == data.email))

    if existing_user:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="User already exists.")

    is_username_taken = await db.scalar(select(User).where(User.username == data.username))

    if is_username_taken:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Username is already taken.")

    hashed_password = hash_password(data.password)

    user = User(email=data.email, username=data.username, hashed_password=hashed_password)

    db.add(user)
    await db.commit()
    await db.refresh(user)

    return ResponseModel(message="User created successfully.", status_code=status.HTTP_201_CREATED)


async def login(db: AsyncSession, data: LoginUser) -> Token:
    user = await db.scalar(select(User).where(User.email == data.email))

    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid email or password"
        )

    if not verify_password(data.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid email or password"
        )

    token = create_access_token({
        "sub": str(user.id), "email": user.email
    })

    return Token(access_token=token, token_type="bearer")