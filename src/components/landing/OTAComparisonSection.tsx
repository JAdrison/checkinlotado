import { Check, X, TrendingDown, TrendingUp, AlertTriangle } from "lucide-react";

const otaDisadvantages = [
  "Comissão de 15% a 20% por reserva",
  "Sem acesso aos dados do hóspede",
  "Dependência total da plataforma",
  "Concorrência com milhares de anúncios",
  "Política de cancelamento imposta",
  "Você vira refém do algoritmo",
];

const methodAdvantages = [
  "Venda direta — 0% de comissão",
  "Base própria de hóspedes e contatos",
  "Controle total da comunicação",
  "Posicionamento premium e diferenciado",
  "Política comercial sob sua decisão",
  "Estratégia que funciona sem plataforma",
];

const OTAComparisonSection = () => {
  return (
    <section className="relative py-24 px-7 bg-cream-dark">
      <div className="max-w-[1000px] mx-auto">
        {/* Headline */}
        <div className="reveal text-center mb-16">
          <div className="label-text text-ochre mb-4">
            A conta que ninguém faz
          </div>
          <h2 className="font-heading text-[clamp(1.9rem,4vw,3.3rem)] leading-tight text-night">
            Quanto custa depender
            <br />
            do <span className="shimmer-text">Airbnb</span>?
          </h2>
        </div>

        {/* Simulação numérica */}
        <div className="reveal mx-auto max-w-[700px] rounded-2xl p-8 md:p-10 mb-16 text-center bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
          <p className="text-sm md:text-base mb-6 tracking-wide uppercase label-text text-ochre">
            Simulação com números reais
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 mb-8">
            <div>
              <div className="font-heading text-[2.2rem] md:text-[2.6rem] text-night">
                R$500
              </div>
              <p className="text-sm mt-1 text-night/50">diária média</p>
            </div>
            <div>
              <div className="font-heading text-[2.2rem] md:text-[2.6rem] text-night">
                16%
              </div>
              <p className="text-sm mt-1 text-night/50">comissão da OTA</p>
            </div>
            <div>
              <div className="font-heading text-[2.2rem] md:text-[2.6rem] text-night">
                300
              </div>
              <p className="text-sm mt-1 text-night/50">diárias/ano</p>
            </div>
          </div>

          <div className="h-px w-full mb-8 bg-night/10" />

          <div className="flex items-center justify-center gap-3 mb-2">
            <AlertTriangle className="w-6 h-6 text-night/40" />
            <span className="font-heading text-[2.8rem] md:text-[3.5rem] text-night">
              −R$24.000
            </span>
          </div>
          <p className="text-base md:text-lg text-night/50">
            perdidos por ano em comissões
          </p>
        </div>

        {/* Comparação lado a lado */}
        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* OTAs card */}
          <div className="rounded-2xl p-8 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
            <div className="flex items-center gap-3 mb-6">
              <TrendingDown className="w-5 h-5 text-night/40" />
              <h3 className="font-heading text-xl text-night/70">
                Airbnb / Booking
              </h3>
            </div>
            <ul className="space-y-0">
              {otaDisadvantages.map((item, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-3 py-3.5 ${
                    i < otaDisadvantages.length - 1 ? "border-b border-night/5" : ""
                  }`}
                >
                  <span className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-night/5">
                    <X className="w-3 h-3 text-night/40" strokeWidth={3} />
                  </span>
                  <span className="text-[0.95rem] leading-snug text-night/60">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-5 text-center border-t border-night/5">
              <span className="font-heading text-2xl text-night/60">
                −R$24.000/ano
              </span>
              <p className="text-sm mt-1 text-night/40">
                saindo do seu faturamento
              </p>
            </div>
          </div>

          {/* Check-in Lotado card */}
          <div className="rounded-2xl p-8 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)] border border-ochre/20">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-5 h-5 text-ochre" />
              <h3 className="font-heading text-xl text-night">
                Check-in Lotado
              </h3>
            </div>
            <ul className="space-y-0">
              {methodAdvantages.map((item, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-3 py-3.5 ${
                    i < methodAdvantages.length - 1 ? "border-b border-ochre/10" : ""
                  }`}
                >
                  <span className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-ochre/10">
                    <Check className="w-3 h-3 text-ochre" strokeWidth={3} />
                  </span>
                  <span className="text-[0.95rem] leading-snug text-night/80">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-5 text-center border-t border-ochre/10">
              <span className="font-heading text-lg text-ochre">
                Investimento único
              </span>
              <p className="text-sm mt-1 text-night/40">
                que se paga na primeira reserva direta
              </p>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="reveal text-center mt-14">
          <p className="text-base md:text-lg max-w-[600px] mx-auto leading-relaxed text-night/50">
            Em 10 reservas diretas, você já recuperou o investimento.
            <br />
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
