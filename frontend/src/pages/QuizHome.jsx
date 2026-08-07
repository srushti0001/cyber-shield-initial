import { useNavigate } from "react-router-dom";
import "../styles/quizHome.css";

function QuizHome() {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Phishing",
      path: "phishing",
      description: "Identify phishing emails, fake websites, and online scams.",
      icon: "🎣",
    },
    {
      name: "Password Security",
      path: "passwords",
      description: "Learn strong password practices and account protection.",
      icon: "🔐",
    },
    {
      name: "Malware",
      path: "malware",
      description: "Understand viruses, worms, ransomware, and spyware.",
      icon: "🦠",
    },
    {
      name: "Web Security",
      path: "websecurity",
      description: "Secure browsing, HTTPS, SQL Injection, and XSS.",
      icon: "🌐",
    },
    {
      name: "Network Security",
      path: "networksecurity",
      description: "Firewalls, VPNs, routers, Wi-Fi security, and protocols.",
      icon: "📡",
    },
    {
      name: "Email Security",
      path: "emailsecurity",
      description: "Protect against phishing, spoofing, and malicious attachments.",
      icon: "📧",
    },
    {
      name: "Mobile Security",
      path: "mobilesecurity",
      description: "Secure smartphones, apps, permissions, and mobile threats.",
      icon: "📱",
    },
    {
      name: "Cloud Security",
      path: "cloudsecurity",
      description: "Learn secure cloud storage, sharing, and access control.",
      icon: "☁️",
    },
    {
      name: "Cyber Awareness",
      path: "cyberawareness",
      description: "Develop safe online habits and recognize cyber threats.",
      icon: "🛡️",
    },
    {
      name: "Ethical Hacking",
      path: "ethicalhacking",
      description: "Explore penetration testing, vulnerability assessment, and ethical hacking.",
      icon: "👨‍💻",
    },
  ];

  return (
    <div className="quiz-home">
      <div className="quiz-header">
        <h1>🛡️ CyberShield Quiz</h1>
        <p>
          Test your cybersecurity knowledge by choosing a topic below.
        </p>
      </div>

      <div className="category-grid">
        {categories.map((category) => (
          <div
            key={category.path}
            className="category-card"
            onClick={() => navigate(`/quiz/${category.path}`)}
          >
            <div className="category-icon">{category.icon}</div>

            <h2>{category.name}</h2>

            <p>{category.description}</p>

            <button
              className="start-btn"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/quiz/${category.path}`);
              }}
            >
              Start Quiz →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuizHome;