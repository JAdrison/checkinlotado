import { useEffect, useRef } from "react";
import { Sparkles, Calendar, Megaphone, MessageCircle, Repeat } from "lucide-react";

const phases = [
  {
    phase: "Fase 01",
    module: "Módulo 1",
    title: "Diagnóstico e Posicionamento",
    desc: "Entenda o que de fato impede sua hospedagem de vender em fins de semana comuns. Avalie ocupação, precificação, diferenciais e oportunidades reais.",
    meta: "Mapa de ação pessoal",
    time: "5 dias",
    icon: Sparkles,
    highlight: false,
  },
  {
    phase: "Fase 02",
    module: "Módulo 2",
    title: "Estratégia e Calendário Comercial",
    desc: "Monte um calendário de 90 dias. Saiba qual oferta criar, para qual público e em qual janela exata de tempo.",
    meta: "Plano trimestral ativo",
    time: "7 dias",
    icon: Calendar,
    highlight: false,
  },
  {
    phase: "Fase 03",
    module: "Módulo 3",
    title: "Criativos e Campanhas",
    desc: "Crie anúncios, posts e disparos que geram ação. Cronograma de divulgação e configuração da campanha.",
    meta: "Receber os primeiros leads",
    time: "10 dias",
    icon: Megaphone,
    highlight: false,
  },
  {
    phase: "Fase 04",
    module: "Módulo 4",
    title: "WhatsApp e Fechamento",
    desc: "Transforme contatos em reservas. Scripts baseados em persuasão, follow-up e um processo eficiente.",
    meta: "Caixa gerado (primeiras reservas)",
    time: "Contínuo",
    icon: MessageCircle,
    highlight: false,
  },
  {
    phase: "Fase 05",
    module: "Módulo 5",
    title: "Otimização e Repetição",
    desc: "Analise o que funcionou. Corrija o que não funcionou. Repita o ciclo. Transforme cada ação em aprendizado valioso para a próxima campanha e pare de perder dinheiro.",
    meta: "Ocupação previsível e escala de lucro",
    time: "Para toda a vida",
    icon: Repeat,
    highlight: true,
  },
];

const PhaseCards = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const lineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
          }
        });
      },
      { threshold: 0.15 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  // Animate the vertical line based on scroll
  useEffect(() => {
    const container = containerRef.current;
    const line = lineRef.current;
    if (!container || !line) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowH = window.innerHeight;
      const containerTop = rect.top;
      const containerH = rect.height;

      if (containerTop > windowH) {
        line.style.transform = "scaleY(0)";
        return;
      }

      const scrolledInto = Math.max(0, windowH - containerTop);
      const progress = Math.min(1, scrolledInto / (containerH + windowH * 0.3));
      line.style.transform = `scaleY(${progress})`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="timeline-container max-w-[1060px] mx-auto relative">
      {/* Central vertical line */}
      <div className="timeline-line-track">
        <div ref={lineRef} className="timeline-line-fill" />
      </div>

      {phases.map((p, i) => {
        const Icon = p.icon;
        const isEven = i % 2 === 0;

        return (
          <div
            key={i}
            ref={(el) => { cardsRef.current[i] = el; }}
            className={`timeline-item reveal ${isEven ? "timeline-right" : "timeline-left"}`}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            {/* Number circle on the line */}
            <div className="timeline-node">
              <span className="timeline-node-num">{i + 1}</span>
            </div>

            {/* Card */}
            <div
              className={`timeline-card ${p.highlight ? "timeline-card-highlight" : ""}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`timeline-icon ${p.highlight ? "timeline-icon-highlight" : ""}`}>
                  <Icon size={24} strokeWidth={2} />
                </div>
                <div>
                  <span className="text-ochre text-[0.72rem] font-bold uppercase tracking-[0.1em] font-label block">
                    {p.phase} · {p.module}
                  </span>
                </div>
              </div>

              <h3 className={`text-[1.2rem] font-semibold mb-2.5 leading-snug ${p.highlight ? "text-ochre" : "text-night"}`}>
                {p.title}
              </h3>

              <p className="text-night/85 text-[0.88rem] leading-relaxed mb-5">
                {p.desc}
              </p>

              <div className="pt-4 border-t" style={{ borderColor: p.highlight ? "rgba(200,148,58,0.25)" : "rgba(200,148,58,0.12)" }}>
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <p className="text-night/65 text-[0.72rem] mb-1 uppercase tracking-wider font-label">Meta da Fase</p>
                    <p className={`text-[0.85rem] font-semibold ${p.highlight ? "text-night" : "text-ochre"}`}>
                      {p.meta}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-night/65 text-[0.72rem] mb-1 uppercase tracking-wider font-label">Tempo</p>
                    <p className={`text-[0.85rem] font-semibold ${p.highlight ? "text-ochre" : "text-night"}`}>
                      {p.time}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PhaseCards;
