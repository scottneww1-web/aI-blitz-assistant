from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv
from chatflow_handler import chatflow_router

load_dotenv()

# Initialize App
app = FastAPI(title="Ai Blitz Assistant")

# CORS
cors_origins = os.getenv('CORS_ORIGINS', '*').split(',')
app.add_middleware(
    CORSMiddleware,
    allow_origins=cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include chat router
app.include_router(chatflow_router)

@app.get("/")
async def root():
    return {"message": "Ai Blitz Assistant API", "status": "running"}

@app.get("/health")
async def health():
    return {"status": "healthy"}
