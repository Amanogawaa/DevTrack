from pydantic import Field, SecretStr
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        case_sensitive=False,
        env_file_encoding="utf-8",
        extra="ignore",
    )

    APP_NAME: str = "DevTrack"
    APP_DESCRIPTION: str = "DevTrack is a project management tool for developers."
    APP_VERSION: str = "1.0.0"
    API_VERSION_PREFIX: str = "/api/v1"
    ENVIRONMENT: str = "local"
    SHOW_DOCS_ENVS: tuple[str, ...] = ("local", "staging")
    DATABASE_URL: str = Field(..., validation_alias="DATABASE_URL")

    SECRET_KEY: SecretStr
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    REFRESH_TOKEN_EXPIRE_DAYS: int = 7
    ALGORITHM: str = "HS256"


settings = Settings()
