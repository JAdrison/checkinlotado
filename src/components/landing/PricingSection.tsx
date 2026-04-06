import { trackEvent } from "@/lib/meta-capi";

const KIWIFY_URL = "https://pay.kiwify.com.br/Y613pR3";

const benefits = [
  "Curso online gravado — acesso imediato",
  "Método Check-in Lotado completo",
  "Calendário comercial de 90 dias",
  "Suporte via WhatsApp",
  "Scripts de atendimento e fechamento",
  "10 GPTs treinados para hospedagens",
];

const PricingSection = () => {
  return (
    <section id="comprar" style={{ background: "#1A1208" }} className="py-10 sm:py-16 px-4 sm:px-7">
      <div className="max-w-[680px] mx-auto text-center">
        <div className="reveal">
          <div className="label-text text-cream-mid mb-3">Sua decisão</div>
          <h2 className="font-heading text-[1.5rem] sm:text-[clamp(1.9rem,4vw,3.3rem)] font-black text-cream leading-[1.15] mb-3">
            Entre no<br />
            <span className="shimmer-text font-extrabold">Check-in Lotado</span>
          </h2>
          <p className="text-cream-mid text-[0.9rem] sm:text-lg leading-[1.72] mb-8 sm:mb-12">
            Você não está comprando apenas aulas. Está adquirindo uma forma mais estratégica de vender sua hospedagem.
          </p>
        </div>

        <div className="price-box reveal p-5 sm:p-10 mb-5 sm:mb-6" style={{ background: "rgba(234,227,207,0.07)", border: "1px solid rgba(200,148,58,0.2)" }}>
          <div className="grid sm:grid-cols-2 gap-2.5 sm:gap-3 mb-8 sm:mb-10 text-left">
            {benefits.map((b, i) => (
              <div key={i} className="flex gap-2 sm:gap-2.5">
                <span className="text-ochre flex-shrink-0">✓</span>
                <span className="text-cream-mid text-sm sm:text-base">{b}</span>
              </div>
            ))}
          </div>

          <div className="h-px w-full bg-ochre/20 mb-8" />

          <div className="mb-6 sm:mb-8">
            <p className="text-cream-mid/60 text-xs sm:text-sm mb-1 line-through">De R$997</p>
            <div className="flex items-baseline justify-center gap-2 mt-2">
              <span className="text-ochre font-label font-bold text-xs sm:text-sm">POR</span>
              <span className="font-heading font-black text-[2rem] sm:text-[2.6rem] text-cream leading-none">
                R$497
              </span>
            </div>
            <p className="text-cream-mid/70 text-sm sm:text-base mt-2">
              ou <span className="font-semibold text-cream">12x de R$51,40</span>
            </p>
          </div>

          <a
            href={KIWIFY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("InitiateCheckout", { content_name: "Check-in Lotado", value: 51.40, currency: "BRL" })}
            className="btn-cta btn-cta-lg btn-cta-full mx-auto"
          >
            <span>QUERO ENTRAR AGORA →</span>
          </a>
        </div>

        {/* Guarantee */}
        <div className="reveal flex flex-col sm:flex-row items-center gap-3 sm:gap-6 p-4 sm:p-6 border border-ochre/20 rounded-lg text-left text-center sm:text-left" style={{ background: "rgba(234,227,207,0.05)" }}>
          <div className="g-circle">
            <span className="text-ochre font-label font-extrabold text-[1.8rem] leading-none">7</span>
            <span className="text-ochre font-label font-bold text-[0.62rem] tracking-[0.1em]">DIAS</span>
            <span className="text-cream-mid/50 text-[0.58rem] tracking-[0.05em] mt-[3px]">GARANTIA</span>
          </div>
          <div>
            <h3 className="font-semibold text-cream mb-1.5 sm:mb-2 text-sm sm:text-base">Risco zero por 7 dias</h3>
            <p className="text-cream-mid text-sm sm:text-base leading-[1.7]">
              Entre, assista e avalie com total tranquilidade. Se perceber que não faz sentido para o seu momento, peça reembolso dentro do prazo. Sem burocracia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
