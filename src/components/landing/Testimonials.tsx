const testimonials = [
  {
    text: "Aplicamos o calendário comercial e conseguimos ocupação em 3 fins de semana seguidos fora de feriado. Nunca tinha acontecido antes.",
    name: "Mariana R.",
    role: "Pousada — Litoral SP",
    initial: "M",
  },
  {
    text: "Parei de baixar preço. Aprendi a criar oferta, mostrar valor e divulgar na hora certa. A diferença foi imediata nas reservas.",
    name: "Carlos F.",
    role: "Chalé — Serra Gaúcha",
    initial: "C",
  },
  {
    text: "Sempre achei que era falta de turistas. Depois do curso entendi que era falta de estratégia. Minha agenda nunca esteve tão cheia.",
    name: "Ana L.",
    role: "Casa de temporada — MG",
    initial: "A",
  },
];

const Testimonials = () => {
  return (
    <section style={{ background: "#F2EDE0", padding: "96px 28px" }}>
      <div className="max-w-[1000px] mx-auto">
        <div className="reveal text-center mb-14">
          <div className="label-text mb-3.5">Resultados reais</div>
          <h2 className="font-heading text-[clamp(1.9rem,4vw,3.3rem)] text-night">
            O que dizem quem<br />
            <em className="text-ochre">já aplicou o método</em>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="landing-card reveal p-7"
              style={{ transitionDelay: `${(i + 1) * 0.05}s` }}
            >
              <div className="text-ochre mb-3.5">★★★★★</div>
              <p className="text-night/70 text-[0.87rem] leading-[1.72] mb-5">
                "{t.text}"
              </p>
              <div className="flex items-center gap-2.5">
                <div className="w-[34px] h-[34px] rounded-full bg-ochre/[0.18] flex items-center justify-center text-ochre font-bold text-[0.82rem]">
                  {t.initial}
                </div>
                <div>
                  <p className="text-night text-[0.8rem] font-semibold">{t.name}</p>
                  <p className="text-night/45 text-[0.7rem]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
