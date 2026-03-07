import sys
import os

# add parent directory to path so we can import app
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from app.services.email import EmailService

def main():
    service = EmailService()
    quotation_data = {
        "summary_text": "This is a great AI project.",
        "estimated_cost": "$99.99 /mo",
        "estimated_timeline": "1 Week",
        "services_included": ["Chatbot", "Lead Capture"]
    }
    
    # this should fall back to print simulation
    success = service.send_quotation("test@example.com", quotation_data, "Test Business")
    print(f"Function returned: {success}")

if __name__ == "__main__":
    main()
