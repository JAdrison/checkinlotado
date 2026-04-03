import ShuffleGrid from "@/components/ui/shuffle-grid";

const GallerySection = () => {
  return (
    <section className="py-14 px-7" style={{ background: "#1A1208" }}>
      <div className="max-w-[1100px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="reveal">
            <div className="inline-block border border-ochre/30 rounded-full px-6 py-2.5 mb-6">
              <span className="label-text text-cream-mid">HOSPEDAGENS QUE APLICARAM O MÉTODO</span>
            </div>
            <h2 className="font-heading text-[clamp(1.8rem,4vw,3rem)] font-black text-cream leading-[1.2] mb-5">
              De ponta a ponta do Brasil,{" "}
              <em className="shimmer-text font-extrabold">lotando fins de semana</em>
            </h2>
            <p className="text-cream-mid text-lg leading-relaxed mb-8">
              Pousadas de praia, chalés de serra, flats urbanos e casas de campo.
              O método funciona para qualquer tipo de hospedagem que quer parar de
              depender de feriado.
            </p>
            <a href="#comprar" className="btn-cta btn-cta-lg w-full sm:w-auto text-center">
              <span>QUERO O MESMO RESULTADO</span>
              <span className="relative z-[1]">↗</span>
            </a>
          </div>

          {/* Shuffle Grid */}
          <div className="reveal">
            <ShuffleGrid />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
