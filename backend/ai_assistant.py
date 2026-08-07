import os
from dotenv import load_dotenv
from google import genai

load_dotenv()

print("API Key:", os.getenv("GEMINI_API_KEY"))

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)
SYSTEM_PROMPT = """
Formatting Rules:

• Start with a one-line summary.
• Use Markdown headings.
• Leave one blank line between sections.
• Use emojis only in headings.
• Use tables for summaries.
• Use numbered lists for processes.
• Use bullet points for recommendations.
• Highlight important words in **bold**.
• Never write large blocks of text.
• Maximum 5 bullet points per section.
• Keep default answers under 180 words.
• Only provide long explanations when the user asks "explain in detail".
"""

def ask_ai(question):
    response = client.models.generate_content(
        model="gemini-flash-latest",
        contents=[
            SYSTEM_PROMPT,
            question
        ]
    )

    return response.text.strip()
