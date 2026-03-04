from pydantic import BaseModel, EmailStr
from typing import Optional, Dict

class LeadIntake(BaseModel):
    name: str
    email: EmailStr
    description: str
    company_name: Optional[str] = None

class ProjectCategorization(BaseModel):
    project_type: str
    price_estimate: float
    estimated_duration_weeks: int
    suggested_slack_channel: str
    welcome_video_script: str
    tags: list[str]
