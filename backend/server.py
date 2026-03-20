from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from starlette.middleware.base import BaseHTTPMiddleware
import os

# Load environment
load_dotenv()

# Initialize App
app = FastAPI(title="Ai Blitz Assistant")

# --- SECURITY: CORS Middleware (MUST be first) ---
# Restrict origins based on environment
if os.getenv("ENV") == "production":
    origins = ["https://yourapp.com", "https://www.yourapp.com"]
else:
    origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["POST", "GET"],
    allow_headers=["Authorization", "Content-Type"],
    expose_headers=["*"],  # Only if needed (e.g., for rate limit headers)
)

# --- SECURITY: Security Headers Middleware ---
class SecurityHeadersMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        response = await call_next(request)
        response.headers["X-Content-Type-Options"] = "nosniff"
        response.headers["X-Frame-Options"] = "DENY"
        response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
        response.headers["Content-Security-Policy"] = "default-src 'self'; frame-ancestors 'none'"
        if request.url.scheme == "https":
            response.headers["Strict-Transport-Security"] = "max-age=31536000; includeSubDomains"
        return response

app.add_middleware(SecurityHeadersMiddleware)

# --- SECURITY: Rate Limiting ---
limiter = Limiter(key_func=get_remote_address, default_limits=["100/hour"])
app.state.limiter = limiter
app.add_exception_handler(HTTPException, _rate_limit_exceeded_handler)

# Include router
app.include_router(chatflow_router)

@app.get("/")
async def root():
    return {"message": "Ai Blitz Assistant API", "status": "running"}

@app.get("/health")
async def health():
    return {"status": "healthy"}   
