import google.generativeai as genai
import os
import json
from .schemas import WizardData, StrategySummary

class StrategyService:
    def __init__(self):
        genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
        self.model = genai.GenerativeModel('gemini-1.5-flash')

    async def generate_strategy(self, data: WizardData) -> StrategySummary:
        prompt = f"""
        Act as a senior AI Consultant at AI Vanguard. 
        Create an 'Initial AI Strategy Summary' for the following client:
        - Business Name: {data.business_name}
        - Industry: {data.industry}
        - Primary AI Goal: {data.primary_ai_goal}
        - Tech Stack: {', '.join(data.tech_stack)}
        - Communication Preference: {data.comm_preference}

        Return a JSON object with:
        - opportunities (List of 3 specific AI opportunities for their industry and goal)
        - efficiency_gains (A sentence describing potential time or cost savings)
        - recommended_roadmap (List of 3 immediate next steps)
        - summary_text (A 2-3 sentence professional value proposition)

        Return ONLY the JSON.
        """
        
        response = self.model.generate_content(prompt)
        content = response.text.strip()
        if content.startswith("```json"):
            content = content[7:-3].strip()
        
        result_data = json.loads(content)
        return StrategySummary(**result_data)
