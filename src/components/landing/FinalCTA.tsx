const FinalCTA = () => {
  return (
    <section style={{ background: "#EAE3CF", padding: "110px 28px", textAlign: "center", position: "relative", overflow: "hidden" }}>
      {/* Blur glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "rgba(200,148,58,0.06)", filter: "blur(80px)" }}
      />
      <div className="max-w-[660px] mx-auto relative">
        <div className="reveal">
          <h2 className="font-heading text-[clamp(1.9rem,4vw,3.3rem)] text-night mb-5">
            Não deixe o próximo<br />
            <em className="text-ochre">fim de semana</em> passar vazio
          </h2>
          <p className="text-night/55 text-[0.95rem] leading-relaxed mb-10 max-w-[520px] mx-auto">
            Cada fim de semana sem hóspedes é dinheiro que não volta. O método está pronto. A decisão é sua.
          </p>
          <a href="#comprar" className="btn-cta btn-cta-lg">
            <span>QUERO ENTRAR AGORA →</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
