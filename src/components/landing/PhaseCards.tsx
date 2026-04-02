import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const phases = [
  {
    phase: "Fase 01 (Módulo 1)",
    title: "Diagnóstico e Posicionamento",
    desc: "Entenda o que de fato impede sua hospedagem de vender em fins de semana comuns. Avalie ocupação, precificação, diferenciais e oportunidades reais.",
    meta: "Mapa de ação pessoal",
    time: "5 dias",
    highlight: false,
  },
  {
    phase: "Fase 02 (Módulo 2)",
    title: "Estratégia e Calendário Comercial",
    desc: "Monte um calendário de 90 dias. Saiba qual oferta criar, para qual público e em qual janela exata de tempo.",
    meta: "Plano trimestral ativo",
    time: "7 dias",
    highlight: false,
  },
  {
    phase: "Fase 03 (Módulo 3)",
    title: "Criativos e Campanhas",
    desc: "Crie anúncios, posts e disparos que geram ação. Cronograma de divulgação e configuração da campanha.",
    meta: "Receber os primeiros leads",
    time: "10 dias",
    highlight: false,
  },
  {
    phase: "Fase 04 (Módulo 4)",
    title: "WhatsApp e Fechamento",
    desc: "Transforme contatos em reservas. Scripts baseados em persuasão, follow-up e um processo eficiente.",
    meta: "Caixa gerado (primeiras reservas)",
    time: "Contínuo",
    highlight: false,
  },
  {
    phase: "Fase 05 (Módulo 5)",
    title: "Otimização e Repetição",
    desc: "Analise o que funcionou. Corrija o que não funcionou. Repita o ciclo. Transforme cada ação em aprendizado valioso para a próxima campanha e pare de perder dinheiro.",
    meta: "Ocupação previsível e escala de lucro",
    time: "Para toda a vida",
    highlight: true,
  },
];

const PhaseCards = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const ctx = gsap.context(() => {
      const totalScroll = track.scrollWidth - container.offsetWidth;

      gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          end: () => "+=" + totalScroll,
          invalidateOnRefresh: true,
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden">
      <div ref={trackRef} className="flex gap-5" style={{ width: "max-content" }}>
        {phases.map((p, i) => (
          <div
            key={i}
            className="landing-card p-6 shrink-0"
            style={{
              width: "min(85vw, 450px)",
              ...(p.highlight
                ? { background: "rgba(200,148,58,0.06)", borderColor: "rgba(200,148,58,0.22)" }
                : {}),
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-ochre text-lg">{p.highlight ? "★" : "⚑"}</span>
              <span className="text-night/50 text-[0.75rem] font-bold uppercase tracking-[0.05em]">
                {p.phase}
              </span>
            </div>
            <h3
              className={`text-[1.05rem] font-semibold mb-3 ${p.highlight ? "text-ochre" : "text-night"}`}
            >
              {p.title}
            </h3>
            <p className="text-night/55 text-[0.85rem] leading-relaxed mb-5">
              {p.desc}
            </p>
            <div className="pt-4 border-t" style={{ borderColor: p.highlight ? "rgba(200,148,58,0.15)" : "rgba(200,148,58,0.1)" }}>
              <p className="text-night/45 text-[0.75rem] mb-1">Meta da Fase:</p>
              <p className={`text-[0.85rem] font-semibold ${p.highlight ? "text-night" : "text-ochre"}`}>
                {p.meta}
              </p>
              <p className="text-night/45 text-[0.75rem] mt-2">
                Tempo estimado:{" "}
                <span className={p.highlight ? "text-ochre" : "text-night"}>{p.time}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhaseCards;
