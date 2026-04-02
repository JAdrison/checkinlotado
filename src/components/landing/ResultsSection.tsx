import print1 from "@/assets/prints/print-1.jpg";
import print2 from "@/assets/prints/print-2.jpg";
import print3 from "@/assets/prints/print-3.jpg";
import print4 from "@/assets/prints/print-4.jpg";
import print5 from "@/assets/prints/print-5.jpg";
import print6 from "@/assets/prints/print-6.jpg";
import print7 from "@/assets/prints/print-7.jpg";
import print8 from "@/assets/prints/print-8.jpg";
import print9 from "@/assets/prints/print-9.jpg";
import print10 from "@/assets/prints/print-10.png";

const placeholders = [
  { type: "WhatsApp · Reserva confirmada", subtitle: "Pousada — Litoral SP", img: print1 },
  { type: "WhatsApp · Reserva confirmada", subtitle: "Chalé — Serra Gaúcha", img: print2 },
  { type: "WhatsApp · Reserva confirmada", subtitle: "Casa de temporada — MG", img: print3 },
  { type: "WhatsApp · Reserva confirmada", subtitle: "Pousada — Litoral RJ", img: print4 },
  { type: "WhatsApp · Reserva confirmada", subtitle: "Flat — Nordeste", img: print5 },
  { type: "WhatsApp · Reserva confirmada", subtitle: "Chalé — Serra Catarinense", img: print6 },
  { type: "WhatsApp · Reserva confirmada", subtitle: "Pousada — Costa Verde", img: print7 },
  { type: "WhatsApp · Reserva confirmada", subtitle: "Casa — Chapada dos Veadeiros", img: print8 },
  { type: "WhatsApp · Reserva confirmada", subtitle: "Pousada — Litoral Sul", img: print9 },
  { type: "WhatsApp · Pagamento confirmado", subtitle: "Village — Nordeste", img: print10 },
];

// Distribute cards into 4 columns: 3-3-2-2
const columns = [
  [placeholders[0], placeholders[1], placeholders[2]],
  [placeholders[3], placeholders[4], placeholders[5]],
  [placeholders[6], placeholders[7]],
  [placeholders[8], placeholders[9]],
];

const columnOffsets = [0, 64, 28, 80];

const Card = ({ item, delay }: { item: typeof placeholders[0]; delay: number }) => (
  <div
    className="landing-card reveal overflow-hidden"
    style={{ transitionDelay: `${delay}s` }}
  >
    <div className="flex items-center gap-2 px-3 py-2" style={{ borderBottom: "1px solid rgba(200,148,58,0.1)" }}>
      <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
      <span className="text-night/50 text-[0.68rem] font-medium">{item.type}</span>
    </div>
    <div className="w-full overflow-hidden">
      <img
        src={item.img}
        alt={item.subtitle}
        className="w-full h-auto object-cover"
        loading="lazy"
      />
    </div>
    <div className="px-3 py-2" style={{ borderTop: "1px solid rgba(200,148,58,0.1)" }}>
      <p className="text-night/45 text-[0.68rem]">{item.subtitle}</p>
    </div>
  </div>
);

const ResultsSection = () => {
  let globalIndex = 0;

  return (
    <section style={{ background: "#EAE3CF", padding: "96px 28px" }}>
      <div className="max-w-[1000px] mx-auto">
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

        {/* Desktop: 4 columns masonry */}
        <div className="hidden lg:flex gap-4 justify-center">
          {columns.map((col, colIdx) => (
            <div key={colIdx} className="flex-1 max-w-[230px] flex flex-col gap-4" style={{ paddingTop: columnOffsets[colIdx] }}>
              {col.map((item) => {
                const idx = globalIndex++;
                return <Card key={idx} item={item} delay={(idx + 1) * 0.05} />;
              })}
            </div>
          ))}
        </div>

        {/* Tablet: 2 columns */}
        <div className="hidden sm:grid lg:hidden grid-cols-2 gap-4">
          {placeholders.map((item, i) => (
            <Card key={i} item={item} delay={(i + 1) * 0.05} />
          ))}
        </div>

        {/* Mobile: 1 column */}
        <div className="grid sm:hidden grid-cols-1 gap-4">
          {placeholders.map((item, i) => (
            <Card key={i} item={item} delay={(i + 1) * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
