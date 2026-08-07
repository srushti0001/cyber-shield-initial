import joblib

model = joblib.load("models/url_model.pkl")
vectorizer = joblib.load("models/url_vectorizer.pkl")


def predict_url(url):

    vector = vectorizer.transform([url])

    prediction = model.predict(vector)[0]

    probability = model.predict_proba(vector)[0]

    score = round(probability[1] * 100, 2)

    if prediction == 1:
        status = "Unsafe Website"
    else:
        status = "Safe Website"

    return {
        "status": status,
        "risk_score": score
    }


if __name__ == "__main__":
    url = input("Enter URL:\n")
    result = predict_url(url)
    print(result)