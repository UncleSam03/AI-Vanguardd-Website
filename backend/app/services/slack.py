import httpx
import os

class SlackService:
    def __init__(self):
        self.token = os.getenv("SLACK_BOT_TOKEN")
        self.base_url = "https://slack.com/api"

    async def create_channel(self, name: str) -> str:
        # If no token, return a mock ID
        if not self.token:
            return "C_MOCK_SLACK_ID"
        
        async with httpx.AsyncClient() as client:
            response = await client.post(
                f"{self.base_url}/conversations.create",
                headers={"Authorization": f"Bearer {self.token}"},
                json={"name": name}
            )
            data = response.json()
            if not data.get("ok"):
                # Handle error or return mock for now if testing
                return f"ERROR_{data.get('error')}"
            return data["channel"]["id"]
