import google.generativeai as genai
from typing import Optional
import os
import json

from app.schemas import WizardData, QuotationSummary
from app.services.email import EmailService

class StrategyService:
    def __init__(self):
        genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
        self.model = genai.GenerativeModel('gemini-1.5-flash')

    async def generate_strategy(self, data: WizardData) -> QuotationSummary:
        prompt = f"""
        You are an elite AI Sales Engineer for AI Vanguard.
        A new potential client just completed our onboarding wizard.
        Generate a professional, high-converting quotation summary for this client.

        Client Details:
        - Business Name: {data.business_name}
        - Industry: {data.industry}
        - Primary Goal: {data.primary_ai_goal} (Focused on Chatbots and Landing Pages)
        - Contact Email: {data.email}

        Your quotation should use our exact subscription pricing model based on the goal:
        - Chatbots are exactly $49.99 /mo.
        - Landing Pages are exactly $99.99 one-time (+ domain fee).
        - Full Onboarding (Both) is $99.99 setup + $49.99 /mo (+ domain fee).
        Adjust the terminology appropriately for their industry ({data.industry}).

        Return a JSON object matching this schema exactly:
        {{
            "summary_text": "A brief 2-sentence welcoming pitch explaining the ROI of this project for their specific trade.",
            "estimated_cost": "The exact cost from the pricing model above, including the '+ domain fee' note if applicable.",
            "estimated_timeline": "A rough setup timeline, e.g., '3-5 Days' or '1 Week'",
            "services_included": ["Bullet 1", "Bullet 2", "Bullet 3", "Bullet 4"]
        }}
        """
        
        response = self.model.generate_content(prompt)
        response_text = response.text
        # Optional: handle if Gemini wraps it in ```json ... ```
        if response_text.startswith("```json"):
            response_text = response_text.replace("```json\n", "").replace("\n```", "")
        
        result_dict = json.loads(response_text)
        
        # --- SEND AUTOMATED EMAIL ---
        email_svc = EmailService()
        email_svc.send_quotation(data.email, result_dict, data.business_name)
        
        return QuotationSummary(**result_dict)
