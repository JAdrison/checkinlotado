import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section style={{ background: "#050505" }} className="py-12 sm:py-16 px-4 sm:px-7">
      <div className="max-w-[820px] mx-auto">
        <div className="reveal rounded-sm p-6 sm:p-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-center sm:text-left" style={{ background: "#0B0908", border: "1px solid rgba(230,179,106,0.32)" }}>
          <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-full flex items-center justify-center" style={{ background: "rgba(230,179,106,0.08)", border: "1px solid rgba(230,179,106,0.5)" }}>
            <ShieldCheck className="text-ochre" size={38} strokeWidth={1.4} />
          </div>
          <div>
            <div className="label-text mb-2">Garantia incondicional</div>
            <h3 className="font-heading text-night text-[1.4rem] sm:text-[1.8rem] leading-tight mb-2">
              Acesse por 7 dias e conheça o método com tranquilidade.
            </h3>
            <p className="text-night/70 text-sm sm:text-base leading-relaxed">
              Entre, assista e avalie sem pressão. Se perceber que não faz sentido para o seu momento, peça reembolso dentro do prazo — sem burocracia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
