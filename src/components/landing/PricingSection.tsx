import { Check, BookOpen, Users, CalendarDays } from "lucide-react";

const KIWIFY_URL = "https://pay.kiwify.com.br/Y613pR3";

const group1 = [
  "Como criar uma estratégia de marketing",
  "Como fazer anúncios virais",
  "Como trazer pessoas para sua hospedagem por tráfego pago",
  "Como vender por WhatsApp",
  "Como transformar seu Instagram em uma máquina de vendas",
  "Como fazer seu website premium",
];

const group2 = [
  "Exemplos reais de hospedagens que aplicaram",
  "Apostilas e materiais complementares",
  "Desafios práticos para aplicar no seu negócio",
  "10 GPT's treinados para fazer por você",
];

const group3 = [
  "Suporte via WhatsApp",
  "Atualizações de conteúdo incluídas",
  "Garantia incondicional de 7 dias",
];

const PricingSection = () => {
  return (
    <section id="comprar" style={{ background: "#080706" }} className="py-10 sm:py-16 px-4 sm:px-7">
      <div className="max-w-[680px] mx-auto text-center">
        <div className="reveal">
          <div className="label-text text-night mb-3">Aumente suas reservas em 30 dias</div>
          <h2 className="font-heading text-[1.5rem] sm:text-[clamp(1.9rem,4vw,3.3rem)] font-black text-night leading-[1.15] mb-3">
            Entre no<br />
            <span className="shimmer-text font-extrabold">Check-in Lotado</span>
          </h2>
          <p className="text-night text-[0.9rem] sm:text-lg leading-[1.72] mb-8 sm:mb-12">
            Entre no checkin lotado e aprenda uma forma mais estratégica de vender na sua hospedagem
          </p>
        </div>

        <div className="reveal p-5 sm:p-10 mb-5 sm:mb-6 rounded-xl text-left" style={{ background: "rgba(234,227,207,0.07)", border: "1px solid rgba(200,148,58,0.2)" }}>
          {/* Group 1 */}
          <div className="mb-6">
            <div className="flex items-center gap-2.5 mb-4">
              <Check className="text-ochre flex-shrink-0" size={20} />
              <h3 className="font-heading font-bold text-night text-base sm:text-lg">Acesso completo ao método Check-in Lotado</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-2.5 sm:gap-3 pl-1">
              {group1.map((item, i) => (
                <div key={i} className="flex gap-2.5">
                  <CalendarDays className="text-ochre flex-shrink-0 mt-0.5" size={16} />
                  <span className="text-night text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="h-px w-full bg-ochre/20 mb-6" />

          {/* Group 2 */}
          <div className="mb-6">
            <div className="flex items-center gap-2.5 mb-4">
              <BookOpen className="text-ochre flex-shrink-0" size={20} />
              <h3 className="font-heading font-bold text-night text-base sm:text-lg">Acesso imediato ao curso e materiais complementares</h3>
            </div>
            <div className="flex flex-col gap-2.5 pl-1">
              {group2.map((item, i) => (
                <div key={i} className="flex gap-2.5">
                  <span className="text-ochre flex-shrink-0 text-sm mt-0.5">✓</span>
                  <span className="text-night text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="h-px w-full bg-ochre/20 mb-6" />

          {/* Group 3 */}
          <div className="mb-8">
            <div className="flex items-center gap-2.5 mb-4">
              <Users className="text-ochre flex-shrink-0" size={20} />
              <h3 className="font-heading font-bold text-night text-base sm:text-lg">Acesso a comunidade e suporte</h3>
            </div>
            <div className="flex flex-col gap-2.5 pl-1">
              {group3.map((item, i) => (
                <div key={i} className="flex gap-2.5">
                  <span className="text-ochre flex-shrink-0 text-sm mt-0.5">✓</span>
                  <span className="text-night text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={() => { window.open(KIWIFY_URL, "_blank"); }}
            className="btn-cta btn-cta-lg btn-cta-full mx-auto"
          >
            <span>QUERO ENTRAR AGORA →</span>
          </button>
        </div>

        {/* Guarantee */}
        <div className="reveal flex flex-col sm:flex-row items-center gap-3 sm:gap-6 p-4 sm:p-6 border border-ochre/20 rounded-lg text-left text-center sm:text-left" style={{ background: "rgba(234,227,207,0.05)" }}>
          <div className="g-circle">
            <span className="text-ochre font-label font-extrabold text-[1.8rem] leading-none">7</span>
            <span className="text-ochre font-label font-bold text-[0.62rem] tracking-[0.1em]">DIAS</span>
            <span className="text-night/50 text-[0.58rem] tracking-[0.05em] mt-[3px]">GARANTIA</span>
          </div>
          <div>
            <h3 className="font-semibold text-night mb-1.5 sm:mb-2 text-sm sm:text-base">Risco zero por 7 dias</h3>
            <p className="text-night text-sm sm:text-base leading-[1.7]">
              Entre, assista e avalie com total tranquilidade. Se perceber que não faz sentido para o seu momento, peça reembolso dentro do prazo. Sem burocracia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
