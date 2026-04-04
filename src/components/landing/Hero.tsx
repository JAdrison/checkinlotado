import heroBg from "@/assets/hero-bg.jpg";
import { trackEvent } from "@/lib/meta-capi";

const bullets = [
  "Por que sua hospedagem não lota fins de semana comuns — e como mudar isso",
  "Como criar campanhas com antecedência sem depender de feriados",
  "O que divulgar, quando divulgar e como fechar reservas pelo WhatsApp",
  "Como vender mais sem baixar preço e sair do improviso de vez",
];

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "rgba(242, 237, 224, 0.88)" }} />
      </div>
      <div className="relative z-10 pt-20 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-7 max-w-[1100px] mx-auto flex flex-col items-center">
        {/* Headline */}
        <div className="text-center mb-8 sm:mb-10 reveal">
          <div className="inline-block border border-ochre/30 rounded-full px-4 sm:px-6 py-2 sm:py-2.5 mb-5 sm:mb-6">
            <span className="label-text text-[0.6rem] sm:text-[0.7rem]">TREINAMENTO ONLINE PARA HOSPEDAGENS</span>
          </div>
          <h1 className="font-heading text-[1.8rem] sm:text-[clamp(2.2rem,5vw,4.2rem)] font-black text-night leading-[1.15] mb-4 sm:mb-5">
            Como lotar sua hospedagem em{" "}
            <em className="shimmer-text font-black">fins de semana comuns</em>
          </h1>
          <p className="text-night/85 text-base sm:text-xl max-w-[560px] mx-auto leading-relaxed">
            Sem depender de feriados, sem baixar preço, sem improvisar campanha em cima da hora.
          </p>
        </div>

        {/* Video — protagonista (lazy YouTube facade) */}
        <YouTubeFacade videoId="m_EClZVmHXY" />

        {/* Bullets 2x2 */}
        <p className="reveal text-night/70 text-sm sm:text-base font-heading font-semibold mt-8 sm:mt-10 mb-2">Nessa Aula você vai aprender:</p>
        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 sm:gap-y-4 max-w-[750px]">
          {bullets.map((text, i) => (
            <div key={i} className="flex items-start gap-2.5 sm:gap-3">
              <span className="text-ochre mt-0.5 sm:mt-1 shrink-0 text-sm">◆</span>
              <p className="text-night/80 text-[0.9rem] sm:text-lg leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a href="https://pay.kiwify.com.br/Y613pR3" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("InitiateCheckout", { content_name: "Check-in Lotado", value: 51.40, currency: "BRL" })} className="btn-cta btn-cta-lg mt-8 text-center reveal">
          <span>QUERO LOTAR MINHA HOSPEDAGEM</span>
          <span className="relative z-[1]">↗</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
