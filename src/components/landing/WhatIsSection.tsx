import { scrollToSection } from "@/lib/scrollToSection";
import heroBg from "@/assets/hero-bg.webp";

const pillars = [
  "Diagnóstico",
  "Planejamento",
  "Posicionamento",
  "Campanhas",
  "Conteúdo",
  "Tráfego",
  "Atendimento",
  "Mensuração",
];

const WhatIsSection = () => {
  return (
    <section style={{ background: "#11100E" }} className="py-14 sm:py-20 px-4 sm:px-7">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="reveal">
          <div className="label-text mb-3">O que é o Check-in Lotado</div>
          <h2 className="font-heading text-[1.6rem] sm:text-[clamp(1.9rem,4vw,3.2rem)] text-night leading-[1.15] mb-5">
            O método criado para transformar temporada em <em className="shimmer-text font-extrabold">rotina de reservas</em>
          </h2>
          <p className="text-night/80 text-[0.95rem] sm:text-lg leading-relaxed mb-5">
            O Check-in Lotado é um treinamento prático para proprietários e gestores de hospedagens organizarem sua ocupação, estratégia de marketing, campanhas, criativos, tráfego e atendimento.
          </p>
          <p className="text-night/70 text-sm sm:text-base leading-relaxed mb-7">
            Um único método conectando as peças que a maioria trata separadas — do diagnóstico à mensuração dos resultados.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {pillars.map((p) => (
              <span key={p} className="text-[0.7rem] sm:text-xs uppercase tracking-[0.18em] text-ochre px-3 py-1.5 border border-ochre/30 rounded-sm">
                {p}
              </span>
            ))}
          </div>

          <button onClick={() => scrollToSection("comprar")} className="btn-cta btn-cta-lg">
            <span>Ver a oferta completa</span>
          </button>
        </div>

        <div className="reveal relative">
          <div className="relative rounded-sm overflow-hidden" style={{ border: "1px solid rgba(201,151,62,0.24)", aspectRatio: "4/3" }}>
            <img src={heroBg} alt="Check-in Lotado" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(8,7,6,0.55), rgba(8,7,6,0.15))" }} />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ background: "rgba(8,7,6,0.7)", border: "1px solid rgba(201,151,62,0.3)" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-ochre" />
                <span className="text-night text-[0.7rem] uppercase tracking-[0.18em] font-label">Treinamento completo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
