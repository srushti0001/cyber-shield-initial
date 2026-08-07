import { useLocation, useNavigate } from "react-router-dom";

function Review() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state || !state.review) {
    return (
      <div style={{ padding: "40px", color: "white" }}>
        <h2>No review data available.</h2>
        <button onClick={() => navigate("/quiz")}>
          Back to Quiz
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h1>Review Answers</h1>

      {state.review.map((item, index) => (
        <div
          key={index}
          style={{
            marginBottom: "20px",
            padding: "20px",
            border: "1px solid #444",
            borderRadius: "10px",
          }}
        >
          <h3>
            Q{index + 1}. {item.question}
          </h3>

          <p>
            <strong>Your Answer:</strong> {item.selected}
          </p>

          <p>
            <strong>Correct Answer:</strong> {item.correct}
          </p>

          <p>{item.explanation}</p>
        </div>
      ))}
    </div>
  );
}

export default Review;