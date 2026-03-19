export default function LandingPage2027({ onSelectExpert }) {
  const experts = [
    { name: "Coding Expert", desc: "Build & debug systems" },
    { name: "Marketing Expert", desc: "Growth & strategy" },
    { name: "Finance Expert", desc: "Analysis & planning" },
    { name: "Automation Expert", desc: "Workflows & systems" }
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at top, #0a0a0a, #000 80%)"
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{
          color: "#00ffc6",
          textShadow: "0 0 12px #00ffc6",
          marginBottom: "10px"
        }}>
          ⚡ AI Blitz Terminal
        </h1>

        <p style={{ color: "#94a3b8", fontSize: "14px" }}>
          Secure domain selection interface
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gap: "16px",
          width: "100%",
          maxWidth: "420px"
        }}
      >
        {experts.map((expert) => (
          <div
            key={expert.name}
            onClick={() => onSelectExpert(expert.name)}
            style={{
              background: "rgba(15,23,42,0.6)",
              border: "1px solid rgba(0,255,198,0.25)",
              borderRadius: "12px",
              padding: "16px",
              cursor: "pointer",
              boxShadow: "0 0 10px rgba(0,255,198,0.08)",
              transition: "all 0.2s ease"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow = "0 0 18px rgba(0,255,198,0.4)";
              e.currentTarget.style.transform = "scale(1.02)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = "0 0 10px rgba(0,255,198,0.08)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <div style={{ color: "#00ffc6", fontWeight: "bold" }}>
              {expert.name}
            </div>
            <div style={{ color: "#94a3b8", fontSize: "13px", marginTop: "4px" }}>
              {expert.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
