import { X, Check } from "lucide-react";

const improviso = [
  "Promoção de última hora",
  "Conteúdo sem direção",
  "Preço como único argumento",
  "Atendimento sem follow-up",
  "Resultados imprevisíveis",
];

const metodo = [
  "Diagnóstico da ocupação",
  "Público e oferta definidos",
  "Campanhas planejadas",
  "Atendimento estruturado",
  "Análise e otimização",
];

const PerspectiveShift = () => {
  return (
    <section style={{ background: "#080706" }} className="py-14 sm:py-20 px-4 sm:px-7">
      <div className="max-w-[1100px] mx-auto">
        <div className="reveal text-center mb-10 sm:mb-14">
          <div className="label-text mb-3">Mudança de perspectiva</div>
          <h2 className="font-heading text-[1.5rem] sm:text-[clamp(1.9rem,4vw,3.2rem)] text-night leading-[1.15]">
            Mais divulgação não corrige uma <em className="shimmer-text font-extrabold">estratégia desorganizada</em>
          </h2>
          <p className="text-night/70 text-sm sm:text-base max-w-[640px] mx-auto mt-5 leading-relaxed">
            Postar não é o mesmo que gerar demanda. Desconto não é oferta. Impulsionar não é campanha. Receber mensagem não é fechar reserva.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-8">
          <div className="reveal p-6 sm:p-8 rounded-sm" style={{ background: "#11100E", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="label-text text-night/50 mb-5" style={{ color: "rgba(245,238,223,0.4)" }}>Improviso</div>
            <ul className="flex flex-col gap-3.5">
              {improviso.map((t, i) => (
                <li key={i} className="flex items-start gap-3 text-night/70 text-sm sm:text-base">
                  <X size={18} className="flex-shrink-0 mt-0.5 opacity-50" strokeWidth={1.6} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal p-6 sm:p-8 rounded-sm" style={{ background: "linear-gradient(180deg, rgba(201,151,62,0.06), rgba(201,151,62,0.02))", border: "1px solid rgba(201,151,62,0.35)" }}>
            <div className="label-text mb-5">Método Check-in Lotado</div>
            <ul className="flex flex-col gap-3.5">
              {metodo.map((t, i) => (
                <li key={i} className="flex items-start gap-3 text-night text-sm sm:text-base">
                  <Check size={18} className="flex-shrink-0 mt-0.5 text-ochre" strokeWidth={1.8} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerspectiveShift;
