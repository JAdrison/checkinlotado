import { useEffect, lazy, Suspense } from "react";
import { useReveal } from "@/hooks/useReveal";
import { CHECKIN_PRODUCT_DATA, trackEvent } from "@/lib/meta-capi";

import Hero from "@/components/landing/Hero";
import BenefitsStrip from "@/components/landing/BenefitsStrip";

const ProblemSection = lazy(() => import("@/components/landing/ProblemSection"));
const PerspectiveShift = lazy(() => import("@/components/landing/PerspectiveShift"));
const WhatIsSection = lazy(() => import("@/components/landing/WhatIsSection"));
const StepsSection = lazy(() => import("@/components/landing/StepsSection"));
const ForWhom = lazy(() => import("@/components/landing/ForWhom"));
const ModulesSection = lazy(() => import("@/components/landing/ModulesSection"));
const WhatYouReceive = lazy(() => import("@/components/landing/WhatYouReceive"));
const BeforeAfter = lazy(() => import("@/components/landing/BeforeAfter"));
const ResultsSection = lazy(() => import("@/components/landing/ResultsSection"));
const VideoCase = lazy(() => import("@/components/landing/VideoCase"));
const Testimonials = lazy(() => import("@/components/landing/Testimonials"));
const OTAComparisonSection = lazy(() => import("@/components/landing/OTAComparisonSection"));
const Authority = lazy(() => import("@/components/landing/Authority"));
const PricingSection = lazy(() => import("@/components/landing/PricingSection"));
const GuaranteeSection = lazy(() => import("@/components/landing/GuaranteeSection"));
const AccordionSection = lazy(() => import("@/components/landing/AccordionSection"));
const FinalCTA = lazy(() => import("@/components/landing/FinalCTA"));
const Footer = lazy(() => import("@/components/landing/Footer"));

const faq = [
  // Sobre o método
  { question: "O método serve para uma hospedagem pequena?", answer: "Sim. O conteúdo pode ser adaptado para hotéis, pousadas, chalés, flats e casas de temporada de diferentes tamanhos." },
  { question: "Funciona para casas de temporada?", answer: "Sim. As estratégias de calendário, campanhas e atendimento se aplicam diretamente à realidade de casas de temporada." },
  { question: "Preciso entender de marketing para aplicar?", answer: "Não. O método é passo a passo e foi pensado para quem cuida do próprio marketing sem experiência prévia." },
  // Sobre a aplicação
  { question: "Quando consigo começar a aplicar?", answer: "É possível começar a aplicar desde as primeiras aulas. O prazo e o resultado dependem do ponto de partida, da demanda e da execução." },
  { question: "Preciso investir em anúncios?", answer: "Você pode aplicar boa parte do método sem tráfego pago. Anúncios aceleram o resultado, mas não são obrigatórios para começar." },
  { question: "Preciso baixar o preço?", answer: "Não. O método trabalha planejamento, público, oferta, comunicação, campanhas e atendimento. O desconto pode ser uma ferramenta, mas não deve ser o único argumento." },
  { question: "Os resultados são garantidos?", answer: "Não existe garantia individual de ocupação ou faturamento. O resultado depende da execução, da estrutura e do mercado de cada hospedagem." },
  // Sobre a compra
  { question: "Como recebo o acesso?", answer: "Após a compra, o acesso é liberado imediatamente por e-mail, na área de membros do curso." },
  { question: "O pagamento é único?", answer: "Sim. Um pagamento único (à vista ou parcelado no cartão) libera o acesso completo ao método e aos bônus." },
  { question: "Existe garantia?", answer: "Sim. Você tem 7 dias de garantia para testar com total tranquilidade. Peça reembolso dentro do prazo, sem burocracia." },
];

const Index = () => {
  useReveal();

  useEffect(() => {
    void trackEvent("PageView");
    void trackEvent("ViewContent", CHECKIN_PRODUCT_DATA);
  }, []);

  return (
    <div className="min-h-screen" style={{ overflowX: "hidden" }}>
      {/* 1 — Hero / VSL (INTACTO) */}
      <Hero />

      {/* 2 — Faixa de validação rápida */}
      <BenefitsStrip />

      <Suspense fallback={null}>
        {/* 3 — Identificação do problema */}
        <ProblemSection />
        {/* 4 — Mudança de perspectiva */}
        <PerspectiveShift />
        {/* 5 — O que é o Check-in Lotado */}
        <WhatIsSection />
        {/* 6 — Como o método funciona */}
        <StepsSection />
        {/* 7 — Para quem é */}
        <ForWhom />
        {/* 8 — Conteúdo dos módulos */}
        <ModulesSection />
        {/* 9 — Ferramentas e materiais de implementação */}
        <WhatYouReceive />
        {/* 10 — Antes e depois */}
        <BeforeAfter />
        {/* 11 — Estudos de caso e resultados */}
        <VideoCase />
        <ResultsSection />
        <Testimonials />
        {/* 12 — Reservas diretas e OTAs */}
        <OTAComparisonSection />
        {/* 13 — Autoridade */}
        <Authority />
        {/* 14 — Oferta */}
        <PricingSection />
        {/* 15 — Garantia */}
        <GuaranteeSection />
        {/* 16 — Perguntas frequentes */}
        <AccordionSection
          bgColor="#050505"
          label="Perguntas frequentes"
          titleBefore="Ainda tem"
          titleHighlight="dúvidas?"
          items={faq}
        />
        {/* 17 — CTA final */}
        <FinalCTA />
        {/* 18 — Rodapé */}
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
