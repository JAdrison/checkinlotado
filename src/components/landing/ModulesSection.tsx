import PhaseCards from "./PhaseCards";
import { AnimatedText } from "@/components/ui/animated-text";

const ModulesSection = () => {
  return (
    <section style={{ background: "#EAE3CF", overflow: "hidden" }}>
      <div className="mx-auto" style={{ padding: "96px 28px" }}>
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
            Baseado no processo usado pelos maiores hotéis e pousadas ao redor do mundo — uma metodologia que transforma uma operação complexa em passos simples e aplicáveis, para você sair do improviso e construir uma máquina de reservas previsível.
          </p>
        </div>
        <PhaseCards />
      </div>
    </section>
  );
};

export default ModulesSection;
