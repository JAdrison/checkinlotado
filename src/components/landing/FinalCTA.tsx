import { scrollToSection } from "@/lib/scrollToSection";

const FinalCTA = () => {
  
  return (
    <section style={{ background: "#080706", textAlign: "center", position: "relative", overflow: "hidden" }} className="py-12 sm:py-[72px] px-4 sm:px-7">
      {/* Blur glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[300px] sm:h-[400px] rounded-full pointer-events-none"
        style={{ background: "rgba(200,148,58,0.08)", filter: "blur(80px)" }}
      />
      <div className="max-w-[660px] mx-auto relative">
        <div className="reveal">
          <h2 className="font-heading text-[1.5rem] sm:text-[clamp(1.9rem,4vw,3.3rem)] font-black text-night leading-[1.15] mb-4 sm:mb-5">
            Não deixe o próximo<br />
            <em className="shimmer-text font-extrabold">fim de semana</em> passar vazio
          </h2>
          <p className="text-night text-[0.9rem] sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-[520px] mx-auto">
            Cada fim de semana sem hóspedes é dinheiro que não volta. O método está pronto. A decisão é sua.
          </p>
          <button onClick={() => scrollToSection("comprar")} className="btn-cta btn-cta-lg w-full sm:w-auto">
            <span className="text-[0.75rem] sm:text-base">QUERO ENTRAR AGORA →</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
