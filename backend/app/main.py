from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os

from app.schemas import IntakeData, CategorizedProject, WizardData, QuotationSummary
from app.services.intelligence import IntelligenceService
from app.services.slack import SlackService
from app.services.notion import NotionService
from app.services.strategy import StrategyService
from app.routers import payoneer_mock

load_dotenv()

app = FastAPI(title="AI Vanguard Automations")
app.include_router(payoneer_mock.router)

intelligence_service = IntelligenceService()
slack_service = SlackService()
notion_service = NotionService()
strategy_service = StrategyService()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
async def health_check():
    return {"status": "ok", "message": "AI Vanguard Onboarding System is active"}

@app.post("/api/intake", response_model=ProjectCategorization)
async def lead_intake(lead: LeadIntake):
    # 1. AI Intelligent Categorization
    result = await intelligence_service.categorize_lead(lead.description)
    
    # 2. Automation: Create Slack Channel
    slack_id = await slack_service.create_channel(result.suggested_slack_channel)
    
    # 3. Automation: Trigger Notion Duplication
    notion_url = await notion_service.duplicate_kickoff_template(lead.name)
    
    # 4. Payoneer: (Simulated) Create Payment Request for Deposit
    # In a full impl, we'd call the /mock/payoneer/v1/payment_requests endpoint here.
    
    return result

@app.post("/api/strategy", response_model=QuotationSummary)
async def generate_strategy(data: WizardData):
    """
    Generates an automated quotation based on wizard inputs and simulates sending an email.
    """
    service = StrategyService()
    return await service.generate_strategy(data)

if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)
