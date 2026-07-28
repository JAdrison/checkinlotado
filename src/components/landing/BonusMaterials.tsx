import bonus1 from "@/assets/bonus-1.webp";
import bonus2 from "@/assets/bonus-2.webp";
import bonus3 from "@/assets/bonus-3.webp";

const bonuses = [
  {
    n: "01",
    img: bonus1,
    title: "Website premium com Inteligência Artificial",
    desc: "Tenha um site profissional para sua hospedagem sem precisar de programador ou designer.",
  },
  {
    n: "02",
    img: bonus2,
    title: "Instagram como máquina de vendas",
    desc: "Organize o perfil para transformar seguidores em hóspedes com um posicionamento comercial claro.",
  },
  {
    n: "03",
    img: bonus3,
    title: "Google Meu Negócio otimizado",
    desc: "Apareça nas buscas locais e no Google Maps para quem procura hospedagem na sua região.",
  },
];

const BonusMaterials = () => {
  return (
    <section style={{ background: "#080706" }} className="py-14 sm:py-20 px-4 sm:px-7">
      <div className="max-w-[1200px] mx-auto">
        <div className="reveal text-center mb-10 sm:mb-14 max-w-[720px] mx-auto">
          <div className="label-text mb-3">Materiais e bônus</div>
          <h2 className="font-heading text-[1.6rem] sm:text-[clamp(1.9rem,4vw,3.2rem)] text-night leading-[1.15]">
            Ferramentas que encurtam o caminho entre <em className="shimmer-text font-extrabold">aprender e aplicar</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
          {bonuses.map((b, i) => (
            <div key={i} className="reveal rounded-sm overflow-hidden flex flex-col" style={{ background: "#11100E", border: "1px solid rgba(201,151,62,0.18)", transitionDelay: `${i * 0.08}s` }}>
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <img src={b.img} alt={b.title} loading="lazy" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(8,7,6,0) 40%, rgba(8,7,6,0.75))" }} />
                <span className="absolute top-4 left-4 font-heading text-ochre text-[0.85rem] tracking-[0.24em] uppercase">Bônus {b.n}</span>
              </div>
              <div className="p-5 sm:p-6 flex-1 flex flex-col">
                <h3 className="font-heading text-night text-[1.15rem] sm:text-[1.3rem] leading-tight mb-2">{b.title}</h3>
                <p className="text-night/65 text-sm leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusMaterials;
