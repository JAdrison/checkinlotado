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

        {/* Subheadline — 3 fatos */}
        <div className="reveal space-y-6 mb-16">
          <div>
            <h3 className="font-heading text-xl md:text-2xl text-night">
              3 coisas que todo dono de pousada precisa saber:
            </h3>
            <p className="text-night/50 text-sm mt-1">
              Antes de precificar a próxima temporada
            </p>
          </div>

          <div className="space-y-5">
            <div className="flex gap-4 items-start">
              <span className="w-10 h-10 shrink-0 rounded-full bg-ochre/10 text-ochre flex items-center justify-center font-bold text-sm">01</span>
              <div>
                <p className="font-heading text-base text-night">Airbnb cobra 16% de comissão por reserva</p>
                <p className="text-night/50 text-sm">Direto do valor da diária, antes de qualquer imposto</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="w-10 h-10 shrink-0 rounded-full bg-ochre/10 text-ochre flex items-center justify-center font-bold text-sm">02</span>
              <div>
                <p className="font-heading text-base text-night">Nota fiscal será obrigatória a partir de 2026</p>
                <p className="text-night/50 text-sm">Reforma Tributária equiparou temporada a hotelaria</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="w-10 h-10 shrink-0 rounded-full bg-ochre/10 text-ochre flex items-center justify-center font-bold text-sm">03</span>
              <div>
                <p className="font-heading text-base text-night">Impostos podem tirar até 20% a mais da diária</p>
                <p className="text-night/50 text-sm">ISS municipal + novos tributos federais (IBS e CBS)</p>
              </div>
            </div>
          </div>

          <p className="text-ochre font-heading text-base">
            → A conta precisa ser refeita agora.
          </p>
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
