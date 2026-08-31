import logging
from typing import TYPE_CHECKING

from starlette.middleware.base import BaseHTTPMiddleware

if TYPE_CHECKING:
    from fastapi import Request

logging.basicConfig(
    filename="app.log",
    level=logging.INFO,
    format="- %(asctime)s - %(levelname)s - %(message)s - ",
)

logger = logging.getLogger(__name__)


class LoggingMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        client_ip = request.client.host
        method = request.method
        url = request.url.path

        logger.info(f"Request: {method} {url} from {client_ip}")
        response = await call_next(request)

        logger.info(
            f"Response: {method} {url} from {client_ip} - {response.status_code}"
        )

        return response
