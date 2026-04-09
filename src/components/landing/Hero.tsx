import { useState } from "react";
import heroBg from "@/assets/hero-bg.webp";
import { trackEvent } from "@/lib/meta-capi";
import { useLeadForm } from "@/contexts/LeadFormContext";

const bullets = [
  "Por que sua hospedagem não lota fins de semana comuns — e como mudar isso",
  "Como criar campanhas com antecedência sem depender de feriados",
  "O que divulgar, quando divulgar e como fechar reservas pelo WhatsApp",
  "Como vender mais sem baixar preço e sair do improviso de vez",
];

const YouTubeFacade = ({ videoId }: { videoId: string }) => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="reveal w-full max-w-[900px]">
      <div
        className="video-box relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
        style={{ paddingBottom: "56.25%" }}
        onClick={() => !playing && setPlaying(true)}
      >
        {playing ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0&showinfo=0&controls=0&disablekb=1&iv_load_policy=3`}
            title="VSL - Check in Lotado"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt="VSL - Check in Lotado"
              width={900}
              height={506}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-ochre/90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                <svg className="w-7 h-7 sm:w-9 sm:h-9 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const Hero = () => {
  const { setOpen } = useLeadForm();
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "rgba(242, 237, 224, 0.88)" }} />
      </div>
      <div className="relative z-10 pt-20 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-7 max-w-[1100px] mx-auto flex flex-col items-center">
        {/* Headline */}
        <div className="text-center mb-8 sm:mb-10 reveal" style={{ minHeight: '220px' }}>
          
          <div className="inline-block border border-ochre/30 rounded-full px-4 sm:px-6 py-2 sm:py-2.5 mb-5 sm:mb-6">
            <span className="label-text text-[0.7rem] sm:text-[0.8rem]">TREINAMENTO ONLINE PARA HOSPEDAGENS</span>
          </div>
          <h1 className="font-heading text-[2.2rem] sm:text-[clamp(2.6rem,5.5vw,4.8rem)] font-black text-black leading-[1.12] mb-4 sm:mb-5">
            Como lotar sua hospedagem{" "}
            <em className="shimmer-text font-black">todos os finais de semana</em>
          </h1>
          <p className="text-black/85 text-lg sm:text-2xl max-w-[560px] mx-auto leading-relaxed">
            Sem depender de feriados, sem baixar preço, sem improvisar campanha em cima da hora.
          </p>
        </div>

        {/* Video — lazy YouTube facade */}
        <YouTubeFacade videoId="m_EClZVmHXY" />

        {/* Bullets 2x2 */}
        <p className="reveal text-black text-lg sm:text-xl font-heading font-semibold mt-8 sm:mt-10 mb-2">Nessa Aula você vai aprender:</p>
        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 sm:gap-y-4 max-w-[800px]">
          {bullets.map((text, i) => (
            <div key={i} className="flex items-start gap-2.5 sm:gap-3">
              <span className="text-ochre mt-0.5 sm:mt-1 shrink-0 text-base">◆</span>
              <p className="text-black text-lg sm:text-xl leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button onClick={() => setOpen(true)} className="btn-cta btn-cta-lg mt-8 text-center reveal w-full sm:w-auto">
          <span className="text-[0.75rem] sm:text-base">QUERO LOTAR MINHA HOSPEDAGEM</span>
          <span className="relative z-[1]">↗</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
