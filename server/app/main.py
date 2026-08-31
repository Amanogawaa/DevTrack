from contextlib import asynccontextmanager
from typing import Any

from fastapi import FastAPI, HTTPException, Request
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse

from app.api.route import api_router
from app.core.configs import settings
from app.db.schema import Base
from app.db.session import engine
from app.middlewares.logging import LoggingMiddleware


@asynccontextmanager
async def lifespan(app: FastAPI):
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    yield

    await engine.dispose()


app_config: dict[str, Any] = {
    "title": settings.APP_NAME,
    "description": settings.APP_DESCRIPTION,
    "version": settings.APP_VERSION,
}

if settings.ENVIRONMENT not in settings.SHOW_DOCS_ENVS:
    app_config.update({"openapi_url": None, "docs_url": None, "redoc_url": None})

app = FastAPI(**app_config, lifespan=lifespan)


@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request: Request, exc: RequestValidationError):
    return JSONResponse(
        status_code=422, content={"detail": "Validation Error", "errors": exc.errors()}
    )


@app.exception_handler(HTTPException)
async def response_exception_handler(request: Request, exc: HTTPException):
    return JSONResponse(status_code=exc.status_code, content={"detail": exc.detail})


# add cors config later on

app.add_middleware(LoggingMiddleware)

app.include_router(api_router, prefix="/api/v1")


@app.get("/")
async def health_check():
    return {"status": "ok"}
