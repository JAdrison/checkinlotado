import PhaseCards from "./PhaseCards";

const ModulesSection = () => {
  return (
    <section style={{ background: "#EAE3CF", overflow: "hidden" }}>
      <div className="mx-auto" style={{ padding: "96px 28px" }}>
        <div className="reveal text-center mb-16">
          <div className="label-text mb-3.5">Método em 5 fases</div>
          <h2 className="font-heading text-[clamp(1.9rem,4vw,3.3rem)] text-night">
            Sua trilha de aprendizado no{" "}
            <em className="shimmer-text">Check-in Lotado</em>
          </h2>
        </div>
        <PhaseCards />
      </div>
    </section>
  );
};

export default ModulesSection;
