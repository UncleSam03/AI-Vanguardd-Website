import google.generativeai as genai
import os
import json
from .schemas import ProjectCategorization

class IntelligenceService:
    def __init__(self):
        genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
        self.model = genai.GenerativeModel('gemini-1.5-flash')

    async def categorize_lead(self, description: str) -> ProjectCategorization:
        prompt = f"""
        Analyze the following client project description and categorize it for a digital agency (AI Vanguard).
        Description: {description}

        Return a JSON object with the following fields:
        - project_type (e.g., "Landing Page", "AI Chatbot", "Full Automation")
        - price_estimate (numeric value in USD)
        - estimated_duration_weeks (integer)
        - suggested_slack_channel (kebab-case name, e.g., "client-acme-landing")
        - welcome_video_script (A short, personalized script for a welcome video)
        - tags (list of keywords)

        Ensure the pricing is realistic (Landing Pages ~$100/mo, Bundles ~$150/mo).
        Return ONLY the JSON.
        """
        
        response = self.model.generate_content(prompt)
        # Handle potential markdown formatting in response
        content = response.text.strip()
        if content.startswith("```json"):
            content = content[7:-3].strip()
        
        data = json.loads(content)
        return ProjectCategorization(**data)
