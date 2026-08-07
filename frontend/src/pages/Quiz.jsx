import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import phishingQuestions from "../data/quiz/phishing";
import passwordQuestions from "../data/quiz/passwords";
import malwareQuestions from "../data/quiz/malware";
import webQuestions from "../data/quiz/webSecurity";
import networkQuestions from "../data/quiz/networkSecurity";
import emailQuestions from "../data/quiz/emailSecurity";
import mobileQuestions from "../data/quiz/mobileSecurity";
import cloudQuestions from "../data/quiz/cloudSecurity";
import cyberAwarenessQuestions from "../data/quiz/cyberAwareness";
import ethicalHackingQuestions from "../data/quiz/ethicalHacking";

import { shuffleArray, shuffleQuestion } from "../utils/shuffle";

import "../styles/quiz.css";

const questionBank = {
  phishing: phishingQuestions,
  passwords: passwordQuestions,
  malware: malwareQuestions,
  websecurity: webQuestions,
  networksecurity: networkQuestions,
  emailsecurity: emailQuestions,
  mobilesecurity: mobileQuestions,
  cloudsecurity: cloudQuestions,
  cyberawareness: cyberAwarenessQuestions,
  ethicalhacking: ethicalHackingQuestions,
};

function Quiz() {
  const { category } = useParams();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [review, setReview] = useState([]);

  useEffect(() => {
    const selectedQuestions = questionBank[category];

    if (!selectedQuestions) {
      navigate("/quiz");
      return;
    }

    const shuffledQuestions = shuffleArray(
      selectedQuestions.map(shuffleQuestion)
    );

    setQuestions(shuffledQuestions);
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowAnswer(false);
    setScore(0);
    setReview([]);
  }, [category, navigate]);

  if (questions.length === 0) {
    return (
      <div className="quiz-container">
        <h2>Loading Quiz...</h2>
      </div>
    );
  }

  const question = questions[currentQuestion];

  const handleSubmit = () => {
    if (selectedOption === null) return;

    const isCorrect = selectedOption === question.answer;

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setReview((prev) => [
      ...prev,
      {
        question: question.question,
        selected: question.options[selectedOption],
        correct: question.options[question.answer],
        explanation: question.explanation,
        tip: question.tip,
        isCorrect,
      },
    ]);

    setShowAnswer(true);
  };

  const handleNext = () => {
    const finalScore =
      currentQuestion === questions.length - 1
        ? selectedOption === question.answer
          ? score + 1
          : score
        : score;

    if (currentQuestion === questions.length - 1) {
      navigate("/result", {
        state: {
          score: finalScore,
          total: questions.length,
          category,
          review,
        },
      });
      return;
    }

    setCurrentQuestion((prev) => prev + 1);
    setSelectedOption(null);
    setShowAnswer(false);
  };

  return (
    <div className="quiz-container">
      <h1>🛡️ CyberShield Quiz</h1>

      <div className="quiz-info">
        <span>
          {category
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (c) => c.toUpperCase())}
        </span>

        <span>{question.difficulty}</span>

        <span>⭐ Score: {score}</span>
      </div>

      <div className="quiz-progress">
        Question {currentQuestion + 1} of {questions.length}
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${((currentQuestion + 1) / questions.length) * 100}%`,
          }}
        />
      </div>

      <div className="question-card">
        <h2>{question.question}</h2>

        {question.options.map((option, index) => {
          let className = "option-card";

          if (showAnswer) {
            if (index === question.answer) {
              className += " correct";
            } else if (
              index === selectedOption &&
              selectedOption !== question.answer
            ) {
              className += " wrong";
            }
          } else if (selectedOption === index) {
            className += " selected";
          }

          return (
            <div
              key={index}
              className={className}
              onClick={() => {
                if (!showAnswer) {
                  setSelectedOption(index);
                }
              }}
            >
              <div className="option-letter">
                {String.fromCharCode(65 + index)}
              </div>

              <div className="option-text">{option}</div>
            </div>
          );
        })}

        {!showAnswer ? (
          <button
            className="submit-btn"
            onClick={handleSubmit}
            disabled={selectedOption === null}
          >
            Submit Answer
          </button>
        ) : (
          <>
            <div className="answer-box">
              {selectedOption === question.answer ? (
                <h3>✅ Correct!</h3>
              ) : (
                <h3>❌ Incorrect</h3>
              )}

              <p>
                <strong>Correct Answer:</strong>{" "}
                {question.options[question.answer]}
              </p>

              <hr />

              <p>
                <strong>Explanation</strong>
              </p>

              <p>{question.explanation}</p>

              <p>
                <strong>💡 Cyber Tip</strong>
              </p>

              <p>{question.tip}</p>
            </div>

            <button className="next-btn" onClick={handleNext}>
              {currentQuestion === questions.length - 1
                ? "🏁 Finish Quiz"
                : "Next Question →"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;