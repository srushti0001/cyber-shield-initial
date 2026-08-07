import { useState } from "react";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import "../styles/password.css";

function PasswordChecker() {
  const [password, setPassword] = useState("");
  const [result, setResult] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const checkPassword = async (pass) => {
    setPassword(pass);

    if (pass.trim() === "") {
      setResult(null);
      return;
    }

    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/password?password=${encodeURIComponent(pass)}`
      );

      setResult(response.data);
    } catch (error) {
      console.error(error);
      alert("Cannot connect to backend");
    }
  };

  return (
    <div className="password-page">
      <h1>🔐 Password Strength Checker</h1>

      <p className="subtitle">
        Enter your password to check its strength in real time.
      </p>

      <div className="password-input">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password..."
          value={password}
          onChange={(e) => checkPassword(e.target.value)}
        />

        <button
          type="button"
          className="eye-btn"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
        </button>
      </div>

      {result && (
        <div className="password-result">
          <h2>{result.strength} Password</h2>

          <div className="strength-bar">
            <div
              className="strength-fill"
              style={{
                width: `${result.score}%`,
                background:
                  result.score < 40
                    ? "#EF4444"
                    : result.score < 80
                    ? "#F59E0B"
                    : "#22C55E",
              }}
            ></div>
          </div>

          <h3>{result.score}% Secure</h3>

          <div className="suggestions">
            <h3>Suggestions</h3>

            {result.suggestions.length === 0 ? (
              <p className="success">
                ✅ Excellent! Your password is very strong.
              </p>
            ) : (
              <ul>
                {result.suggestions.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default PasswordChecker;