import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

class EmailService:
    def __init__(self):
        self.smtp_server = os.getenv("SMTP_SERVER", "smtp.gmail.com")
        self.smtp_port = int(os.getenv("SMTP_PORT", 587))
        self.smtp_username = os.getenv("SMTP_USERNAME")
        self.smtp_password = os.getenv("SMTP_PASSWORD")
        self.sender_email = os.getenv("SENDER_EMAIL", self.smtp_username)

    def send_quotation(self, recipient_email: str, quotation_data: dict, business_name: str) -> bool:
        """
        Sends the generated quotation to the client.
        Falls back to simulation if credentials are not provided.
        """
        if not self.smtp_username or not self.smtp_password:
            print("\n" + "="*50)
            print("⚠️ SMTP credentials missing. Simulating email send instead.")
            print(f"📧 [SIMULATED EMAIL] To: {recipient_email}")
            print(f"Subject: Your AI Project Quotation - AI Vanguard")
            print(f"Cost: {quotation_data.get('estimated_cost')}")
            print("="*50 + "\n")
            return False

        try:
            msg = MIMEMultipart()
            msg['From'] = self.sender_email
            msg['To'] = recipient_email
            msg['Subject'] = f"Your AI Project Quotation - AI Vanguard"

            body = f"""
Hello {business_name},

{quotation_data.get('summary_text', '')}

Estimated Investment: {quotation_data.get('estimated_cost', '')}
Timeline: {quotation_data.get('estimated_timeline', '')}

What's Included:
"""
            for service in quotation_data.get('services_included', []):
                body += f"- {service}\n"

            msg.attach(MIMEText(body, 'plain'))

            server = smtplib.SMTP(self.smtp_server, self.smtp_port)
            server.starttls()
            server.login(self.smtp_username, self.smtp_password)
            server.send_message(msg)
            server.quit()
            
            print(f"✅ Real email quotation sent securely to {recipient_email}")
            return True
        except Exception as e:
            print(f"❌ Error sending real email: {e}")
            return False
