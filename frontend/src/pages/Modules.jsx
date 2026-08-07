import FeatureCard from "../components/FeatureCard";
import "../styles/modules.css";

function Modules() {
  return (
    <div className="modules-page">

      <div className="modules-header">

        <h1>CyberShield Modules</h1>

        <p>
          Select any AI-powered security tool to begin your analysis.
        </p>

      </div>

      <div className="modules-grid">

        <FeatureCard
          icon="phishing"
          title="Phishing Detection"
          description="Detect phishing emails using Artificial Intelligence."
          link="/phishing"
          color="#2563EB"
        />

        <FeatureCard
          icon="url"
          title="URL Analyzer"
          description="Analyze website URLs for potential threats."
          link="/url"
          color="#10B981"
        />

        <FeatureCard
          icon="password"
          title="Password Checker"
          description="Evaluate password strength instantly."
          link="/password"
          color="#F59E0B"
        />

        <FeatureCard
          icon="assistant"
          title="AI Assistant"
          description="Get cybersecurity guidance with AI."
          link="/assistant"
          color="#8B5CF6"
        />

        <FeatureCard
          icon="quiz"
          title="Security Quiz"
          description="Test your cybersecurity knowledge."
          link="/quiz"
          color="#EC4899"
        />

      </div>

    </div>
  );
}

export default Modules;