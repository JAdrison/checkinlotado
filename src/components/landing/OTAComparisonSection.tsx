import { AlertTriangle } from "lucide-react";

const OTAComparisonSection = () => {
  return (
    <section className="relative py-24 px-7 bg-cream-dark">
      <div className="max-w-[700px] mx-auto">
        {/* Headline */}
        <div className="reveal text-center mb-16">
          <div className="label-text text-ochre mb-4">
            A conta que ninguém faz
          </div>
          <h2 className="font-heading text-[clamp(1.9rem,4vw,3.3rem)] leading-tight text-night">
            Quanto custa depender
            <br />
            <span className="shimmer-text">só do Airbnb</span>?
          </h2>
        </div>

        {/* Cálculo simples */}
        <div className="reveal rounded-2xl p-8 md:p-10 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
          <div className="space-y-0">
            <div className="flex justify-between items-center py-4 border-b border-night/5">
              <span className="text-night/70 text-base">Diária anunciada</span>
              <span className="font-heading text-xl text-night">R$ 1.000</span>
            </div>
            <div className="flex justify-between items-center py-4 border-b border-night/5">
              <span className="text-night/70 text-base">Comissão Airbnb (20%)</span>
              <span className="font-heading text-xl text-night">− R$ 200</span>
            </div>
            <div className="flex justify-between items-center py-4">
              <span className="font-heading text-lg text-night">Você recebe</span>
              <span className="font-heading text-xl text-ochre">R$ 800</span>
            </div>
          </div>

          <div className="h-px w-full my-8 bg-night/10" />

          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <AlertTriangle className="w-6 h-6 text-night/40" />
              <span className="font-heading text-[2.2rem] md:text-[3rem] text-night">
                −R$ 40.000
              </span>
            </div>
            <p className="text-sm md:text-base text-night/50">
              200 diárias/ano × R$ 200 = <strong className="text-night/70">R$ 40.000/ano</strong> saindo do seu faturamento
            </p>
          </div>
        </div>

        {/* Bottom text */}
        <div className="reveal text-center mt-14">
          <p className="text-base md:text-lg text-night/50">
            <strong className="text-ochre">
              Com o método, você aprende a não depender mais.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default OTAComparisonSection;
