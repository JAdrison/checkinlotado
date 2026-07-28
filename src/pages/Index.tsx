import { useEffect, lazy, Suspense } from "react";
import { useReveal } from "@/hooks/useReveal";
import { trackEvent } from "@/lib/meta-capi";

import Hero from "@/components/landing/Hero";
import BenefitsStrip from "@/components/landing/BenefitsStrip";

const ProblemSection = lazy(() => import("@/components/landing/ProblemSection"));
const PerspectiveShift = lazy(() => import("@/components/landing/PerspectiveShift"));
const WhatIsSection = lazy(() => import("@/components/landing/WhatIsSection"));
const WhatYouReceive = lazy(() => import("@/components/landing/WhatYouReceive"));
const ForWhom = lazy(() => import("@/components/landing/ForWhom"));
const StepsSection = lazy(() => import("@/components/landing/StepsSection"));
const ModulesSection = lazy(() => import("@/components/landing/ModulesSection"));
const BeforeAfter = lazy(() => import("@/components/landing/BeforeAfter"));
const ResultsSection = lazy(() => import("@/components/landing/ResultsSection"));
const GallerySection = lazy(() => import("@/components/landing/GallerySection"));
const BonusMaterials = lazy(() => import("@/components/landing/BonusMaterials"));
const Authority = lazy(() => import("@/components/landing/Authority"));
const Testimonials = lazy(() => import("@/components/landing/Testimonials"));
const PricingSection = lazy(() => import("@/components/landing/PricingSection"));
const GuaranteeSection = lazy(() => import("@/components/landing/GuaranteeSection"));
const AccordionSection = lazy(() => import("@/components/landing/AccordionSection"));
const FinalCTA = lazy(() => import("@/components/landing/FinalCTA"));
const Footer = lazy(() => import("@/components/landing/Footer"));

const objections = [
  { question: "Aqui só lota em feriado. Fora disso, não tem demanda.", answer: 'Se em algum momento enche, então a procura existe. Feriado não cria interesse do zero — apenas concentra atenção. Você está confundindo <strong style="color:#C9973E">ausência de procura espontânea</strong> com ausência de mercado. O método existe para ativar essa demanda que já existe.' },
  { question: "Já tentei promoção, já divulguei, e não adiantou.", answer: "Promoção aleatória não é estratégia. O método não ensina a \"postar mais\" — ensina análise de ocupação, definição de público, criativo estratégico, cronograma de disparos, campanha e fechamento. Isso é completamente diferente de simplesmente fazer promoção." },
  { question: "Meu público decide em cima da hora. Não adianta planejar.", answer: 'Mesmo quando o cliente fecha em cima da hora, a decisão raramente nasce ali. Público de decisão curta exige operação <strong style="color:#C9973E">pronta</strong> — não improviso. Justamente porque aparece de repente é que a rede precisa estar armada antes.' },
  { question: "Na minha região tem muita concorrência.", answer: "Concorrência alta não destrói venda — elimina amadorismo. Em mercados saturados, detalhe comercial é a linha que separa a hospedagem lembrada da ignorada." },
  { question: "Não sei se isso vai funcionar para a minha hospedagem.", answer: "O curso foi desenhado para pousadas, hospedagens de praia, casas de serra e flats com ocupação irregular. A comparação honesta é entre ter uma estrutura para agir melhor — ou continuar improvisando esperando resultado diferente." },
];

const faq = [
  { question: "O método serve para uma hospedagem pequena?", answer: "Sim. O conteúdo pode ser adaptado para hotéis, pousadas, chalés, flats e casas de temporada de diferentes tamanhos." },
  { question: "Preciso baixar o preço para aplicar?", answer: "Não. O método trabalha planejamento, público, oferta, comunicação, campanhas e atendimento. O desconto pode ser uma ferramenta, mas não deve ser o único argumento." },
  { question: "O resultado acontece em 30 dias?", answer: "É possível começar a aplicar desde as primeiras aulas. O prazo e o resultado dependem do ponto de partida, da demanda, da estrutura e da execução de cada hospedagem." },
  { question: "O aumento de 80% é garantido?", answer: "Não. O percentual representa um potencial observado em aplicações e projetos. Não existe garantia individual de ocupação ou faturamento." },
  { question: "E se eu entrar e achar que não é para mim?", answer: "Você tem 7 dias de garantia para testar com total tranquilidade. Peça reembolso dentro do prazo, sem burocracia." },
];

const Index = () => {
  useReveal();

  useEffect(() => {
    trackEvent("PageView");
  }, []);

  return (
    <div className="min-h-screen" style={{ overflowX: "hidden" }}>
      {/* Seção 1 — VSL intacta */}
      <Hero />

      {/* Faixa rápida de benefícios */}
      <BenefitsStrip />

      <Suspense fallback={null}>
        {/* Identificação do problema */}
        <ProblemSection />
        {/* Mudança de perspectiva */}
        <PerspectiveShift />
        {/* O que é o Check-in Lotado */}
        <WhatIsSection />
        {/* O que o aluno recebe */}
        <WhatYouReceive />
        {/* Para quem é */}
        <ForWhom />
        {/* Como o método funciona */}
        <StepsSection />
        {/* Conteúdo dos módulos */}
        <ModulesSection />
        {/* Antes e depois */}
        <BeforeAfter />
        {/* Estudos de caso e resultados */}
        <ResultsSection />
        <GallerySection />
        {/* Materiais e bônus */}
        <BonusMaterials />
        {/* Autoridade */}
        <Authority />
        <Testimonials />
        {/* Oferta */}
        <PricingSection />
        {/* Garantia */}
        <GuaranteeSection />
        {/* FAQ */}
        <AccordionSection
          bgColor="#080706"
          label="Perguntas frequentes"
          titleBefore="Ainda tem"
          titleHighlight="dúvidas?"
          items={[...objections, ...faq]}
        />
        {/* CTA Final */}
        <FinalCTA />
        {/* Rodapé */}
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
