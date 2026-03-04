import google.generativeai as genai
from typing import Optional
import os
import json

from app.schemas import WizardData, QuotationSummary

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

        Your quotation should provide a realistic price estimate based on the goal:
        - Chatbots are typically $1,500 - $3,000.
        - Landing Pages are typically $2,000 - $4,500.
        - Full Onboarding (Both) is $3,500 - $7,000.
        Adjust the terminology appropriately for their industry ({data.industry}).

        Return a JSON object matching this schema exactly:
        {{
            "summary_text": "A brief 2-sentence welcoming pitch explaining the ROI of this project for their specific trade.",
            "estimated_cost": "A price range, e.g., '$2,500 - $4,000'",
            "estimated_timeline": "A rough timeline, e.g., '2-3 Weeks'",
            "services_included": ["Bullet 1", "Bullet 2", "Bullet 3", "Bullet 4"]
        }}
        """
        
        response = self.model.generate_content(prompt)
        response_text = response.text
        # Optional: handle if Gemini wraps it in ```json ... ```
        if response_text.startswith("```json"):
            response_text = response_text.replace("```json\n", "").replace("\n```", "")
        
        result_dict = json.loads(response_text)
        
        # --- SIMULATE AUTOMATED EMAIL SENDING ---
        print("\n" + "="*50)
        print(f"📧 [SIMULATED NOTIFICATION] AUTOMATED QUOTE SENT")
        print(f"To: {data.email}")
        print(f"Subject: Your AI Project Quotation - AI Vanguard")
        print(f"Cost: {result_dict.get('estimated_cost')}")
        print("="*50 + "\n")
        
        return QuotationSummary(**result_dict)
