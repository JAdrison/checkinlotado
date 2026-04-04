import { AnimatedText } from "@/components/ui/animated-text";
import { InteractiveImageAccordion } from "@/components/ui/interactive-image-accordion";
import { Check } from "lucide-react";

import module1 from "@/assets/module-1.jpg";
import module2 from "@/assets/module-2.jpg";
import module3 from "@/assets/module-3.jpg";
import module4 from "@/assets/module-4.jpg";
import module5 from "@/assets/module-5.jpg";
import module6 from "@/assets/module-6.jpg";
import bonus1 from "@/assets/bonus-1.jpg";
import bonus2 from "@/assets/bonus-2.jpg";
import bonus3 from "@/assets/bonus-3.jpg";

const modules = [
  {
    id: 1,
    phase: "Fase 01",
    title: "Diagnóstico e Posicionamento",
    desc: "Entenda o que impede sua hospedagem de vender. Avalie ocupação, precificação e oportunidades reais.",
    imageUrl: module1,
  },
  {
    id: 2,
    phase: "Fase 02",
    title: "Estratégia e Calendário Comercial",
    desc: "Monte um calendário de 90 dias. Saiba qual oferta criar, para qual público e em qual janela de tempo.",
    imageUrl: module2,
  },
  {
    id: 3,
    phase: "Fase 03",
    title: "Criativos Virais",
    desc: "Como fazer criativos que o seu público vai se interessar. Formatos, ganchos e referências que geram ação.",
    imageUrl: module3,
  },
  {
    id: 4,
    phase: "Fase 04",
    title: "Campanhas de Marketing e Anúncios",
    desc: "Configure e lance campanhas que geram reservas diretas. Segmentação, orçamento e otimização passo a passo.",
    imageUrl: module5,
  },
  {
    id: 5,
    phase: "Fase 05",
    title: "WhatsApp e Fechamento",
    desc: "Transforme contatos em reservas com scripts de persuasão, follow-up e processo eficiente.",
    imageUrl: module4,
  },
  {
    id: 6,
    phase: "Fase 06",
    title: "Otimização e Repetição",
    desc: "Analise, corrija e repita o ciclo. Transforme cada ação em aprendizado para a próxima campanha.",
    imageUrl: module6,
  },
  {
    id: 7,
    phase: "+ Bônus 01",
    title: "Como criar seu website com inteligência artificial",
    desc: "Tenha um site profissional para sua hospedagem sem precisar de programador ou designer.",
    imageUrl: bonus1,
  },
  {
    id: 8,
    phase: "+ Bônus 02",
    title: "Como organizar o perfil do Instagram para vender mais",
    desc: "Transforme seu perfil em uma vitrine que atrai e converte seguidores em hóspedes.",
    imageUrl: bonus2,
  },
  {
    id: 9,
    phase: "+ Bônus 03",
    title: "Como configurar o Google Meu Negócio",
    desc: "Apareça nas buscas locais e no Google Maps para quem procura hospedagem na sua região.",
    imageUrl: bonus3,
  },
];

const benefits = [
  "Mais dinheiro mesmo em fins de semana comuns.",
  "Vender mais diárias sem precisar dar desconto toda hora.",
  "Parar de depender de feriadão para respirar financeiramente.",
  "Reduzir a ansiedade de chegar perto do fim de semana com baixa ocupação.",
  "Fazer a pousada girar melhor também na baixa temporada.",
  "Parar de depender só de Booking, Airbnb, Hoteis.com e outras OTAs.",
];

const ModulesSection = () => {
  return (
    <section style={{ background: "#EAE3CF", overflow: "hidden" }}>
      <div className="mx-auto max-w-[1200px] py-10 sm:py-16 px-4 sm:px-7">
        <div className="reveal text-center mb-10 sm:mb-16">
          <AnimatedText
            text="Checkin Lotado"
            as="span"
            textClassName="font-label text-xs sm:text-sm tracking-[0.22em] uppercase"
            underlineGradient="from-ochre via-ochre-light to-ochre"
            underlineHeight="h-0.5"
            underlineOffset="-bottom-1"
            duration={0.08}
            delay={0.05}
            className="mb-3.5"
          />
          <h2 className="font-heading text-[1.5rem] sm:text-[clamp(1.9rem,4vw,3.3rem)] font-black text-night leading-[1.15] mt-4">
            O plano detalhado que vai fazer a sua<br className="hidden sm:block" />
            <em className="shimmer-text font-extrabold"> hospedagem decolar</em>
          </h2>
          <p className="text-night/80 text-[0.9rem] sm:text-xl max-w-[640px] mx-auto mt-4 sm:mt-5 leading-relaxed">
            Uma metodologia que transforma uma operação complexa em passos simples e aplicáveis.
          </p>
        </div>

        <div className="reveal">
          <InteractiveImageAccordion items={modules} />
        </div>

        {/* O que você vai conquistar */}
        <div className="reveal mt-20">
          <div className="text-center mb-10">
            <span className="font-label text-sm tracking-[0.22em] uppercase text-ochre">
              Sua hospedagem com vendas previsíveis
            </span>
            <h3 className="font-heading text-[clamp(1.4rem,3vw,2.2rem)] text-night leading-[1.2] mt-3">
              Aplicando o Check-in Lotado, você vai conseguir:
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[800px] mx-auto">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white rounded-xl p-5 shadow-[0_2px_20px_rgba(0,0,0,0.06)] border border-night/5"
              >
                <div className="w-6 h-6 rounded-full bg-ochre/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-ochre" />
                </div>
                <p className="text-night/80 text-base leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
