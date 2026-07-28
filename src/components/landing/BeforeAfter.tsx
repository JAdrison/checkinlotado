import { ArrowRight } from "lucide-react";

const before = [
  "Descobre as datas vazias tarde demais.",
  "Cria promoções sem planejamento.",
  "Publica sem saber para quem.",
  "Depende de feriados e OTAs.",
  "Não acompanha os contatos.",
  "Não sabe quais ações geram reservas.",
];

const after = [
  "Mapeia os períodos críticos.",
  "Planeja campanhas com antecedência.",
  "Cria ofertas para públicos específicos.",
  "Trabalha diferentes períodos do calendário.",
  "Organiza atendimento e follow-up.",
  "Mede ocupação, contatos e reservas.",
];

const BeforeAfter = () => {
  return (
    <section style={{ background: "#11100E" }} className="py-14 sm:py-20 px-4 sm:px-7">
      <div className="max-w-[1100px] mx-auto">
        <div className="reveal text-center mb-10 sm:mb-14 max-w-[760px] mx-auto">
          <div className="label-text mb-3">ANTES E DEPOIS</div>
          <h2 className="font-heading text-[1.6rem] sm:text-[clamp(1.9rem,4vw,3.2rem)] text-night leading-[1.15]">
            A diferença entre <em className="text-ochre font-extrabold not-italic">improvisar</em> e operar com método.
          </h2>
        </div>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-4 items-stretch">
          <div className="reveal p-6 sm:p-8 rounded-sm" style={{ background: "#080706", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="label-text mb-6" style={{ color: "rgba(245,238,223,0.4)" }}>Antes do método</div>
            <ul className="flex flex-col gap-3">
              {before.map((t, i) => (
                <li key={i} className="text-night/60 text-sm sm:text-base leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:opacity-40">
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <div className="w-11 h-11 rounded-full border border-ochre/50 flex items-center justify-center">
              <ArrowRight className="text-ochre" size={18} />
            </div>
          </div>

          <div className="reveal p-6 sm:p-8 rounded-sm" style={{ background: "linear-gradient(180deg, rgba(201,151,62,0.06), rgba(201,151,62,0.02))", border: "1px solid rgba(201,151,62,0.35)" }}>
            <div className="label-text mb-6">Depois da implementação</div>
            <ul className="flex flex-col gap-3">
              {after.map((t, i) => (
                <li key={i} className="text-night text-sm sm:text-base leading-relaxed pl-4 relative before:content-['◆'] before:absolute before:left-0 before:text-ochre before:text-[0.7rem] before:top-[3px]">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
