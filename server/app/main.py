from typing import Any
from fastapi import FastAPI

from app.core.configs import settings

app_config : dict[str, Any] = {
    "title": settings.app_name,
    "description": settings.app_description,
    "version": settings.app_version,
}

if settings.environment not in settings.show_docs_envs:
    app_config.update({"openapi_url": None, "docs_url": None, "redoc_url": None})

app = FastAPI(**app_config)

@app.get("/")
def read_root():
    return {"status": "ok"}