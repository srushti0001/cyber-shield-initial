import { useState } from "react";
import "../styles/url.css";

function UrlAnalyzer() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);

  const analyze = () => {
    let score = 0;

    if (!url.startsWith("https://")) score += 30;

    const words = [
      "login",
      "verify",
      "bank",
      "paypal",
      "secure",
      "account",
      "update",
      "confirm"
    ];

    words.forEach((word) => {
      if (url.toLowerCase().includes(word)) score += 10;
    });

    if (url.length > 60) score += 10;

    if (score > 100) score = 100;

    setResult({
      status: score >= 50 ? "Unsafe Website" : "Safe Website",
      risk: score
    });
  };

  return (
    <div className="url-page">
      <h1>🌐 URL Security Analyzer</h1>

      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <button onClick={analyze}>
        Analyze URL
      </button>

      {result && (
        <div className="url-result">
          <h2>{result.status}</h2>

          <h3>Risk Score : {result.risk}%</h3>
        </div>
      )}
    </div>
  );
}

export default UrlAnalyzer;
