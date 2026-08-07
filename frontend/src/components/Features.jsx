import FeatureCard from "./FeatureCard";
import "../styles/features.css";

function Features() {
  return (
<section
    className="features"
    id="modules"
>

      <h2 className="features-title">
        Choose Your Security Tool
      </h2>

      <p className="features-subtitle">
        AI-powered modules to protect you from cyber threats.
      </p>

      {/* First Row */}
      <div className="features-row">

        <FeatureCard
          icon="🛡"
          title="Phishing Detection"
          description="Analyze suspicious emails using AI."
          link="/phishing"
          color="#2563EB"
        />

        <FeatureCard
          icon="🌐"
          title="URL Analyzer"
          description="Check if a website is safe before visiting."
          link="/url"
          color="#10B981"
        />

        <FeatureCard
          icon="🔐"
          title="Password Checker"
          description="Check password strength instantly."
          link="/password"
          color="#F59E0B"
        />

      </div>

      {/* Second Row */}
      <div className="features-row bottom-row">

        <FeatureCard
          icon="🤖"
          title="AI Assistant"
          description="Ask cybersecurity questions."
          link="/assistant"
          color="#8B5CF6"
        />

        <FeatureCard
          icon="📝"
          title="Security Quiz"
          description="Test your cyber awareness."
          link="/quiz"
          color="#EC4899"
        />

      </div>

    </section>
  );
}

export default Features;