import { useState } from "react";

export default function LandingPage2027({ onSelectExpert }) {
  const [hovered, setHovered] = useState(null);

  const experts = [
    {
      name: "Coding Expert",
      desc: "Build, debug, and architect systems"
    },
    {
      name: "Marketing Expert",
      desc: "Growth, funnels, and conversion strategies"
    },
    {
      name: "Finance Expert",
      desc: "Money flow, analysis, and planning"
    },
    {
      name: "Automation Expert",
      desc: "Workflows, bots, and efficiency systems"
    }
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#e6fefe",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "30px"
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1
          style={{
            color: "#00ffc6",
            fontSize: "42px",
            margin: 0,
            textShadow: "0 0 12px #00ffc6"
          }}
        >
          AI Blitz Assistant
        </h1>

        <p style={{ color: "#94a3b8", marginTop: "10px" }}>
          Select an expert to initialize your session
        </p>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          width: "100%",
          maxWidth: "900px"
        }}
      >
        {experts.map((expert, index) => (
          <div
            key={index}
            onClick={() => onSelectExpert(expert.name)}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            style={{
              padding: "20px",
              borderRadius: "12px",
              cursor: "pointer",
              background:
                hovered === index
                  ? "rgba(0, 255, 198, 0.08)"
                  : "rgba(15, 23, 42, 0.4)",
              border: "1px solid #00ffc6",
              boxShadow:
                hovered === index
                  ? "0 0 20px rgba(0,255,198,0.4)"
                  : "0 0 8px rgba(0,255,198,0.15)",
              transition: "all 0.2s ease"
            }}
          >
            <h3
              style={{
                margin: "0 0 10px 0",
                color: "#00ffc6"
              }}
            >
              {expert.name}
            </h3>

            <p style={{ fontSize: "14px", color: "#94a3b8" }}>
              {expert.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
