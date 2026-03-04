from .schemas import LeadIntake, ProjectCategorization
from .services.intelligence import IntelligenceService
from .services.slack import SlackService
from .services.notion import NotionService
from .routers import payoneer_mock

load_dotenv()

app = FastAPI(title="AI Vanguard Onboarding API")
app.include_router(payoneer_mock.router)

intelligence_service = IntelligenceService()
slack_service = SlackService()
notion_service = NotionService()

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

if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)
