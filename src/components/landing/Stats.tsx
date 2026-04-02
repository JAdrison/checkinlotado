const stats = [
  { emoji: "🤖", title: "10 Agentes GPTs treinados", desc: "Eles vão te ajudar em todas as etapas da sua hospedagem." },
  { emoji: "🗓", title: "Calendário de 90 dias", desc: "Pronto para aplicar." },
  { emoji: "💬", title: "Suporte no Wapp ao vivo", desc: "Tire dúvidas com a equipe e siga a jornada com confiança." },
  { emoji: "✅", title: "Garantia de 7 dias", desc: "Reembolso garantido." },
];

const Stats = () => {
  return (
    <section style={{ background: "#F2EDE0", padding: "56px 28px", borderBottom: "1px solid rgba(200,148,58,0.1)" }}>
      <div className="max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div key={i} className="reveal text-center" style={{ transitionDelay: `${i * 0.08}s` }}>
            <span className="text-3xl block mb-3">{s.emoji}</span>
            <p className="font-semibold text-night text-[0.9rem] mb-1">{s.title}</p>
            <p className="text-night/50 text-[0.78rem] leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
