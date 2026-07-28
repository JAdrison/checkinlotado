import { useState } from "react";
import heroBg from "@/assets/hero-bg.webp";
import heroThumb from "@/assets/video-thumbnail.webp";
import { trackEvent } from "@/lib/meta-capi";
import { scrollToSection } from "@/lib/scrollToSection";


const bullets = [
  "Identificar os períodos e datas que estão reduzindo sua ocupação.",
  "Criar ofertas sem transformar desconto no único argumento.",
  "Planejar campanhas para semana, fim de semana e baixa temporada.",
  "Atrair o público certo com conteúdo, criativos e tráfego pago.",
  "Organizar o atendimento para transformar mais contatos em reservas.",
  "Acompanhar os resultados e corrigir o que não está funcionando.",
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
              src={heroThumb}
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
  
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0" style={{ background: "rgba(5,5,5, 0.72)" }} />
      </div>
      <div className="relative z-10 pt-20 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-7 max-w-[1100px] mx-auto flex flex-col items-center">
        {/* Headline */}
        <div className="text-center mb-8 sm:mb-10 reveal">
          {/* Label */}
          <div
            className="font-label uppercase text-ochre/80 text-[0.68rem] sm:text-[0.78rem] tracking-[0.28em] mb-4 sm:mb-5"
          >
            <span className="sm:hidden">MÉTODO PARA HOSPEDAGENS</span>
            <span className="hidden sm:inline">MÉTODO DE OCUPAÇÃO PARA HOSPEDAGENS</span>
          </div>

          <h1 className="font-heading text-[1.9rem] sm:text-[clamp(2.4rem,5vw,4.4rem)] font-black text-night leading-[1.15] mb-4 sm:mb-5 max-w-[900px] mx-auto">
            Aumente a ocupação da sua hospedagem{" "}
            <em className="text-ochre font-black not-italic">sem baixar o preço</em>{" "}
            ou depender apenas de feriados.
          </h1>
          <p className="text-night/85 text-base sm:text-xl max-w-[720px] mx-auto leading-relaxed">
            Aplique o Método Check-in Lotado para identificar os períodos vazios, planejar campanhas, atrair o público certo e transformar mais procura em reservas.
          </p>
          <p className="text-night/60 text-sm sm:text-[0.95rem] max-w-[640px] mx-auto leading-relaxed mt-3">
            Um passo a passo prático para hotéis, pousadas, chalés e casas de temporada que querem vender melhor durante todo o calendário.
          </p>
        </div>

        {/* Video — lazy YouTube facade */}
        <YouTubeFacade videoId="m_EClZVmHXY" />

        {/* Disclaimer discreto */}
        <p className="reveal text-night/50 text-[0.72rem] sm:text-[0.78rem] leading-relaxed max-w-[680px] mx-auto text-center mt-5">
          Os resultados variam conforme a estrutura da hospedagem, o mercado, a execução e o ponto de partida.
        </p>

        {/* Bullets */}
        <p className="reveal text-night/80 text-base sm:text-lg font-heading mt-8 sm:mt-10 mb-3 font-extrabold">
          O que você vai aprender a fazer:
        </p>
        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 sm:gap-y-4 max-w-[820px]">
          {bullets.map((text, i) => (
            <div key={i} className="flex items-start gap-2.5 sm:gap-3">
              <span className="text-ochre mt-1 shrink-0 text-sm">◆</span>
              <p className="text-night text-base sm:text-lg leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button onClick={() => scrollToSection("comprar")} className="btn-cta btn-cta-lg mt-8 text-center reveal w-full sm:w-auto">
          <span className="text-[0.78rem] sm:text-base">QUERO AUMENTAR MINHA OCUPAÇÃO</span>
          <span className="relative z-[1]">↗</span>
        </button>
        <p className="reveal text-night/60 text-[0.75rem] sm:text-[0.85rem] mt-3 text-center">
          Acesso imediato • Método passo a passo • Garantia de 7 dias
        </p>
      </div>
    </section>
  );
};

export default Hero;
