from pydantic import BaseModel
from typing import List, Optional

class WizardData(BaseModel):
    business_name: str
    industry: str
    primary_ai_goal: str
    email: str

class QuotationSummary(BaseModel):
    summary_text: str
    estimated_cost: str
    estimated_timeline: str
    services_included: List[str]
    recommended_roadmap: List[str]
    summary_text: str
