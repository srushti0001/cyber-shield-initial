import { ScanSearch, BrainCircuit, ShieldCheck } from "lucide-react";
import "../styles/howitworks.css";

function HowItWorks() {
  return (
    <section className="how-section">

      <h2>How CyberShield Works</h2>

      <div className="steps">

        <div className="step">
          <ScanSearch size={50} color="#3B82F6" />
          <h3>1. Enter Data</h3>
          <p>Paste an email, URL or password.</p>
        </div>

        <div className="step">
          <BrainCircuit size={50} color="#22C55E" />
          <h3>2. AI Analysis</h3>
          <p>Our trained AI model analyzes your input.</p>
        </div>

        <div className="step">
          <ShieldCheck size={50} color="#F59E0B" />
          <h3>3. Get Results</h3>
          <p>Receive risk score and recommendations instantly.</p>
        </div>

      </div>

    </section>
  );
}

export default HowItWorks;