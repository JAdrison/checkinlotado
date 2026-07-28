const cards = [
  { t: "Dependência de feriados", d: "A agenda enche em datas comemorativas e esvazia no resto do ano." },
  { t: "Dias de semana vazios", d: "Segunda a quinta com pouca ocupação e faturamento irregular." },
  { t: "Promoções sem planejamento", d: "Descontos improvisados quando a data já está próxima." },
  { t: "Comunicação genérica", d: "Mensagem que fala com todo mundo e não convence ninguém." },
  { t: "Tráfego sem estrutura comercial", d: "Anúncios que geram visita, mas não geram reserva." },
  { t: "Contatos que não reservam", d: "Curiosos entram no WhatsApp e a conversa não vira reserva." },
  { t: "Falta de calendário", d: "Ações soltas, sem visão do próximo trimestre." },
  { t: "Dependência das OTAs", d: "Reservas concentradas em Booking/Airbnb e comissão alta." },
];

const ProblemSection = () => {
  return (
    <section style={{ background: "#080706" }} className="py-20 sm:py-28 px-4 sm:px-7">
      <div className="max-w-[900px] mx-auto flex flex-col items-center gap-10 sm:gap-14">
        <div className="reveal text-center">
          <div className="label-text mb-3">O PROBLEMA NEM SEMPRE É FALTA DE PROCURA</div>
          <h2 className="font-heading text-[1.75rem] sm:text-[clamp(1.9rem,4vw,3.3rem)] font-black text-night leading-[1.15] mb-4 sm:mb-5">
            Sua hospedagem não precisa apenas de <em className="text-ochre font-extrabold not-italic">mais divulgação</em>.
          </h2>
          <p className="text-night/85 text-[0.95rem] sm:text-lg leading-relaxed max-w-[680px] mx-auto">
            Muitas hospedagens lotam em feriados, mas continuam com dias vazios durante o restante do calendário. Quando percebem o problema, fazem uma promoção de última hora, reduzem o preço e esperam que uma publicação resolva.
          </p>
        </div>

        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full">
          {cards.map((c) => (
            <div
              key={c.t}
              className="p-4 sm:p-5 rounded-sm text-left"
              style={{ background: "rgba(23,21,18,0.85)", border: "1px solid rgba(201,151,62,0.18)" }}
            >
              <h3 className="font-heading text-night text-[0.95rem] sm:text-[1.05rem] mb-1 leading-tight">{c.t}</h3>
              <p className="text-night/65 text-[0.78rem] sm:text-[0.85rem] leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>

        <div className="reveal text-center max-w-[720px] mx-auto">
          <p className="text-night/85 text-sm sm:text-base leading-relaxed">
            O problema nem sempre é falta de hóspedes. Muitas vezes, falta uma <strong className="text-ochre">estrutura para planejar, atrair, atender e converter</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
