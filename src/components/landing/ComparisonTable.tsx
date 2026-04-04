import { Check, X, TrendingUp, TrendingDown } from "lucide-react";

const withMethod = [
  "Vende bem em fins de semana comuns",
  "Cria campanhas com antecedência",
  "Vende com margem e posicionamento",
  "Tem calendário e roteiro prontos",
  "Opera com clareza e previsibilidade",
  "Transforma presença em reserva",
];

const withoutMethod = [
  "Depende de feriados para faturar",
  "Improvisa campanhas de última hora",
  "Baixa preço para tentar vender",
  "Não sabe o que ou quando divulgar",
  "Vive em alerta toda quinta-feira",
  "Vende por acaso, não por estratégia",
];

const ComparisonTable = () => {
  return (
    <section style={{ background: "#FFFFFF" }} className="py-10 sm:py-16 px-4 sm:px-7">
      <div className="max-w-[900px] mx-auto">
        <div className="reveal text-center mb-8 sm:mb-14">
          <div className="label-text mb-3">Antes e depois</div>
          <h2 className="font-heading text-[1.5rem] sm:text-[clamp(1.9rem,4vw,3.3rem)] font-black text-night leading-[1.15]">
            O que muda com o<br />
            <em className="shimmer-text font-extrabold">Check-in Lotado</em>
          </h2>
        </div>

        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Card positivo */}
          <div className="bg-[#FAF8F4] rounded-2xl p-5 sm:p-8 shadow-[0_2px_20px_rgba(0,0,0,0.06)] border border-night/5">
            <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-ochre/10 flex items-center justify-center mb-4 sm:mb-5">
              <TrendingUp className="w-5 sm:w-6 h-5 sm:h-6 text-ochre" />
            </div>
            <h3 className="font-heading text-lg sm:text-xl text-night mb-4 sm:mb-6">
              Com o <span className="text-ochre font-bold">Check-in Lotado</span>
            </h3>
            <ul className="space-y-0">
              {withMethod.map((item, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-2.5 sm:gap-3 py-3 sm:py-4 ${i < withMethod.length - 1 ? "border-b border-night/5" : ""}`}
                >
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-ochre/15 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-ochre" strokeWidth={3} />
                  </span>
                  <span className="text-night text-[0.85rem] sm:text-[0.95rem] leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card negativo */}
          <div className="bg-[#FAF8F4] rounded-2xl p-5 sm:p-8 shadow-[0_2px_20px_rgba(0,0,0,0.06)] border border-night/5">
            <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4 sm:mb-5">
              <TrendingDown className="w-5 sm:w-6 h-5 sm:h-6 text-red-500" />
            </div>
            <h3 className="font-heading text-lg sm:text-xl text-night/80 mb-4 sm:mb-6">
              Sem o método
            </h3>
            <ul className="space-y-0">
              {withoutMethod.map((item, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-3 py-4 ${i < withoutMethod.length - 1 ? "border-b border-night/5" : ""}`}
                >
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                    <X className="w-3 h-3 text-red-400" strokeWidth={3} />
                  </span>
                  <span className="text-night/85 text-[0.95rem] leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* CTA */}
        <div className="reveal text-center mt-12">
          <a href="#comprar" className="btn-cta btn-cta-lg">
            QUERO ENTRAR AGORA →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
