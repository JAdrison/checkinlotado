import { AlertTriangle } from "lucide-react";
import { scrollToSection } from "@/lib/scrollToSection";
import reformaImg from "@/assets/reforma-tributaria.webp";

const OTAComparisonSection = () => {
  
  return (
    <section className="relative py-10 sm:py-16 px-4 sm:px-7" style={{ background: "#11100E" }}>
      <div className="max-w-[1100px] mx-auto">
        {/* Headline */}
        <div className="reveal text-center mb-10 sm:mb-16">
          <div className="label-text mb-3 sm:mb-4">
            Reservas diretas e OTAs
          </div>
          <h2 className="font-heading text-[1.5rem] sm:text-[clamp(1.9rem,4vw,3.3rem)] font-black leading-[1.15] text-night">
            Não se trata de abandonar as plataformas.
            <br />
            <em className="text-ochre font-extrabold not-italic">Trata-se de construir um canal próprio.</em>
          </h2>
          <p className="text-night/70 text-sm sm:text-base max-w-[720px] mx-auto mt-5 leading-relaxed">
            As OTAs podem gerar demanda, mas reservas diretas reduzem comissões e dão mais controle. O objetivo é equilibrar os canais — e não depender de apenas um.
          </p>
        </div>

        {/* Subheadline — 3 fatos + imagem lado a lado */}
        <div className="reveal grid lg:grid-cols-2 gap-8 sm:gap-10 items-center mb-10 sm:mb-16">
          <div className="rounded-2xl overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.08)]">
            <img src={reformaImg} alt="Reportagem sobre Reforma Tributária 2026 — nova carga tributária para locação" className="w-full h-auto" width={600} height={400} loading="lazy" />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-black text-night">
                3 coisas que todo dono de pousada precisa saber:
              </h3>
              <p className="text-night/60 text-base mt-2">
                Antes de precificar a próxima temporada
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <span className="w-9 sm:w-11 h-9 sm:h-11 shrink-0 rounded-full bg-ochre/10 text-ochre flex items-center justify-center font-bold text-sm sm:text-base">01</span>
                <div>
                  <p className="font-heading text-base sm:text-lg font-bold text-night">Plataformas de hospedagens cobra 16% de comissão por reserva</p>
                  <p className="text-night/60 text-sm sm:text-base">Direto do valor da diária, antes de qualquer imposto</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="w-9 sm:w-11 h-9 sm:h-11 shrink-0 rounded-full bg-ochre/10 text-ochre flex items-center justify-center font-bold text-sm sm:text-base">02</span>
                <div>
                  <p className="font-heading text-base sm:text-lg font-bold text-night">Nota fiscal será obrigatória a partir de 2026</p>
                  <p className="text-night/60 text-sm sm:text-base">Reforma Tributária equiparou temporada a hotelaria</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="w-9 sm:w-11 h-9 sm:h-11 shrink-0 rounded-full bg-ochre/10 text-ochre flex items-center justify-center font-bold text-sm sm:text-base">03</span>
                <div>
                  <p className="font-heading text-base sm:text-lg font-bold text-night">Impostos vão em média 8% a mais da diária</p>
                  <p className="text-night/60 text-sm sm:text-base">ISS municipal + novos tributos federais (IBS e CBS)</p>
                </div>
              </div>
            </div>

            <p className="text-ochre font-heading text-lg font-bold">
              → A conta precisa ser refeita agora.
            </p>
          </div>
        </div>


        {/* Bottom text */}
        <div className="reveal text-center mt-14">
          <p className="text-base md:text-lg text-night/70">
            <strong className="text-ochre">Com o método, você constrói um canal próprio</strong> — sem abandonar as plataformas.
          </p>
        </div>

        {/* CTA */}
        <div className="reveal text-center mt-10">
          <button onClick={() => scrollToSection("comprar")} className="btn-cta btn-cta-lg w-full sm:w-auto">
            <span className="text-[0.75rem] sm:text-base">QUERO APLICAR O CHECK-IN LOTADO →</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OTAComparisonSection;
