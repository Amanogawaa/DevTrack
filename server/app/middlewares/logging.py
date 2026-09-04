import logging
from fastapi import Request

from starlette.middleware.base import BaseHTTPMiddleware

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
