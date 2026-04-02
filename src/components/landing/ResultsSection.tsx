import { ImageIcon } from "lucide-react";

const placeholders = [
  { type: "WhatsApp · Reserva confirmada", subtitle: "Pousada — Litoral SP" },
  { type: "WhatsApp · Reserva confirmada", subtitle: "Chalé — Serra Gaúcha" },
  { type: "WhatsApp · Reserva confirmada", subtitle: "Casa de temporada — MG" },
  { type: "WhatsApp · Reserva confirmada", subtitle: "Pousada — Litoral RJ" },
  { type: "WhatsApp · Reserva confirmada", subtitle: "Flat — Nordeste" },
  { type: "WhatsApp · Reserva confirmada", subtitle: "Chalé — Serra Catarinense" },
  { type: "WhatsApp · Reserva confirmada", subtitle: "Pousada — Costa Verde" },
  { type: "WhatsApp · Reserva confirmada", subtitle: "Casa — Chapada dos Veadeiros" },
  { type: "WhatsApp · Reserva confirmada", subtitle: "Pousada — Litoral Sul" },
];

const ResultsSection = () => {
  return (
    <section style={{ background: "#EAE3CF", padding: "96px 28px" }}>
      <div className="max-w-[1100px] mx-auto">
        <div className="reveal text-center mb-14">
          <div className="label-text mb-3.5">Resultados reais</div>
          <h2 className="font-heading text-[clamp(1.9rem,4vw,3.3rem)] text-night mb-4">
            Quem aplica o método, vende.<br />
            <em className="shimmer-text">Todo. Dia.</em>
          </h2>
          <p className="text-night/55 text-[0.95rem] leading-relaxed max-w-[560px] mx-auto mb-6">
            Prints reais de hospedagens que aplicaram o método Check-in Lotado e transformaram fins de semana vazios em reservas confirmadas.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ochre/[0.12] text-ochre text-[0.82rem] font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-ochre animate-pulse" />
            +300 reservas confirmadas
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {placeholders.map((item, i) => (
            <div
              key={i}
              className="landing-card reveal overflow-hidden"
              style={{ transitionDelay: `${(i + 1) * 0.05}s` }}
            >
              {/* WhatsApp-style header */}
              <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: "1px solid rgba(200,148,58,0.1)" }}>
                <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                <span className="text-night/50 text-[0.75rem] font-medium">{item.type}</span>
              </div>

              {/* Image placeholder */}
              <div
                className="w-full flex items-center justify-center"
                style={{
                  aspectRatio: "920 / 1350",
                  background: "rgba(200,148,58,0.06)",
                }}
              >
                <ImageIcon className="w-10 h-10 text-ochre/30" />
              </div>

              {/* Footer */}
              <div className="px-4 py-3" style={{ borderTop: "1px solid rgba(200,148,58,0.1)" }}>
                <p className="text-night/45 text-[0.75rem]">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
