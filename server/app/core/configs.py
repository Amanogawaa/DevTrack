from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file="env",
        case_sensitive=False,
        extra="ignore"
    )
    
    app_name: str = "DevTrack"
    app_description: str = "DevTrack is a project management tool for developers."
    app_version: str = "1.0.0"
    environment: str = "local"
    show_docs_envs: tuple[str, ...] = ("local", "staging")
    database_url: str | None = None

    secret_key: str = "super-secret-key"
    access_token_expire_minutes: int = 10800

settings = Settings()

