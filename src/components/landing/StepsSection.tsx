import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChevronRight } from "lucide-react";
import stepsBg from "@/assets/steps-bg.jpg";

const steps = [
  {
    num: "01",
    title: "Diagnóstico & Estratégia",
    description:
      "Vamos identificar o que está travando hoje a sua hospedagem e fazer o seu plano estratégico.",
  },
  {
    num: "02",
    title: "Geração de Demanda",
    description:
      "Colocar o plano em prática e gerar pessoas interessadas para a tua hospedagem.",
  },
  {
    num: "03",
    title: "Atendimento & Otimização",
    description:
      "Conseguir transformar essa demana em hóspedes que vão pagar pela sua estadia",
  },
];

const StepCircle = ({ num }: { num: string }) => (
  <div
    className="relative z-10 flex items-center justify-center rounded-full"
    style={{
      width: 130,
      height: 130,
      background: "radial-gradient(circle at 40% 35%, #3D2B14 0%, #1A1208 60%, #0F0C06 100%)",
      border: "3.5px solid var(--ochre)",
      boxShadow:
        "0 0 40px rgba(200,148,58,0.25), 0 0 0 1px rgba(200,148,58,0.1), inset 0 2px 20px rgba(200,148,58,0.08)",
    }}
  >
    <div className="text-center">
      <span
        className="block font-heading text-[0.85rem] tracking-[0.08em]"
        style={{ color: "rgba(255,255,255,0.85)", fontStyle: "normal", fontWeight: 700 }}
      >
        Passo
      </span>
      <span
        className="block font-heading text-[2.4rem] leading-none -mt-0.5"
        style={{ color: "#FFFFFF" }}
      >
        {num}
      </span>
    </div>
  </div>
);

const DoubleChevron = ({ vertical = false }: { vertical?: boolean }) => (
  <div className={`flex items-center justify-center ${vertical ? "py-2 rotate-90" : ""}`}>
    <ChevronRight
      size={22}
      strokeWidth={2}
      style={{ color: "var(--ochre)", opacity: 0.5, marginRight: -10 }}
    />
    <ChevronRight
      size={22}
      strokeWidth={2}
      style={{ color: "var(--ochre)", opacity: 0.5 }}
    />
  </div>
);

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

        {isMobile ? (
          /* ── MOBILE: vertical timeline ── */
          <div className="relative pl-8">
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
                <div
                  className="relative z-10 flex-shrink-0 flex items-center justify-center rounded-full"
                  style={{
                    width: 44,
                    height: 44,
                    background: "radial-gradient(circle at 40% 35%, #3D2B14 0%, #1A1208 60%, #0F0C06 100%)",
                    border: "2.5px solid var(--ochre)",
                    boxShadow: "0 0 20px rgba(200,148,58,0.25), 0 0 0 1px rgba(200,148,58,0.08)",
                  }}
                >
                  <span className="font-heading text-[0.9rem] text-white font-bold">{step.num}</span>
                </div>
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
                  <h3 className="font-heading text-[1.2rem] mb-2" style={{ color: "var(--cream-mid)" }}>
                    {step.title}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: "rgba(242,237,224,0.65)" }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* ── DESKTOP: horizontal timeline ── */
          <div className="relative">
            {/* Horizontal connecting line behind circles */}
            <div
              className="absolute left-[16.66%] right-[16.66%] h-[2px]"
              style={{
                top: 64,
                background:
                  "linear-gradient(90deg, transparent 0%, var(--ochre) 10%, var(--ochre) 90%, transparent 100%)",
                opacity: 0.35,
              }}
            />

            {/* Steps row with chevrons */}
            <div className="flex items-start justify-center">
              {steps.map((step, i) => (
                <React.Fragment key={i}>
                  <div className="reveal flex flex-col items-center flex-1 max-w-[320px]">
                    <div className="mb-7">
                      <StepCircle num={step.num} />
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
                      <h3 className="font-heading text-[1.35rem] mb-3" style={{ color: "var(--cream-mid)" }}>
                        {step.title}
                      </h3>
                      <p className="text-base leading-relaxed" style={{ color: "rgba(242,237,224,0.6)" }}>
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Double chevron arrows between steps */}
                  {i < steps.length - 1 && (
                    <div className="flex items-center justify-center flex-shrink-0" style={{ paddingTop: 52, width: 52 }}>
                      <DoubleChevron />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default StepsSection;
