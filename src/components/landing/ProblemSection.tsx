const ProblemSection = () => {
  return (
    <section style={{ background: "#EAE3CF", padding: "96px 28px" }}>
      <div className="max-w-[800px] mx-auto">
        <div className="reveal text-center mb-14">
          <div className="label-text mb-3.5">O problema</div>
          <h2 className="font-heading text-[clamp(1.9rem,4vw,3.3rem)] text-night mb-5">
            Sua hospedagem <em className="shimmer-text">depende de feriados</em> para faturar?
          </h2>
          <p className="text-night/85 text-[0.95rem] leading-relaxed max-w-[600px] mx-auto">
            A maioria dos donos de pousada só tem ocupação alta em feriados prolongados e alta temporada. Nos fins de semana comuns, os quartos ficam vazios, o faturamento cai e a solução parece ser baixar preço.
          </p>
        </div>
        <div className="divider-gold mb-10 reveal" />
        <p className="text-night/80 text-center text-[0.92rem] leading-relaxed max-w-[580px] mx-auto reveal">
          A verdade é que a demanda existe — mas ela precisa ser ativada com estratégia, antecedência e comunicação certa. É exatamente isso que o método <strong className="text-night">Check-in Lotado</strong> ensina.
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
