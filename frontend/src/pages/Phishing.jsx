import { useState } from "react";
import axios from "axios";
import "../styles/phishing.css";

function Phishing() {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeEmail = async () => {
    if (!email.trim()) {
      alert("Please paste an email first.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/predict?text=${encodeURIComponent(email)}`
      );

      setResult(response.data);
    } catch (error) {
      alert("Cannot connect to FastAPI backend.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getThreatLevel = (score) => {
    if (score >= 80) return "Critical";
    if (score >= 50) return "Medium";
    return "Low";
  };

  return (
    <div className="phishing-page">

      <h1>🛡️ AI Phishing Email Detection</h1>

      <p>
        Analyze suspicious emails using CyberShield's Machine Learning model.
        Paste the email content below to receive a complete phishing risk
        assessment along with AI-generated recommendations.
      </p>

      <textarea
        rows="12"
        placeholder="Paste the suspicious email here..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={analyzeEmail}>
        {loading ? "🔍 Analyzing Email..." : "🚀 Analyze Email"}
      </button>

      {result && (
        <div className="result-card">

          <div className="risk-header">

            <div>

              <h2>CyberShield AI Threat Report</h2>

              <p>
                Machine Learning based phishing analysis
              </p>

            </div>

            <div
              className={
                result.risk_score >= 80
                  ? "status high"
                  : result.risk_score >= 50
                  ? "status medium"
                  : "status low"
              }
            >
              {result.risk_score >= 80
                ? "🔴 HIGH RISK"
                : result.risk_score >= 50
                ? "🟡 MEDIUM RISK"
                : "🟢 LOW RISK"}
            </div>

          </div>

          <div className="risk-score-box">

            <div className="risk-number">

              <h1>{result.risk_score}%</h1>

              <span>Overall Risk Score</span>

            </div>

            <div className="risk-info">

              <div className="info-row">
                <span>Prediction</span>

                <strong
                  className={
                    result.prediction === "Phishing Email"
                      ? "danger"
                      : "safe"
                  }
                >
                  {result.prediction}
                </strong>
              </div>

              <div className="info-row">
                <span>Threat Level</span>

                <strong>
                  {getThreatLevel(result.risk_score)}
                </strong>
              </div>

              <div className="info-row">
                <span>AI Confidence</span>

                <strong>{result.risk_score}%</strong>
              </div>

            </div>

          </div>

          <div className="progress">

            <div
              className="progress-fill"
              style={{
                width: `${result.risk_score}%`,
                background:
                  result.risk_score >= 80
                    ? "#ef4444"
                    : result.risk_score >= 50
                    ? "#f59e0b"
                    : "#22c55e",
              }}
            />

          </div>

          <div className="analysis-section">

            <h3>🔍 Why was this email flagged?</h3>

            <ul>

              <li>
                ✔ Machine Learning model detected phishing patterns.
              </li>

              <li>
                ✔ Suspicious words and sentence structure identified.
              </li>

              <li>
                ✔ Email characteristics match known phishing behaviour.
              </li>

              <li>
                ✔ Risk score generated from the trained phishing detection model.
              </li>

            </ul>

          </div>

          <div className="analysis-section">

            <h3>🛡️ Recommended Actions</h3>

            <ul>

              <li>✔ Verify the sender's email address carefully.</li>

              <li>✔ Avoid clicking unknown links.</li>

              <li>✔ Never download unexpected attachments.</li>

              <li>✔ Never share passwords, OTPs or banking information.</li>

              <li>✔ Report suspicious emails to your IT administrator.</li>

            </ul>

          </div>

          <div className="disclaimer">

            <strong>⚠ Disclaimer</strong>

            <br />

            This analysis is generated using an AI-powered Machine Learning
            model and should be considered as a preliminary cybersecurity
            assessment. Always verify suspicious emails through official
            communication channels before taking any action.

          </div>

        </div>
      )}

    </div>
  );
}

export default Phishing;