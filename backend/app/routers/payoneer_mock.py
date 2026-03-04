from fastapi import APIRouter, HTTPException, Request
from pydantic import BaseModel
import uuid

router = APIRouter(prefix="/mock/payoneer", tags=["Payoneer Mock"])

class PaymentRequest(BaseModel):
    recipient_email: str
    amount: float
    currency: str = "USD"
    description: str

@router.post("/oauth2/token")
async def mock_token_exchange():
    return {
        "access_token": f"mock_access_token_{uuid.uuid4()}",
        "refresh_token": f"mock_refresh_token_{uuid.uuid4()}",
        "expires_in": 3600,
        "token_type": "Bearer"
    }

@router.post("/v1/payment_requests")
async def mock_create_payment_request(request: PaymentRequest):
    return {
        "payment_request_id": f"pay_{uuid.uuid4().hex[:8]}",
        "status": "SENT",
        "link": "https://payoneer.com/mock-checkout-link"
    }

@router.get("/v1/payment_requests/{request_id}")
async def mock_get_payment_request(request_id: str):
    return {
        "payment_request_id": request_id,
        "status": "PAID" if "paid" in request_id.lower() else "SENT"
    }
