import { useRef, useEffect } from "react";

const ProblemSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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
      style={{ height: "300vh", position: "relative", background: "#EAE3CF" }}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden px-7">
        <div className="max-w-[800px] mx-auto w-full flex flex-col items-center gap-8">
          {/* Frase 01 */}
          <div className="reveal text-center">
            <div className="label-text mb-3.5">O problema</div>
            <h2 className="font-heading text-[clamp(1.9rem,4vw,3.3rem)] text-night mb-5">
              Sua hospedagem <em className="shimmer-text">depende de feriados</em> para faturar?
            </h2>
            <p className="text-night/85 text-lg leading-relaxed max-w-[600px] mx-auto">
              A maioria dos donos de pousada só tem ocupação alta em feriados prolongados e alta temporada. Nos fins de semana comuns, os quartos ficam vazios, o faturamento cai e a solução parece ser baixar preço.
            </p>
          </div>

          {/* Video */}
          <div className="w-full max-w-[700px] rounded-2xl overflow-hidden shadow-2xl">
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
            <p className="text-night/80 text-base leading-relaxed max-w-[580px] mx-auto">
              A verdade é que a demanda existe — mas ela precisa ser ativada com estratégia, antecedência e comunicação certa. É exatamente isso que o método <strong className="text-night">Check-in Lotado</strong> ensina.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
