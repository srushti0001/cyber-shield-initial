import pandas as pd
import joblib

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Load dataset
df = pd.read_csv("datasets/malicious_phish.csv")

# Keep required columns
df = df[["url", "type"]]

# Remove missing values
df.dropna(inplace=True)

print("Dataset Shape:", df.shape)

print("\nClass Distribution:")
print(df["type"].value_counts())

# Features
X = df["url"]
y = df["type"]
import pandas as pd
import joblib

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report

# Load dataset
df = pd.read_csv("datasets/malicious_phish.csv")

# Keep required columns
df = df[["url", "type"]]

# Remove missing values
df.dropna(inplace=True)

print("Dataset Shape:", df.shape)

print("\nClass Distribution:")
print(df["type"].value_counts())

# Features
X = df["url"]
y = df["type"]

# TF-IDF Vectorizer
vectorizer = TfidfVectorizer(
    max_features=10000,
    analyzer="char",
    ngram_range=(3, 5)
)

X = vectorizer.fit_transform(X)

# Train-Test Split
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
    stratify=y
)
print("Unique Labels:")
print(y.unique())

# Train Model
model = LogisticRegression(max_iter=1000)

model.fit(X_train, y_train)

# Prediction
predictions = model.predict(X_test)

# Accuracy
accuracy = accuracy_score(y_test, predictions)

print("\nAccuracy:", round(accuracy * 100, 2), "%")

print("\nClassification Report:")
print(classification_report(y_test, predictions))

# Save Model
joblib.dump(model, "models/url_model.pkl")
joblib.dump(vectorizer, "models/url_vectorizer.pkl")

print("\nURL Model Saved Successfully!")