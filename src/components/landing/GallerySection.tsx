import ShuffleGrid from "@/components/ui/shuffle-grid";
import { scrollToSection } from "@/lib/scrollToSection";

const GallerySection = () => {
  
  return (
    <section className="py-10 sm:py-14 px-4 sm:px-7" style={{ background: "#080706" }}>
      <div className="max-w-[1100px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Text */}
          <div className="reveal">
            <div className="inline-block border border-ochre/30 rounded-full px-4 sm:px-6 py-2 sm:py-2.5 mb-4 sm:mb-6">
              <span className="label-text text-cream-mid text-[0.6rem] sm:text-[0.7rem]">HOSPEDAGENS QUE APLICARAM O MÉTODO</span>
            </div>
            <h2 className="font-heading text-[1.4rem] sm:text-[clamp(1.8rem,4vw,3rem)] font-black text-cream leading-[1.15] mb-4 sm:mb-5">
              De ponta a ponta do Brasil,{" "}
              <em className="shimmer-text font-extrabold">lotando fins de semana</em>
            </h2>
            <p className="text-cream-mid text-[0.9rem] sm:text-lg leading-relaxed mb-6 sm:mb-8">
              Pousadas de praia, chalés de serra, flats urbanos e casas de campo.
              O método funciona para qualquer tipo de hospedagem que quer parar de
              depender de feriado.
            </p>
            <button onClick={() => scrollToSection("comprar")} className="btn-cta btn-cta-lg w-full sm:w-auto text-center">
              <span className="text-[0.75rem] sm:text-base">QUERO O MESMO RESULTADO</span>
              <span className="relative z-[1]">↗</span>
            </button>
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
