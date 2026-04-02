const rows = [
  ["Depende de feriados para faturar", "Vende bem em fins de semana comuns"],
  ["Improvisa campanhas de última hora", "Cria campanhas com antecedência"],
  ["Baixa preço para tentar vender", "Vende com margem e posicionamento"],
  ["Não sabe o que ou quando divulgar", "Tem calendário e roteiro prontos"],
  ["Vive em alerta toda quinta-feira", "Opera com clareza e previsibilidade"],
  ["Vende por acaso, não por estratégia", "Transforma presença em reserva"],
];

const ComparisonTable = () => {
  return (
    <section style={{ background: "#F2EDE0", padding: "96px 28px" }}>
      <div className="max-w-[840px] mx-auto">
        <div className="reveal text-center mb-14">
          <div className="label-text mb-3.5">Antes e depois</div>
          <h2 className="font-heading text-[clamp(1.9rem,4vw,3.3rem)] text-night">
            O que muda com o<br />
            <em className="text-ochre">Check-in Lotado</em>
          </h2>
        </div>
        <div className="reveal border rounded-lg overflow-hidden" style={{ borderColor: "rgba(200,148,58,0.15)" }}>
          {/* Header */}
          <div className="cmp-row" style={{ background: "rgba(200,148,58,0.06)" }}>
            <div className="cmp-cell">
              <span className="font-label text-night/45 text-[0.68rem] font-bold tracking-[0.1em] uppercase">
                ✕ &nbsp;Sem o método
              </span>
            </div>
            <div className="cmp-cell" style={{ borderLeft: "1px solid rgba(200,148,58,0.15)" }}>
              <span className="font-label text-ochre text-[0.68rem] font-bold tracking-[0.1em] uppercase">
                ✓ &nbsp;Com o Check-in Lotado
              </span>
            </div>
          </div>
          {/* Rows */}
          {rows.map(([bad, good], i) => (
            <div key={i} className={`cmp-row ${i === rows.length - 1 ? "!border-b-0" : ""}`}>
              <div className="cmp-cell text-night/[0.38]">✕ &nbsp;{bad}</div>
              <div className="cmp-cell text-night" style={{ borderLeft: "1px solid rgba(200,148,58,0.1)" }}>
                ✓ &nbsp;{good}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
