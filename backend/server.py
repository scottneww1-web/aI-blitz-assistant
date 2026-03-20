# Remove or comment out the current CORSMiddleware block
# app.add_middleware(CORSMiddleware, ...)

# Add this secure version:
from starlette.middleware.base import BaseHTTPMiddleware
from fastapi.middleware.cors import CORSMiddleware

# Explicitly define allowed origins (no wildcards in production)
allowed_origins = [
    "https://yourapp.com",
    "https://www.yourapp.com",
    "http://localhost:3000",  # For local development
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,  # Must be specific when allow_credentials=True
    allow_credentials=True,
    allow_methods=["POST", "GET"],  # Only what you use
    allow_headers=["Authorization", "Content-Type"],
    max_age=3600,  # Cache preflight requests for 1 hour
)

# Optional: Add security headers middleware
class SecurityHeadersMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request, call_next):
        response = await call_next(request)
        response.headers["X-Content-Type-Options"] = "nosniff"
        response.headers["X-Frame-Options"] = "DENY"
        response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
        response.headers["Content-Security-Policy"] = "default-src 'none'; frame-ancestors 'none'"
        if request.url.scheme == "https":
            response.headers["Strict-Transport-Security"] = "max-age=31536000; includeSubDomains"
        return response

app.add_middleware(SecurityHeadersMiddleware)Copied! 
origins = (
    ["https://yourapp.com", "https://www.yourapp.com"]
    if os.getenv("ENV") == "production"
    else ["http://localhost:3000"]
)  
 
  from slowapi import Limiter
from slowapi.util import get_remote_address
limiter = Limiter(key_func=get_remote_address)
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)   

