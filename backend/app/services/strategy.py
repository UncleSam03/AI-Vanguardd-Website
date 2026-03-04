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
        Act as a senior AI Consultant at AI Vanguard, specializing in AI for the trades (Plumbing, Electrical, HVAC, Landscaping). 
        Create an 'Initial AI Strategy Summary' for a {data.industry} business named {data.business_name}.
        
        Client Details:
        - Primary Goal: {data.primary_ai_goal} (Focused on Chatbots and Landing Pages)
        - Preferred Comms: {data.comm_preference}

        Your strategy should focus on how an AI Chatbot can handle emergency routing or how a new Landing Page can increase conversion for their specific trade.

        Return a JSON object with:
        - opportunities (3 specific service-based opportunities, e.g., '24/7 HVAC Emergency Dispatch Bot')
        - efficiency_gains (Expected impact on lead conversion or response time)
        - recommended_roadmap (3 immediate steps to launch their chatbot or site)
        - summary_text (A professional 2-sentence pitch for their AI transformation)

        Return ONLY the JSON.
        """
        
        response = self.model.generate_content(prompt)
        content = response.text.strip()
        if content.startswith("```json"):
            content = content[7:-3].strip()
        
        result_data = json.loads(content)
        return StrategySummary(**result_data)
