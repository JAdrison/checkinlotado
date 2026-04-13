const items = [
  "FINS DE SEMANA LOTADOS",
  "SEM DEPENDER DE FERIADO",
  "VENDER SEM BAIXAR PREÇO",
  "FINS DE SEMANA LOTADOS",
  "SEM DEPENDER DE FERIADO",
  "VENDER SEM BAIXAR PREÇO",
];

const Ticker = () => {
  return (
    <div className="ticker-wrap" style={{ maxWidth: "100vw" }}>
      <div className="ticker-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="ticker-item">
            {item} ◆
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
