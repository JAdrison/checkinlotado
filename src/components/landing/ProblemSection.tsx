import { useRef, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const ProblemSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    let ready = false;
    const onMeta = () => { ready = true; };
    video.addEventListener("loadedmetadata", onMeta);

    const onScroll = () => {
      if (!ready || !video.duration) return;
      const rect = section.getBoundingClientRect();
      const sectionH = section.offsetHeight;
      const viewH = window.innerHeight;
      const scrollable = sectionH - viewH;
      if (scrollable <= 0) return;
      const progress = Math.min(1, Math.max(0, -rect.top / scrollable));
      video.currentTime = progress * video.duration;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      video.removeEventListener("loadedmetadata", onMeta);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ height: isMobile ? "200vh" : "300vh", position: "relative", background: "#080706", overflow: "hidden", touchAction: "pan-y" }}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-7">
        <div className="max-w-[800px] mx-auto w-full flex flex-col items-center gap-6 sm:gap-8">
          {/* Frase 01 */}
          <div className="reveal text-center">
            <div className="label-text mb-3">O PROBLEMA NEM SEMPRE É FALTA DE PROCURA</div>
            <h2 className="font-heading text-[1.5rem] sm:text-[clamp(1.9rem,4vw,3.3rem)] font-black text-night leading-[1.15] mb-4 sm:mb-5">
              Sua hospedagem pode estar perdendo reservas por falta de <em className="text-ochre font-extrabold not-italic">planejamento, oferta e acompanhamento</em>.
            </h2>
            <p className="text-night/85 text-[0.9rem] sm:text-lg leading-relaxed max-w-[640px] mx-auto">
              Muitas hospedagens percebem as datas vazias tarde demais, criam uma promoção genérica e esperam que uma publicação resolva o problema.
            </p>
          </div>

          {/* Video */}
          <div className="w-full max-w-[700px] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
            <video
              ref={videoRef}
              src="/videos/scroll-animation.mp4"
              muted
              playsInline
              preload="auto"
              className="w-full h-auto block"
              style={{ pointerEvents: "none" }}
            />
          </div>

          {/* Frase 02 */}
          <div className="reveal text-center">
            <p className="text-night/80 text-sm sm:text-base leading-relaxed max-w-[640px] mx-auto">
              O <strong className="text-night">Check-in Lotado</strong> ensina a analisar a ocupação, antecipar os períodos críticos e estruturar uma estratégia completa para atrair, atender e converter hóspedes.
            </p>
          </div>

          {/* Cards de dores */}
          <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-[720px] mx-auto mt-2">
            {[
              { t: "Dependência de feriados", d: "A agenda enche em datas comemorativas e esvazia no resto do ano." },
              { t: "Dias de semana vazios", d: "Segunda a quinta com pouca ocupação e faturamento irregular." },
              { t: "Promoções feitas em cima da hora", d: "Descontos improvisados quando a data já está próxima." },
              { t: "Contatos que chegam, mas não reservam", d: "Curiosos entram no WhatsApp e a conversa não vira reserva." },
            ].map((c) => (
              <div key={c.t} className="p-4 sm:p-5 rounded-sm text-left" style={{ background: "rgba(23,21,18,0.85)", border: "1px solid rgba(201,151,62,0.18)" }}>
                <h3 className="font-heading text-night text-[1rem] sm:text-[1.1rem] mb-1">{c.t}</h3>
                <p className="text-night/65 text-[0.82rem] sm:text-sm leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
