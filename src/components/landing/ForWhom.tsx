const ForWhom = () => {
  const items = [
    "Donos de pousada que querem ocupação previsível",
    "Gestores de hospedagem que cansaram de improvisar",
    "Casas de temporada com ocupação irregular",
    "Quem quer vender mais sem baixar preço",
  ];

  return (
    <section style={{ background: "#F2EDE0", padding: "96px 28px" }}>
      <div className="max-w-[800px] mx-auto">
        <div className="reveal text-center mb-14">
          <div className="label-text mb-3.5">Para quem é</div>
          <h2 className="font-heading text-[clamp(1.9rem,4vw,3.3rem)] text-night">
            Este treinamento é para <em className="shimmer-text">você?</em>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="landing-card reveal p-5 flex items-start gap-3"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <span className="text-ochre text-lg">✓</span>
              <p className="text-night/70 text-[0.9rem] leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhom;
