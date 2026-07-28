import logo from "@/assets/checkin-lotado-logo.png";

const stats = [
  { n: "+300", label: "Reservas confirmadas com o método" },
  { n: "8+", label: "Hospedagens acompanhadas" },
  { n: "10", label: "GPTs treinados para hotelaria" },
  { n: "90 dias", label: "De estruturação comercial" },
];

const Authority = () => {
  return (
    <section style={{ background: "#0B0908" }} className="py-14 sm:py-20 px-4 sm:px-7">
      <div className="max-w-[1100px] mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-center">
        <div className="reveal">
          <div className="relative rounded-sm p-8 sm:p-10 flex items-center justify-center" style={{ background: "#050505", border: "1px solid rgba(230,179,106,0.24)", aspectRatio: "1/1" }}>
            <img src={logo} alt="Check-in Lotado" className="w-full max-w-[240px] h-auto object-contain" />
            <div className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-sm" style={{ background: "#E6B36A" }}>
              <span className="text-[0.65rem] uppercase tracking-[0.24em] font-label font-bold text-cream">Autoridade</span>
            </div>
          </div>
        </div>

        <div className="reveal">
          <div className="label-text mb-3">Quem criou o método</div>
          <h2 className="font-heading text-[1.6rem] sm:text-[clamp(1.9rem,4vw,3rem)] text-night leading-[1.15] mb-5">
            Criado por quem trabalha com <em className="shimmer-text font-extrabold">hospedagens todos os dias</em>
          </h2>
          <p className="text-night/75 text-sm sm:text-base leading-relaxed mb-4">
            O Check-in Lotado nasceu da rotina prática de aplicar marketing, campanhas e atendimento em hotéis, pousadas, casas de temporada e chalés em todo o Brasil.
          </p>
          <p className="text-night/65 text-sm sm:text-base leading-relaxed mb-8">
            Cada módulo é resultado do que funciona em operação real — testado com hospedagens de perfis distintos, do litoral à serra.
          </p>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((s, i) => (
              <div key={i} className="border-l border-ochre/30 pl-4">
                <div className="font-heading text-ochre text-[1.6rem] sm:text-[2rem] leading-none mb-1.5">{s.n}</div>
                <div className="text-night/70 text-xs sm:text-sm leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;
