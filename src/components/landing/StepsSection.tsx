import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChevronRight } from "lucide-react";

const steps = [
  {
    month: "Mês 01",
    title: "Exploração",
    description:
      "Setup completo. Iniciamos os testes de público e ajustamos a IA para o seu perfil de hóspede.",
  },
  {
    month: "Mês 02",
    title: "Lapidação",
    description:
      "Pegamos as campanhas e fluxos de atendimento que deram certo e otimizamos o custo por reserva.",
  },
  {
    month: "Mês 03",
    title: "Escala",
    description:
      "Aceleramos o investimento. Máquina validada operando em alta capacidade para lotar sua agenda.",
  },
];

const StepsSection: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section style={{ background: "#EAE3CF", overflow: "hidden" }}>
      <div
        className="max-w-[1100px] mx-auto"
        style={{ padding: isMobile ? "64px 16px" : "96px 28px" }}
      >
        <div className="reveal text-center mb-12">
          <h2 className="font-heading text-[clamp(1.9rem,4vw,3.3rem)] text-night leading-[1.15]">
            90 dias para a lapidação e <em className="shimmer-text">escala</em>
          </h2>
        </div>

        <div
          className={`flex ${isMobile ? "flex-col" : "flex-row"} items-stretch justify-center gap-${isMobile ? "6" : "0"}`}
        >
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              {/* Card */}
              <div className="reveal flex flex-col items-center flex-1 max-w-[340px] mx-auto">
                {/* Circle */}
                <div
                  className="relative flex items-center justify-center rounded-full border-2 mb-5"
                  style={{
                    width: isMobile ? 90 : 110,
                    height: isMobile ? 90 : 110,
                    borderColor: "hsl(var(--ochre-raw, 38 72% 51%) / 0.35)",
                    background: "hsl(30 10% 12%)",
                  }}
                >
                  <div className="text-center">
                    <span
                      className="block font-label text-[0.7rem] uppercase tracking-[0.12em]"
                      style={{ color: "hsl(38 72% 51%)" }}
                    >
                      Mês
                    </span>
                    <span
                      className="block font-heading text-[1.5rem] leading-none"
                      style={{ color: "#F2EDE0" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Content card */}
                <div
                  className="rounded-2xl p-6 text-center flex-1"
                  style={{
                    background: "rgba(255,255,255,0.55)",
                    border: "1px solid rgba(200,148,58,0.12)",
                    boxShadow: "0 4px 24px rgba(26,18,8,0.04)",
                  }}
                >
                  <h3 className="font-heading text-[1.3rem] text-night mb-3">
                    {step.title}
                  </h3>
                  <p className="text-night/80 text-[0.9rem] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Arrow between cards */}
              {i < steps.length - 1 && !isMobile && (
                <div className="flex items-start justify-center pt-10" style={{ width: 48 }}>
                  <ChevronRight
                    size={28}
                    strokeWidth={1.5}
                    className="text-night/30"
                  />
                </div>
              )}

              {i < steps.length - 1 && isMobile && (
                <div className="flex items-center justify-center py-1">
                  <ChevronRight
                    size={24}
                    strokeWidth={1.5}
                    className="text-night/30 rotate-90"
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
