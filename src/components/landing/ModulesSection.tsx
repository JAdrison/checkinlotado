import { AnimatedText } from "@/components/ui/animated-text";
import { InteractiveImageAccordion } from "@/components/ui/interactive-image-accordion";

import module1 from "@/assets/module-1.jpg";
import module2 from "@/assets/module-2.jpg";
import module3 from "@/assets/module-3.jpg";
import module4 from "@/assets/module-4.jpg";
import module5 from "@/assets/module-5.jpg";

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
    title: "Criativos e Campanhas",
    desc: "Crie anúncios e posts que geram ação. Cronograma de divulgação e configuração da campanha.",
    imageUrl: module3,
  },
  {
    id: 4,
    phase: "Fase 04 · Módulo 4",
    title: "WhatsApp e Fechamento",
    desc: "Transforme contatos em reservas com scripts de persuasão, follow-up e processo eficiente.",
    imageUrl: module4,
  },
  {
    id: 5,
    phase: "Fase 05 · Módulo 5",
    title: "Otimização e Repetição",
    desc: "Analise, corrija e repita o ciclo. Transforme cada ação em aprendizado para a próxima campanha.",
    imageUrl: module5,
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
      </div>
    </section>
  );
};

export default ModulesSection;
