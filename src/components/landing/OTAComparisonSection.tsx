import { Check, X, AlertTriangle } from "lucide-react";

const otaDisadvantages = [
  "Comissão de 15% a 20% por reserva",
  "Sem acesso aos dados do hóspede",
  "Dependência total da plataforma",
  "Concorrência com milhares de anúncios",
  "Política de cancelamento imposta",
  "Você vira refém do algoritmo",
];

const methodAdvantages = [
  "Venda direta — 0% de comissão",
  "Base própria de hóspedes e contatos",
  "Controle total da comunicação",
  "Posicionamento premium e diferenciado",
  "Política comercial sob sua decisão",
  "Estratégia que funciona sem plataforma",
];

const OTAComparisonSection = () => {
  return (
    <section
      className="relative py-24 px-7 overflow-hidden"
      style={{ background: "#0F0C06" }}
    >
      {/* Background overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,12,6,0.95) 0%, rgba(26,18,8,0.85) 50%, rgba(15,12,6,0.95) 100%)",
        }}
      />

      <div className="relative z-10 max-w-[1000px] mx-auto">
        {/* Headline */}
        <div className="reveal text-center mb-16">
          <div
            className="label-text mb-4"
            style={{ color: "hsl(var(--ochre))" }}
          >
            A conta que ninguém faz
          </div>
          <h2
            className="font-heading text-[clamp(1.9rem,4vw,3.3rem)] leading-tight"
            style={{ color: "hsl(var(--cream))" }}
          >
            Quanto custa depender
            <br />
            do <span style={{ color: "#E74C3C" }}>Airbnb</span>?
          </h2>
        </div>

        {/* Simulação numérica */}
        <div
          className="reveal mx-auto max-w-[700px] rounded-2xl p-8 md:p-10 mb-16 text-center"
          style={{
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(200,148,58,0.15)",
          }}
        >
          <p
            className="text-sm md:text-base mb-6 tracking-wide uppercase"
            style={{ color: "hsl(var(--ochre))", opacity: 0.8 }}
          >
            Simulação com números reais
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 mb-8">
            <div>
              <div
                className="font-heading text-[2.2rem] md:text-[2.6rem]"
                style={{ color: "hsl(var(--cream))" }}
              >
                R$500
              </div>
              <p
                className="text-sm mt-1"
                style={{ color: "hsl(var(--cream))", opacity: 0.5 }}
              >
                diária média
              </p>
            </div>
            <div>
              <div
                className="font-heading text-[2.2rem] md:text-[2.6rem]"
                style={{ color: "hsl(var(--cream))" }}
              >
                16%
              </div>
              <p
                className="text-sm mt-1"
                style={{ color: "hsl(var(--cream))", opacity: 0.5 }}
              >
                comissão da OTA
              </p>
            </div>
            <div>
              <div
                className="font-heading text-[2.2rem] md:text-[2.6rem]"
                style={{ color: "hsl(var(--cream))" }}
              >
                300
              </div>
              <p
                className="text-sm mt-1"
                style={{ color: "hsl(var(--cream))", opacity: 0.5 }}
              >
                diárias/ano
              </p>
            </div>
          </div>

          <div
            className="h-px w-full mb-8"
            style={{ background: "rgba(200,148,58,0.2)" }}
          />

          <div className="flex items-center justify-center gap-3 mb-2">
            <AlertTriangle className="w-6 h-6" style={{ color: "#E74C3C" }} />
            <span
              className="font-heading text-[2.8rem] md:text-[3.5rem]"
              style={{ color: "#E74C3C" }}
            >
              −R$24.000
            </span>
          </div>
          <p
            className="text-base md:text-lg"
            style={{ color: "hsl(var(--cream))", opacity: 0.6 }}
          >
            perdidos por ano em comissões
          </p>
        </div>

        {/* Comparação lado a lado */}
        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* OTAs card */}
          <div
            className="rounded-2xl p-8"
            style={{
              background: "rgba(231,76,60,0.06)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(231,76,60,0.2)",
            }}
          >
            <h3
              className="font-heading text-xl mb-6"
              style={{ color: "#E74C3C" }}
            >
              Airbnb / Booking
            </h3>
            <ul className="space-y-0">
              {otaDisadvantages.map((item, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-3 py-3.5 ${
                    i < otaDisadvantages.length - 1
                      ? "border-b"
                      : ""
                  }`}
                  style={{ borderColor: "rgba(231,76,60,0.1)" }}
                >
                  <span
                    className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "rgba(231,76,60,0.15)" }}
                  >
                    <X
                      className="w-3 h-3"
                      style={{ color: "#E74C3C" }}
                      strokeWidth={3}
                    />
                  </span>
                  <span
                    className="text-[0.95rem] leading-snug"
                    style={{ color: "hsl(var(--cream))", opacity: 0.75 }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div
              className="mt-6 pt-5 text-center"
              style={{ borderTop: "1px solid rgba(231,76,60,0.15)" }}
            >
              <span
                className="font-heading text-2xl"
                style={{ color: "#E74C3C" }}
              >
                −R$24.000/ano
              </span>
              <p
                className="text-sm mt-1"
                style={{ color: "hsl(var(--cream))", opacity: 0.4 }}
              >
                saindo do seu faturamento
              </p>
            </div>
          </div>

          {/* Check-in Lotado card */}
          <div
            className="rounded-2xl p-8"
            style={{
              background: "rgba(200,148,58,0.06)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(200,148,58,0.2)",
            }}
          >
            <h3
              className="font-heading text-xl mb-6"
              style={{ color: "hsl(var(--ochre))" }}
            >
              Check-in Lotado
            </h3>
            <ul className="space-y-0">
              {methodAdvantages.map((item, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-3 py-3.5 ${
                    i < methodAdvantages.length - 1
                      ? "border-b"
                      : ""
                  }`}
                  style={{ borderColor: "rgba(200,148,58,0.1)" }}
                >
                  <span
                    className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "rgba(200,148,58,0.15)" }}
                  >
                    <Check
                      className="w-3 h-3"
                      style={{ color: "hsl(var(--ochre))" }}
                      strokeWidth={3}
                    />
                  </span>
                  <span
                    className="text-[0.95rem] leading-snug"
                    style={{ color: "hsl(var(--cream))", opacity: 0.85 }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div
              className="mt-6 pt-5 text-center"
              style={{ borderTop: "1px solid rgba(200,148,58,0.15)" }}
            >
              <span
                className="font-heading text-lg"
                style={{ color: "hsl(var(--ochre))" }}
              >
                Investimento único
              </span>
              <p
                className="text-sm mt-1"
                style={{ color: "hsl(var(--cream))", opacity: 0.4 }}
              >
                que se paga na primeira reserva direta
              </p>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="reveal text-center mt-14">
          <p
            className="text-base md:text-lg max-w-[600px] mx-auto leading-relaxed"
            style={{ color: "hsl(var(--cream))", opacity: 0.6 }}
          >
            Em 10 reservas diretas, você já recuperou o investimento.
            <br />
            <strong style={{ color: "hsl(var(--ochre))", opacity: 1 }}>
              Com o método, você aprende a não depender mais.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default OTAComparisonSection;
