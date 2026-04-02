import { useEffect, useRef } from "react";

const markers = [
  { label: "Diagnóstico", left: "10%", top: "78%" },
  { label: "Estratégia", left: "28%", top: "62%" },
  { label: "Criativos", left: "48%", top: "42%" },
  { label: "WhatsApp", left: "68%", top: "25%" },
  { label: "Otimização", left: "88%", top: "10%" },
];

const LearningChart = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="chart-container-wrap">
      <div ref={containerRef} className="chart-container">
        {/* SVG Background */}
        <svg
          viewBox="0 0 1000 350"
          preserveAspectRatio="none"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        >
          <defs>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(200,148,58,0.15)" />
              <stop offset="100%" stopColor="rgba(200,148,58,0)" />
            </linearGradient>
          </defs>
          {/* Area fill */}
          <path
            d="M0,320 C100,310 180,280 280,230 C380,180 480,120 580,80 C680,45 800,20 1000,10 L1000,350 L0,350 Z"
            fill="url(#areaGrad)"
          />
          {/* Stroke line */}
          <path
            d="M0,320 C100,310 180,280 280,230 C380,180 480,120 580,80 C680,45 800,20 1000,10"
            fill="none"
            stroke="#C8943A"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>

        {/* Markers */}
        {markers.map((m, i) => (
          <div
            key={i}
            className="chart-marker"
            style={{ left: m.left, top: m.top }}
          >
            <div className="phase-flag">
              <span style={{ color: "#C8943A", fontSize: "0.7rem" }}>⚑</span>
              {m.label}
            </div>
            <div className="chart-dot" />
          </div>
        ))}

        {/* Reveal overlay */}
        <div className="chart-reveal-overlay" />
      </div>
    </div>
  );
};

export default LearningChart;
