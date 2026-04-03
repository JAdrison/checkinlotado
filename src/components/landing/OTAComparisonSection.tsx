import { AlertTriangle } from "lucide-react";
import reformaImg from "@/assets/reforma-tributaria.png";

const OTAComparisonSection = () => {
  return (
    <section className="relative py-24 px-7 bg-cream-dark">
      <div className="max-w-[1100px] mx-auto">
        {/* Headline */}
        <div className="reveal text-center mb-16">
          <div className="label-text text-ochre mb-4">
            A conta que ninguém faz
          </div>
          <h2 className="font-heading text-[clamp(1.9rem,4vw,3.3rem)] font-black leading-[1.2] text-night">
            Quanto custa depender
            <br />
            <span className="shimmer-text font-extrabold">só do Airbnb</span>?
          </h2>
        </div>

        {/* Subheadline — 3 fatos + imagem lado a lado */}
        <div className="reveal grid lg:grid-cols-2 gap-10 items-center mb-16">
          {/* Imagem da reportagem */}
          <div className="rounded-2xl overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.08)]">
            <img src={reformaImg} alt="Reportagem sobre Reforma Tributária 2026 — nova carga tributária para locação" className="w-full h-auto" />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-black text-night">
                3 coisas que todo dono de pousada precisa saber:
              </h3>
              <p className="text-night/60 text-base mt-2">
                Antes de precificar a próxima temporada
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <span className="w-11 h-11 shrink-0 rounded-full bg-ochre/10 text-ochre flex items-center justify-center font-bold text-base">01</span>
                <div>
                  <p className="font-heading text-lg font-bold text-night">Airbnb cobra 16% de comissão por reserva</p>
                  <p className="text-night/60 text-base">Direto do valor da diária, antes de qualquer imposto</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="w-11 h-11 shrink-0 rounded-full bg-ochre/10 text-ochre flex items-center justify-center font-bold text-base">02</span>
                <div>
                  <p className="font-heading text-lg font-bold text-night">Nota fiscal será obrigatória a partir de 2026</p>
                  <p className="text-night/60 text-base">Reforma Tributária equiparou temporada a hotelaria</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="w-11 h-11 shrink-0 rounded-full bg-ochre/10 text-ochre flex items-center justify-center font-bold text-base">03</span>
                <div>
                  <p className="font-heading text-lg font-bold text-night">Impostos podem tirar até 20% a mais da diária</p>
                  <p className="text-night/60 text-base">ISS municipal + novos tributos federais (IBS e CBS)</p>
                </div>
              </div>
            </div>

            <p className="text-ochre font-heading text-lg font-bold">
              → A conta precisa ser refeita agora.
            </p>
          </div>
        </div>

        {/* Cálculo simples */}

        {/* Cálculo simples */}
        <div className="max-w-[700px] mx-auto">
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
