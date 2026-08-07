import { useLocation, useNavigate } from "react-router-dom";
import "../styles/result.css";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  if (!location.state) {
    navigate("/quiz");
    return null;
  }

  const { score, total, category, review } = location.state;

  const percentage = Math.round((score / total) * 100);

  let grade = "";
  let message = "";

  if (percentage >= 90) {
    grade = "A+";
    message = "Outstanding! You have excellent cybersecurity awareness.";
  } else if (percentage >= 80) {
    grade = "A";
    message = "Great work! Your security knowledge is very strong.";
  } else if (percentage >= 70) {
    grade = "B";
    message = "Good job! Keep practicing to improve further.";
  } else if (percentage >= 60) {
    grade = "C";
    message = "Fair attempt. Review the explanations and try again.";
  } else {
    grade = "D";
    message = "Keep learning. Cybersecurity improves with practice.";
  }

  return (
    <div className="result-container">
      <div className="result-card">

        <h1>🏆 Quiz Completed</h1>

        <h2>{category.replace("-", " ")}</h2>

        <div className="score-circle">
          {percentage}%
        </div>

        <h3>Score</h3>
        <p>{score} / {total}</p>

        <h3>Grade</h3>
        <p>{grade}</p>

        <p className="result-message">{message}</p>

        <div className="result-buttons">

          <button
            onClick={() => navigate(`/quiz/${category}`)}
          >
            🔄 Retry Quiz
          </button>

          <button
            onClick={() => navigate("/quiz")}
          >
            📚 Choose Another Topic
          </button>

          <button
            onClick={() =>
              navigate("/review", {
                state: { review },
              })
            }
          >
            👀 Review Answers
          </button>

        </div>

      </div>
    </div>
  );
}

export default Result;