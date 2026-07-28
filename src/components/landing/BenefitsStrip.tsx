import { TrendingUp, CalendarRange, Megaphone, MessageSquareText } from "lucide-react";

const benefits = [
  { icon: TrendingUp, title: "Ocupação estratégica", desc: "Estrutura para vender fora de feriado." },
  { icon: CalendarRange, title: "Campanhas para datas vazias", desc: "Planejamento comercial de 90 dias." },
  { icon: Megaphone, title: "Marketing para hospedagens", desc: "Criativos, tráfego e Instagram guiados." },
  { icon: MessageSquareText, title: "Atendimento que fecha", desc: "Scripts e follow-up no WhatsApp." },
];

const BenefitsStrip = () => {
  return (
    <section style={{ background: "#0B0A08", borderTop: "1px solid rgba(201,151,62,0.14)", borderBottom: "1px solid rgba(201,151,62,0.14)" }} className="py-10 sm:py-14 px-4 sm:px-7">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} className="reveal flex flex-col items-start gap-3" style={{ transitionDelay: `${i * 0.06}s` }}>
                <div className="w-11 h-11 rounded-sm border border-ochre/40 flex items-center justify-center">
                  <Icon className="text-ochre" size={20} strokeWidth={1.4} />
                </div>
                <h3 className="font-heading text-night text-[1.05rem] sm:text-[1.25rem] leading-tight">{b.title}</h3>
                <p className="text-night/70 text-xs sm:text-sm leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsStrip;
