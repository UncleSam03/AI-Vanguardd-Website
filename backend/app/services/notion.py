import httpx
import os
import json

class NotionService:
    def __init__(self):
        self.token = os.getenv("NOTION_TOKEN")
        self.headers = {
            "Authorization": f"Bearer {self.token}",
            "Notion-Version": "2022-06-28",
            "Content-Type": "application/json"
        }
        self.base_url = "https://api.notion.com/v1"

    async def search_for_page(self, query: str):
        async with httpx.AsyncClient() as client:
            response = await client.post(
                f"{self.base_url}/search",
                headers=self.headers,
                json={"query": query, "filter": {"property": "object", "value": "page"}}
            )
            return response.json()

    async def duplicate_kickoff_template(self, client_name: str) -> str:
        # 1. Find the Master Template
        search_results = await self.search_for_page("Master Project Template")
        if not search_results.get("results"):
            return "ERROR: Master Project Template not found. Please ensure the integration has access to it."
        
        template_id = search_results["results"][0]["id"]
        
        # 2. Find the 'Active Clients' destination
        # For simplicity, we'll try to find a page or database named 'Active Clients'
        dest_results = await self.search_for_page("Active Clients")
        if not dest_results.get("results"):
            # Fallback: create in the same parent as the template
            parent = search_results["results"][0]["parent"]
        else:
            parent = {"type": dest_results["results"][0]["object"] + "_id", dest_results["results"][0]["object"] + "_id": dest_results["results"][0]["id"]}

        # 3. Create a new page with the template as content (Notion API doesn't have a direct 'duplicate' endpoint for integrations yet, so we retrieve and recreate)
        # Note: True duplication of complex pages via API is limited. 
        # For now, we'll create a new page and link it, or use a workaround if the user has a database.
        
        new_page_data = {
            "parent": parent,
            "properties": {
                "title": {
                    "title": [
                        {
                            "text": {
                                "content": f"{client_name} - AI Vanguard Project"
                            }
                        }
                    ]
                }
            }
        }

        async with httpx.AsyncClient() as client:
            response = await client.post(
                f"{self.base_url}/pages",
                headers=self.headers,
                json=new_page_data
            )
            data = response.json()
            if response.status_code != 200:
                return f"ERROR: Failed to create page: {data.get('message')}"
            
            return data.get("url", "https://notion.so")
