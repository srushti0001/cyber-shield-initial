import joblib
import re
from urllib.parse import urlparse

# Load model
model = joblib.load("models/url_model.pkl")
vectorizer = joblib.load("models/url_vectorizer.pkl")


def predict_url(url):

    # -----------------------------
    # AI Prediction
    # -----------------------------

    vector = vectorizer.transform([url])

    prediction = model.predict(vector)[0]

    probability = model.predict_proba(vector)[0]

    ai_score = probability[1] * 100

    # -----------------------------
    # Rule-Based Checks
    # -----------------------------

    risk = ai_score

    recommendations = []

    parsed = urlparse(url)

    # HTTPS check
    if parsed.scheme != "https":
        risk += 20
        recommendations.append("Website does not use HTTPS.")

    # IP Address
    if re.search(r"\d+\.\d+\.\d+\.\d+", url):
        risk += 20
        recommendations.append("URL contains an IP address.")

    # Long URL
    if len(url) > 75:
        risk += 10
        recommendations.append("Very long URL detected.")

    # Suspicious keywords
    suspicious = [
        "login",
        "verify",
        "bank",
        "paypal",
        "update",
        "secure",
        "account",
        "confirm",
        "signin"
    ]

    found = []

    for word in suspicious:

        if word in url.lower():

            found.append(word)

            risk += 8

    if found:
        recommendations.append(
            "Suspicious keywords: " + ", ".join(found)
        )

    # Limit score
    if risk > 100:
        risk = 100

    # Final Prediction
    if risk >= 60:
        status = "Unsafe Website"
    else:
        status = "Safe Website"

    if len(recommendations) == 0:
        recommendations.append("No obvious threats detected.")

    return {

        "status": status,

        "risk_score": round(risk, 2),

        "recommendations": recommendations

    }


if __name__ == "__main__":

    url = input("Enter URL:\n")

    result = predict_url(url)

    print(result)