import "../styles/hero.css";
import logo from "../assets/logo.png";

function Hero() {

  const scrollToModules = () => {
    document
      .getElementById("modules")
      .scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section className="hero">

      <div className="hero-left">

        <div className="hero-chip">
          🛡 AI Powered Cybersecurity Platform
        </div>

        <h1>

          Protect Your Digital World

          <br />

          <span>with Intelligent Threat Detection</span>

        </h1>

        <p>

          CyberShield is an AI-powered cybersecurity risk assessment
          platform that helps individuals and organizations detect phishing
          emails, analyze malicious URLs, evaluate password security,
          improve cyber awareness and receive actionable security
          recommendations.

        </p>

        <div className="hero-buttons">

          <button onClick={scrollToModules}>
            🚀 Explore Features
          </button>

          <button className="secondary-btn">
            Learn More
          </button>

        </div>

        <div className="hero-stats">

          <div>

            <h2>5+</h2>

            <span>Security Modules</span>

          </div>

          <div>

            <h2>100+</h2>

            <span>Quiz Questions</span>

          </div>

          <div>

            <h2>AI</h2>

            <span>Powered Detection</span>

          </div>

        </div>

      </div>

      <div className="hero-right">

        <img
          src={logo}
          alt="CyberShield"
          className="hero-logo"
        />

      </div>

    </section>
  );
}

export default Hero;