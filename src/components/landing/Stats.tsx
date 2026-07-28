import { Bot, CalendarCheck, MessageCircle, ShieldCheck } from "lucide-react";

const stats = [
  { icon: Bot, title: "10 Agentes GPTs treinados", desc: "Eles vão te ajudar em todas as etapas da sua hospedagem." },
  { icon: CalendarCheck, title: "O passo a passo de 90 dias", desc: "Passo a passo completo para sua hospedagem alugar todos os finais de semana do mês em até 90 dias." },
  { icon: MessageCircle, title: "Suporte no Exclusivo", desc: "Tire dúvidas com a equipe e siga a jornada com confiança." },
  { icon: ShieldCheck, title: "Garantia de 7 dias", desc: "Reembolso garantido." },
];

const Stats = () => {
  return (
    <section style={{ background: "#11100E", borderBottom: "1px solid rgba(200,148,58,0.1)" }} className="py-8 sm:py-10 px-4 sm:px-7">
      <div className="max-w-[1000px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="reveal text-center" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="mx-auto mb-2 sm:mb-3 w-12 h-12 rounded-full bg-ochre flex items-center justify-center shadow-md">
                <Icon className="text-white" size={24} strokeWidth={2.2} />
              </div>
              <p className="font-semibold text-night text-sm sm:text-base mb-1">{s.title}</p>
              <p className="text-night/85 text-xs sm:text-sm leading-relaxed">{s.desc}</p>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
