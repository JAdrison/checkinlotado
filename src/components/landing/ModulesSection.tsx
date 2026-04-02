import LearningChart from "./LearningChart";
import PhaseCards from "./PhaseCards";

const ModulesSection = () => {
  return (
    <section style={{ background: "#EAE3CF", padding: "96px 28px", overflow: "hidden" }}>
      <div className="max-w-[1100px] mx-auto">
        <div className="reveal text-center mb-14">
          <div className="label-text mb-3.5">Método em 5 fases</div>
          <h2 className="font-heading text-[clamp(1.9rem,4vw,3.3rem)] text-night">
            Sua trilha de aprendizado no{" "}
            <em className="text-ochre">Check-in Lotado</em>
          </h2>
        </div>

        <LearningChart />
        <PhaseCards />
      </div>
    </section>
  );
};

export default ModulesSection;
