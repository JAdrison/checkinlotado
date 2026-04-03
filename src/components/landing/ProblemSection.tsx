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
      // progress 0→1 as section scrolls through viewport
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
      style={{ height: "300vh", position: "relative" }}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden" style={{ background: "#EAE3CF" }}>
        {/* Video background */}
        <video
          ref={videoRef}
          src="/videos/scroll-animation.mp4"
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ pointerEvents: "none" }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content on top */}
        <div className="relative z-10 max-w-[800px] mx-auto px-7 text-center">
          <div className="reveal mb-14">
            <div className="label-text mb-3.5" style={{ color: "rgba(255,255,255,0.7)" }}>O problema</div>
            <h2 className="font-heading text-[clamp(1.9rem,4vw,3.3rem)] text-white mb-5">
              Sua hospedagem <em className="shimmer-text">depende de feriados</em> para faturar?
            </h2>
            <p className="text-white/85 text-lg leading-relaxed max-w-[600px] mx-auto">
              A maioria dos donos de pousada só tem ocupação alta em feriados prolongados e alta temporada. Nos fins de semana comuns, os quartos ficam vazios, o faturamento cai e a solução parece ser baixar preço.
            </p>
          </div>
          <div className="divider-gold mb-10 reveal" />
          <p className="text-white/80 text-base leading-relaxed max-w-[580px] mx-auto reveal">
            A verdade é que a demanda existe — mas ela precisa ser ativada com estratégia, antecedência e comunicação certa. É exatamente isso que o método <strong className="text-white">Check-in Lotado</strong> ensina.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
