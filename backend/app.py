from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from password_checker import check_password
import joblib
from ai_assistant import ask_ai
from predict_url import predict_url
app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Load model and vectorizer
model = joblib.load("models/phishing_model.pkl")
vectorizer = joblib.load("models/vectorizer.pkl")


@app.get("/")
def home():
    return {
        "message": "CyberShield API Running"
    }


@app.get("/predict")
def predict(text: str):

    email_vector = vectorizer.transform([text])

    prediction = model.predict(email_vector)[0]

    probability = model.predict_proba(email_vector)[0]

    phishing_score = round(probability[1] * 100, 2)

    if prediction == 1:
        label = "Phishing Email"
    else:
        label = "Safe Email"

    return {
        "prediction": label,
        "risk_score": phishing_score
    }

@app.get("/password")
def password(password: str):

    return check_password(password)

@app.get("/url")
def analyze_url(url: str):

    return predict_url(url)
from pydantic import BaseModel

class ChatRequest(BaseModel):
    message: str


@app.post("/chat")
def chat(request: ChatRequest):

    reply = ask_ai(request.message)

    return {
        "reply": reply
    }