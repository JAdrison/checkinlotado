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
    <section style={{ background: "hsl(var(--cream))" }} className="py-24 px-7">
      <div className="max-w-[900px] mx-auto">
        <div className="reveal text-center mb-14">
          <div className="label-text mb-3.5">Antes e depois</div>
          <h2 className="font-heading text-[clamp(1.9rem,4vw,3.3rem)] font-bold text-night leading-[1.2]">
            O que muda com o<br />
            <em className="shimmer-text font-extrabold">Check-in Lotado</em>
          </h2>
        </div>

        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card positivo */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
            <div className="w-12 h-12 rounded-xl bg-ochre/10 flex items-center justify-center mb-5">
              <TrendingUp className="w-6 h-6 text-ochre" />
            </div>
            <h3 className="font-heading text-xl text-night mb-6">
              Com o <span className="text-ochre font-bold">Check-in Lotado</span>
            </h3>
            <ul className="space-y-0">
              {withMethod.map((item, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-3 py-4 ${i < withMethod.length - 1 ? "border-b border-night/5" : ""}`}
                >
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-ochre/15 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-ochre" strokeWidth={3} />
                  </span>
                  <span className="text-night text-[0.95rem] leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card negativo */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-5">
              <TrendingDown className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="font-heading text-xl text-night/80 mb-6">
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
      </div>
    </section>
  );
};

export default ComparisonTable;
