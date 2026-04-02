import { useReveal } from "@/hooks/useReveal";

import Hero from "@/components/landing/Hero";
import Ticker from "@/components/landing/Ticker";
import Stats from "@/components/landing/Stats";
import ProblemSection from "@/components/landing/ProblemSection";
import ForWhom from "@/components/landing/ForWhom";
import ModulesSection from "@/components/landing/ModulesSection";
import ComparisonTable from "@/components/landing/ComparisonTable";
import AccordionSection from "@/components/landing/AccordionSection";
import Testimonials from "@/components/landing/Testimonials";
import ResultsSection from "@/components/landing/ResultsSection";
import GallerySection from "@/components/landing/GallerySection";
import PricingSection from "@/components/landing/PricingSection";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";


const objections = [
  { question: "Aqui só lota em feriado. Fora disso, não tem demanda.", answer: 'Se em algum momento enche, então a procura existe. Feriado não cria interesse do zero — apenas concentra atenção. Você está confundindo <strong style="color:#1A1208">ausência de procura espontânea</strong> com ausência de mercado. O método existe para ativar essa demanda que já existe.' },
  { question: "Já tentei promoção, já divulguei, e não adiantou.", answer: "Promoção aleatória não é estratégia. O método não ensina a \"postar mais\" — ensina análise de ocupação, definição de público, criativo estratégico, cronograma de disparos, campanha e fechamento. Isso é completamente diferente de simplesmente fazer promoção." },
  { question: "Meu público decide em cima da hora. Não adianta planejar.", answer: 'Mesmo quando o cliente fecha em cima da hora, a decisão raramente nasce ali. Público de decisão curta exige operação <strong style="color:#1A1208">pronta</strong> — não improviso. Justamente porque aparece de repente é que a rede precisa estar armada antes.' },
  { question: "Na minha região tem muita concorrência.", answer: "Concorrência alta não destrói venda — elimina amadorismo. Em mercados saturados, detalhe comercial é a linha que separa a hospedagem lembrada da ignorada." },
  { question: "Não sei se isso vai funcionar para a minha hospedagem.", answer: "O curso foi desenhado para pousadas, hospedagens de praia, casas de serra e flats com ocupação irregular. A comparação honesta é entre ter uma estrutura para agir melhor — ou continuar improvisando esperando resultado diferente." },
];

const faq = [
  { question: "Serve para qualquer tipo de hospedagem?", answer: "Sim. Pousadas, hotéis, chalés, flats e casas de temporada que querem aumentar ocupação com estratégia comercial." },
  { question: "Preciso entender de marketing para aplicar?", answer: "Não. O curso foi estruturado para ser prático e direto, mesmo para quem não domina marketing." },
  { question: "Em quanto tempo consigo começar a aplicar?", answer: "Desde as primeiras aulas, porque o conteúdo foi pensado para a rotina real de quem trabalha com hospedagem." },
  { question: "E se eu entrar e achar que não é para mim?", answer: "Você tem 7 dias de garantia para testar com total tranquilidade. Peça reembolso dentro do prazo, sem burocracia." },
];

const Index = () => {
  useReveal();

  return (
    <div className="min-h-screen">
      
      <Hero />
      <Ticker />
      <Stats />
      <ProblemSection />
      <ForWhom />
      <ModulesSection />
      <ComparisonTable />
      <Testimonials />
      <ResultsSection />
      <PricingSection />
      <AccordionSection
        bgColor="#F2EDE0"
        label="Perguntas frequentes"
        titleBefore="Ainda tem"
        titleHighlight="dúvidas?"
        items={[...objections, ...faq]}
      />
      <FinalCTA />
      <Footer />
      
    </div>
  );
};

export default Index;
