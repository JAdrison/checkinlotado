import heroBg from "@/assets/hero-bg.jpg";

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
      <div className="relative z-10 pt-24 sm:pt-32 pb-16 px-4 sm:px-7 max-w-[1100px] mx-auto flex flex-col items-center">
        {/* Headline */}
        <div className="text-center mb-10 reveal">
          <div className="inline-block border border-ochre/30 rounded-full px-6 py-2.5 mb-6">
            <span className="label-text">TREINAMENTO ONLINE PARA HOSPEDAGENS</span>
          </div>
          <h1 className="font-heading text-[clamp(2.2rem,5vw,4.2rem)] font-black text-night leading-[1.1] mb-5">
            Como lotar sua hospedagem em{" "}
            <em className="shimmer-text">fins de semana comuns</em>
          </h1>
          <p className="text-night/85 text-xl max-w-[560px] mx-auto leading-relaxed">
            Sem depender de feriados, sem baixar preço, sem improvisar campanha em cima da hora.
          </p>
        </div>

        {/* Video — protagonista */}
        <div className="reveal w-full max-w-[900px]">
          <div className="video-box relative w-full rounded-3xl overflow-hidden shadow-2xl" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/m_EClZVmHXY?modestbranding=1&rel=0&showinfo=0&controls=0&disablekb=1&iv_load_policy=3"
              title="VSL - Check in Lotado"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Bullets 2x2 */}
        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mt-10 max-w-[750px]">
          {bullets.map((text, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-ochre mt-1 shrink-0">◆</span>
              <p className="text-night/80 text-[0.95rem] leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a href="#comprar" className="btn-cta btn-cta-lg mt-8 text-center reveal">
          <span>QUERO LOTAR MINHA HOSPEDAGEM</span>
          <span className="relative z-[1]">↗</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
