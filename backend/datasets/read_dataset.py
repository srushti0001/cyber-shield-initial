import pandas as pd

df = pd.read_csv("datasets/Phishing_Email.csv")

print("Dataset Shape:")
print(df.shape)

print("\nEmail Types:")
print(df["Email Type"].value_counts())
