export default function LandingPage2027({ onSelectExpert }) {
  const experts = [
    "Coding Expert",
    "Marketing Expert",
    "Finance Expert",
    "Automation Expert"
  ];

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1 style={{ color: "#00ffc6", textShadow: "0 0 10px #00ffc6" }}>
        ⚡ AI Blitz Assistant
      </h1>

      <p style={{ color: "#94a3b8", marginBottom: "30px" }}>
        Choose your expert to begin
      </p>

      <div style={{ display: "grid", gap: "15px", maxWidth: "400px", margin: "0 auto" }}>
        {experts.map((expert) => (
          <button
            key={expert}
            onClick={() => onSelectExpert(expert)}
            style={{
              background: "#0f172a",
              border: "1px solid #00ffc6",
              color: "#00ffc6",
              padding: "12px",
              borderRadius: "10px",
              boxShadow: "0 0 8px #00ffc6",
              cursor: "pointer"
            }}
          >
            {expert}
          </button>
        ))}
      </div>
    </div>
  );
}
