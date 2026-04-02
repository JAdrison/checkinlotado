import PhaseCards from "./PhaseCards";

const ModulesSection = () => {
  return (
    <section style={{ background: "#EAE3CF", overflow: "hidden" }}>
      <div className="mx-auto" style={{ padding: "96px 28px" }}>
        <div className="reveal text-center mb-16">
          <div className="label-text mb-3.5">Método em 5 fases</div>
          <h2 className="font-heading text-[clamp(1.9rem,4vw,3.3rem)] text-night">
            O plano detalhado que vai fazer a sua hospedagem{" "}
            <em className="shimmer-text">decolar</em>
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
