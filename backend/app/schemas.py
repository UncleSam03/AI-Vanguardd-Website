from pydantic import BaseModel
from typing import List, Optional

class WizardData(BaseModel):
    business_name: str
    industry: str
    primary_ai_goal: str
    tech_stack: List[str]
    comm_preference: str

class StrategySummary(BaseModel):
    opportunities: List[str]
    efficiency_gains: str
    recommended_roadmap: List[str]
    summary_text: str
