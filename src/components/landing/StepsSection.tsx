import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import stepsBg from "@/assets/steps-bg.jpg";

const steps = [
  {
    num: "01",
    title: "Exploração",
    description:
      "Setup completo. Iniciamos os testes de público e ajustamos a IA para o seu perfil de hóspede.",
  },
  {
    num: "02",
    title: "Lapidação",
    description:
      "Pegamos as campanhas e fluxos de atendimento que deram certo e otimizamos o custo por reserva.",
  },
  {
    num: "03",
    title: "Escala",
    description:
      "Aceleramos o investimento. Máquina validada operando em alta capacidade para lotar sua agenda.",
  },
];

const StepsSection: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative overflow-hidden" style={{ background: "#0F0C06" }}>
      {/* Background image */}
      <img
        src={stepsBg}
        alt=""
        loading="lazy"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.12, filter: "blur(2px)" }}
      />
      {/* Gradient overlays */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,12,6,0.95) 0%, rgba(15,12,6,0.7) 50%, rgba(15,12,6,0.95) 100%)",
        }}
      />

      <div
        className="relative z-10 max-w-[1100px] mx-auto"
        style={{ padding: isMobile ? "64px 20px" : "100px 28px" }}
      >
        {/* Header */}
        <div className="reveal text-center mb-4">
          <span className="label-text">Sua jornada</span>
        </div>
        <div className="reveal text-center" style={{ marginBottom: isMobile ? 48 : 64 }}>
          <h2
            className="font-heading leading-[1.15]"
            style={{
              fontSize: "clamp(1.9rem, 4vw, 3.3rem)",
              color: "var(--cream-mid)",
            }}
          >
            90 dias para a lapidação e{" "}
            <em className="shimmer-text">escala</em>
          </h2>
        </div>

        {/* Steps container */}
        {isMobile ? (
          /* ── MOBILE: vertical timeline ── */
          <div className="relative pl-8">
            {/* Vertical line */}
            <div
              className="absolute left-[18px] top-[60px] bottom-[60px] w-[2px]"
              style={{
                background:
                  "linear-gradient(180deg, transparent 0%, var(--ochre) 15%, var(--ochre) 85%, transparent 100%)",
                opacity: 0.3,
              }}
            />

            {steps.map((step, i) => (
              <div key={i} className="reveal relative flex items-start gap-5 mb-10 last:mb-0">
                {/* Node circle */}
                <div
                  className="relative z-10 flex-shrink-0 flex items-center justify-center rounded-full"
                  style={{
                    width: 38,
                    height: 38,
                    background: "linear-gradient(135deg, #1A1208 0%, #0F0C06 100%)",
                    border: "2px solid var(--ochre)",
                    boxShadow: "0 0 20px rgba(200,148,58,0.25), 0 0 0 6px rgba(200,148,58,0.08)",
                  }}
                >
                  <span className="font-label text-[0.65rem] font-bold" style={{ color: "var(--ochre)" }}>
                    {step.num}
                  </span>
                </div>

                {/* Card */}
                <div
                  className="flex-1 rounded-2xl p-5"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(200,148,58,0.15)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                  }}
                >
                  <span
                    className="block font-label text-[0.6rem] uppercase tracking-[0.18em] mb-1"
                    style={{ color: "var(--ochre)", opacity: 0.7 }}
                  >
                    Mês {step.num}
                  </span>
                  <h3
                    className="font-heading text-[1.2rem] mb-2"
                    style={{ color: "var(--cream-mid)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[0.85rem] leading-relaxed"
                    style={{ color: "rgba(242,237,224,0.65)" }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* ── DESKTOP: horizontal timeline ── */
          <div className="relative">
            {/* Horizontal connecting line */}
            <div
              className="absolute left-[16.66%] right-[16.66%] top-[55px] h-[2px]"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, var(--ochre) 10%, var(--ochre) 90%, transparent 100%)",
                opacity: 0.3,
              }}
            />

            <div className="grid grid-cols-3 gap-8">
              {steps.map((step, i) => (
                <div key={i} className="reveal flex flex-col items-center">
                  {/* Circle node */}
                  <div
                    className="relative z-10 flex items-center justify-center rounded-full mb-7"
                    style={{
                      width: 110,
                      height: 110,
                      background: "linear-gradient(135deg, #1A1208 0%, #0F0C06 100%)",
                      border: "2px solid rgba(200,148,58,0.5)",
                      boxShadow:
                        "0 0 30px rgba(200,148,58,0.2), 0 0 0 8px rgba(200,148,58,0.06), inset 0 0 30px rgba(200,148,58,0.05)",
                    }}
                  >
                    <div className="text-center">
                      <span
                        className="block font-label text-[0.65rem] uppercase tracking-[0.15em]"
                        style={{ color: "var(--ochre)", opacity: 0.8 }}
                      >
                        Mês
                      </span>
                      <span
                        className="block font-heading text-[2rem] leading-none"
                        style={{ color: "var(--cream-mid)" }}
                      >
                        {step.num}
                      </span>
                    </div>
                  </div>

                  {/* Glass card */}
                  <div
                    className="rounded-2xl p-7 text-center flex-1 w-full transition-all duration-500 hover:-translate-y-1"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(200,148,58,0.12)",
                      boxShadow: "0 8px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(200,148,58,0.35)";
                      e.currentTarget.style.boxShadow =
                        "0 16px 48px rgba(0,0,0,0.4), 0 0 30px rgba(200,148,58,0.08), inset 0 1px 0 rgba(255,255,255,0.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(200,148,58,0.12)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)";
                    }}
                  >
                    <h3
                      className="font-heading text-[1.35rem] mb-3"
                      style={{ color: "var(--cream-mid)" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-[0.9rem] leading-relaxed"
                      style={{ color: "rgba(242,237,224,0.6)" }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default StepsSection;
