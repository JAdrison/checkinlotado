import { AnimatedText } from "@/components/ui/animated-text";
import { InteractiveImageAccordion } from "@/components/ui/interactive-image-accordion";
import { Globe, Instagram, MapPin } from "lucide-react";

import module1 from "@/assets/module-1.jpg";
import module2 from "@/assets/module-2.jpg";
import module3 from "@/assets/module-3.jpg";
import module4 from "@/assets/module-4.jpg";
import module5 from "@/assets/module-5.jpg";
import module6 from "@/assets/module-6.jpg";

const modules = [
  {
    id: 1,
    phase: "Fase 01 · Módulo 1",
    title: "Diagnóstico e Posicionamento",
    desc: "Entenda o que impede sua hospedagem de vender. Avalie ocupação, precificação e oportunidades reais.",
    imageUrl: module1,
  },
  {
    id: 2,
    phase: "Fase 02 · Módulo 2",
    title: "Estratégia e Calendário Comercial",
    desc: "Monte um calendário de 90 dias. Saiba qual oferta criar, para qual público e em qual janela de tempo.",
    imageUrl: module2,
  },
  {
    id: 3,
    phase: "Fase 03 · Módulo 3",
    title: "Criativos Virais",
    desc: "Como fazer criativos que o seu público vai se interessar. Formatos, ganchos e referências que geram ação.",
    imageUrl: module3,
  },
  {
    id: 4,
    phase: "Fase 04 · Módulo 4",
    title: "Campanhas de Marketing e Anúncios",
    desc: "Configure e lance campanhas que geram reservas diretas. Segmentação, orçamento e otimização passo a passo.",
    imageUrl: module4,
  },
  {
    id: 5,
    phase: "Fase 05 · Módulo 5",
    title: "WhatsApp e Fechamento",
    desc: "Transforme contatos em reservas com scripts de persuasão, follow-up e processo eficiente.",
    imageUrl: module5,
  },
  {
    id: 6,
    phase: "Fase 06 · Módulo 6",
    title: "Otimização e Repetição",
    desc: "Analise, corrija e repita o ciclo. Transforme cada ação em aprendizado para a próxima campanha.",
    imageUrl: module6,
  },
];

const bonuses = [
  {
    icon: Globe,
    title: "Como criar seu website com inteligência artificial",
    desc: "Tenha um site profissional para sua hospedagem sem precisar de programador ou designer.",
  },
  {
    icon: Instagram,
    title: "Como organizar o perfil do Instagram para vender mais",
    desc: "Transforme seu perfil em uma vitrine que atrai e converte seguidores em hóspedes.",
  },
  {
    icon: MapPin,
    title: "Como configurar o Google Meu Negócio",
    desc: "Apareça nas buscas locais e no Google Maps para quem procura hospedagem na sua região.",
  },
];

const ModulesSection = () => {
  return (
    <section style={{ background: "#EAE3CF", overflow: "hidden" }}>
      <div className="mx-auto max-w-[1200px]" style={{ padding: "96px 28px" }}>
        <div className="reveal text-center mb-16">
          <AnimatedText
            text="Checkin Lotado"
            as="span"
            textClassName="font-label text-sm tracking-[0.22em] uppercase"
            underlineGradient="from-ochre via-ochre-light to-ochre"
            underlineHeight="h-0.5"
            underlineOffset="-bottom-1"
            duration={0.08}
            delay={0.05}
            className="mb-3.5"
          />
          <h2 className="font-heading text-[clamp(1.9rem,4vw,3.3rem)] text-night leading-[1.15] mt-4">
            O plano detalhado que vai fazer a sua<br />
            <em className="shimmer-text">hospedagem decolar</em>
          </h2>
          <p className="text-night/80 text-lg max-w-[640px] mx-auto mt-5 leading-relaxed">
            Uma metodologia que transforma uma operação complexa em passos simples e aplicáveis.
          </p>
        </div>

        <div className="reveal">
          <InteractiveImageAccordion items={modules} />
        </div>

        {/* Bônus Exclusivos */}
        <div className="reveal mt-20">
          <div className="text-center mb-10">
            <span className="font-label text-sm tracking-[0.22em] uppercase text-ochre">
              Bônus Exclusivos
            </span>
            <h3 className="font-heading text-[clamp(1.4rem,3vw,2.2rem)] text-night leading-[1.2] mt-3">
              Você ainda leva <em className="shimmer-text">3 bônus</em> para acelerar seus resultados
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bonuses.map((bonus, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.06)] border border-night/5"
              >
                <div className="w-12 h-12 rounded-xl bg-ochre/10 flex items-center justify-center mb-5">
                  <bonus.icon className="w-6 h-6 text-ochre" />
                </div>
                <h4 className="font-heading text-night text-lg leading-snug">{bonus.title}</h4>
                <p className="text-night/60 text-sm leading-relaxed mt-3">{bonus.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
