import { PlayCircle, Layers, FileText, Bot, ClipboardList, CalendarClock, MessageSquare, ShieldCheck, Gift } from "lucide-react";

const items = [
  { icon: PlayCircle, title: "Aulas em vídeo", desc: "Conteúdo direto e aplicável, gravado em alta qualidade." },
  { icon: Layers, title: "6 módulos principais", desc: "Do diagnóstico à otimização, na ordem certa." },
  { icon: FileText, title: "Materiais complementares", desc: "Apostilas, exemplos e referências prontas." },
  { icon: Bot, title: "10 GPT's treinados", desc: "Agentes que executam parte do trabalho por você." },
  { icon: ClipboardList, title: "Checklists e desafios", desc: "Passo a passo prático para aplicar no negócio." },
  { icon: CalendarClock, title: "Cronogramas comerciais", desc: "Calendário de 90 dias para orientar a operação." },
  { icon: MessageSquare, title: "Roteiros de atendimento", desc: "Scripts de WhatsApp para fechar mais reservas." },
  { icon: Gift, title: "3 bônus exclusivos", desc: "Website com IA, Instagram e Google Meu Negócio." },
  { icon: ShieldCheck, title: "Garantia de 7 dias", desc: "Risco zero para testar o método." },
];

const WhatYouReceive = () => {
  return (
    <section style={{ background: "#080706" }} className="py-14 sm:py-20 px-4 sm:px-7">
      <div className="max-w-[1200px] mx-auto">
        <div className="reveal text-center mb-10 sm:mb-14 max-w-[720px] mx-auto">
          <div className="label-text mb-3">O que o aluno recebe</div>
          <h2 className="font-heading text-[1.6rem] sm:text-[clamp(1.9rem,4vw,3.2rem)] text-night leading-[1.15]">
            Não é conteúdo para acumular. É uma <em className="shimmer-text font-extrabold">estrutura para aplicar</em>.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <div key={i} className="reveal p-5 sm:p-6 rounded-sm transition-all" style={{ background: "#11100E", border: "1px solid rgba(201,151,62,0.14)", transitionDelay: `${i * 0.04}s` }}>
                <div className="w-10 h-10 rounded-sm border border-ochre/40 flex items-center justify-center mb-4">
                  <Icon className="text-ochre" size={18} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-night text-[1.1rem] sm:text-[1.2rem] leading-tight mb-1.5">{it.title}</h3>
                <p className="text-night/65 text-sm leading-relaxed">{it.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatYouReceive;
