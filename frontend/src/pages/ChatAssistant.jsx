import { useState, useRef, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { FaPaperPlane, FaRobot, FaUser } from "react-icons/fa";
import "../styles/chatassistant.css";

function ChatAssistant() {
  const [messages, setMessages] = useState([
    {
  sender: "bot",
  text:
`# Welcome to CyberShield AI 👋

I'm your personal **Cybersecurity Expert**.

I can help you with:

- Phishing Detection
- Password Security
- URL Safety
- Malware
- Ransomware
- Firewalls
- VPN
- Social Engineering

Try asking:

• How can I detect phishing emails?

• My password is weak. How can I improve it?

• What is ransomware?

• Is HTTPS always safe?`
}
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [messages]);

  const sendMessage = async () => {

    if (!input.trim()) return;

    const userMessage = input;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userMessage
      }
    ]);

    setInput("");
    setLoading(true);

    try {

      const res = await axios.post(
        "http://127.0.0.1:8000/chat",
        {
          message: userMessage
        }
      );

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: res.data.reply
        }
      ]);

    } catch {

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "⚠ Unable to connect to CyberShield AI."
        }
      ]);

    }

    setLoading(false);
  };

  return (

    <div className="chat-page">

      <div className="chat-header">

        <h1>CyberShield AI</h1>

        <p>Your Personal Cybersecurity Expert</p>

      </div>

      <div className="chat-box">

        {messages.map((msg, index) => (

          <div
            key={index}
            className={`message ${msg.sender}`}
          >

            <div className="icon">

              {msg.sender === "bot" ? (
                <FaRobot />
              ) : (
                <FaUser />
              )}

            </div>

            <div className="bubble">

              <ReactMarkdown>
                {msg.text}
              </ReactMarkdown>

            </div>

          </div>

        ))}

        {loading && (

          <div className="message bot">

            <div className="icon">
              <FaRobot />
            </div>

            <div className="bubble">

              Thinking...

            </div>

          </div>

        )}

        <div ref={bottomRef}></div>

      </div>

      <div className="input-area">

        <input

          value={input}

          placeholder="Ask anything about cybersecurity..."

          onChange={(e) =>
            setInput(e.target.value)
          }

          onKeyDown={(e) => {

            if (e.key === "Enter")
              sendMessage();

          }}

        />

        <button onClick={sendMessage}>

          <FaPaperPlane />

        </button>

      </div>

    </div>

  );

}

export default ChatAssistant;