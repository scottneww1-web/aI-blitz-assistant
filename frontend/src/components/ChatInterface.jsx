import { useState } from 'react';

export default function ChatInterface({ expert, onBack }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    const aiMessage = {
      role: "ai",
      text: `(${expert}) response: ${input}`
    };

    setMessages([...messages, userMessage, aiMessage]);
    setInput("");
  };

  return (
    <div style={{ padding: "20px", minHeight: "100vh", background: "#000" }}>
      
      <button onClick={onBack} style={{
        marginBottom: "20px",
        background: "transparent",
        border: "1px solid #00ffc6",
        color: "#00ffc6",
        padding: "8px 12px",
        borderRadius: "8px",
        cursor: "pointer"
      }}>
        ← Back
      </button>

      <h2 style={{ color: "#00ffc6", marginBottom: "20px" }}>
        {expert}
      </h2>

      <div style={{
        border: "1px solid rgba(0,255,198,0.2)",
        borderRadius: "12px",
        padding: "15px",
        height: "60vh",
        overflowY: "auto",
        marginBottom: "15px",
        background: "rgba(15,23,42,0.4)"
      }}>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              textAlign: msg.role === "user" ? "right" : "left",
              marginBottom: "10px"
            }}
          >
            <span style={{
              display: "inline-block",
              padding: "10px",
              borderRadius: "10px",
              background: msg.role === "user" ? "#00ffc6" : "#0f172a",
              color: msg.role === "user" ? "#000" : "#e6fefe",
              border: msg.role === "ai" ? "1px solid #00ffc6" : "none"
            }}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #00ffc6",
            background: "#020617",
            color: "#fff"
          }}
        />

        <button onClick={sendMessage} style={{
          background: "#00ffc6",
          color: "#000",
          border: "none",
          padding: "10px 16px",
          borderRadius: "8px",
          cursor: "pointer"
        }}>
          Send
        </button>
      </div>
    </div>
  );
}
