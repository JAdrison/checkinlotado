const stats = [
  { emoji: "🤖", title: "10 Agentes GPTs treinados", desc: "Eles vão te ajudar em todas as etapas da sua hospedagem." },
  { emoji: "🗓", title: "O passo a passo de 90 dias", desc: "Passo a passo completo para sua hospedagem alugar todos os finais de semana do mês em até 90 dias." },
  { emoji: "💬", title: "Suporte no Wapp ao vivo", desc: "Tire dúvidas com a equipe e siga a jornada com confiança." },
  { emoji: "✅", title: "Garantia de 7 dias", desc: "Reembolso garantido." },
];

const Stats = () => {
  return (
    <section style={{ background: "#F2EDE0", borderBottom: "1px solid rgba(200,148,58,0.1)" }} className="py-8 sm:py-10 px-4 sm:px-7">
      <div className="max-w-[1000px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((s, i) => (
          <div key={i} className="reveal text-center" style={{ transitionDelay: `${i * 0.08}s` }}>
            <span className="text-2xl sm:text-3xl block mb-2 sm:mb-3">{s.emoji}</span>
            <p className="font-semibold text-night text-sm sm:text-base mb-1">{s.title}</p>
            <p className="text-night/85 text-xs sm:text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
