import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
df = pd.read_csv("datasets/Phishing_Email.csv")

df = df[["Email Text", "Email Type"]]

df["Email Type"] = df["Email Type"].map({
    "Safe Email": 0,
    "Phishing Email": 1
})

# Remove missing values
df = df.dropna(subset=["Email Text"])

print("Dataset Shape After Cleaning:")
print(df.shape)

from sklearn.feature_extraction.text import TfidfVectorizer

vectorizer = TfidfVectorizer(max_features=5000)

X = vectorizer.fit_transform(df["Email Text"])

print("Feature Matrix Shape:")
print(X.shape)

from sklearn.model_selection import train_test_split

y = df["Email Type"]

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

print("Training Data Shape:", X_train.shape)
print("Testing Data Shape:", X_test.shape)

from sklearn.linear_model import LogisticRegression

model = LogisticRegression(max_iter=1000)

model.fit(X_train, y_train)

print("Model Training Complete!")

from sklearn.metrics import accuracy_score

y_pred = model.predict(X_test)

accuracy = accuracy_score(y_test, y_pred)

print("Accuracy:", accuracy)
import joblib

joblib.dump(model, "models/phishing_model.pkl")
joblib.dump(vectorizer, "models/vectorizer.pkl")

print("Model Saved Successfully!")