import { useState } from "react";
import { AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import reformaImg from "@/assets/reforma-tributaria.png";
import { Slider } from "@/components/ui/slider";

const fmt = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0, maximumFractionDigits: 0 });

const OTAComparisonSection = () => {
  const [dailyRate, setDailyRate] = useState(300);
  const [accommodations, setAccommodations] = useState(6);

  const revenue = dailyRate * accommodations;
  const platformFee = revenue * 0.16;
  const taxFee = revenue * 0.08;
  const totalLoss = platformFee + taxFee;
  const netPerDay = revenue - totalLoss;
  const annualLoss = totalLoss * 120;

  return (
    <section className="relative py-10 sm:py-16 px-4 sm:px-7" style={{ background: "#FFFFFF" }}>
      <div className="max-w-[1100px] mx-auto">
        {/* Headline */}
        <div className="reveal text-center mb-10 sm:mb-16">
          <div className="label-text text-ochre mb-3 sm:mb-4">
            A conta que ninguém faz
          </div>
          <h2 className="font-heading text-[1.5rem] sm:text-[clamp(1.9rem,4vw,3.3rem)] font-black leading-[1.15] text-night">
            Quanto custa depender
            <br />
            <span className="shimmer-text font-extrabold">só de Plataformas</span>?
          </h2>
        </div>

        {/* Subheadline — 3 fatos + imagem lado a lado */}
        <div className="reveal grid lg:grid-cols-2 gap-8 sm:gap-10 items-center mb-10 sm:mb-16">
          <div className="rounded-2xl overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.08)]">
            <img src={reformaImg} alt="Reportagem sobre Reforma Tributária 2026 — nova carga tributária para locação" className="w-full h-auto" />
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

        {/* Calculadora interativa */}
        <div className="max-w-[700px] mx-auto">
          <div className="reveal rounded-3xl p-8 md:p-10 border border-ochre/20 shadow-[0_4px_32px_rgba(0,0,0,0.08)]" style={{ background: "linear-gradient(180deg, #FAF8F4 0%, #FFFFFF 100%)" }}>
            <h3 className="font-heading text-xl md:text-2xl font-black text-night text-center mb-8">
              Simule o <span className="text-ochre">seu potencial de ganho</span>
            </h3>

            {/* Inputs */}
            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              {/* Diária */}
              <div className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <label className="font-heading text-sm font-bold text-night/70 uppercase tracking-wide">Valor da diária</label>
                  <span className="font-heading text-2xl font-black text-night transition-all duration-300">{fmt(dailyRate)}</span>
                </div>
                <Slider
                  value={[dailyRate]}
                  onValueChange={(v) => setDailyRate(v[0])}
                  min={100}
                  max={5000}
                  step={50}
                  className="[&_[role=slider]]:bg-ochre [&_[role=slider]]:border-ochre [&_[role=slider]]:w-6 [&_[role=slider]]:h-6 [&_.bg-primary]:bg-ochre [&_[data-orientation=horizontal]]:h-3"
                />
                <div className="flex justify-between text-xs text-night/40">
                  <span>R$ 100</span>
                  <span>R$ 5.000</span>
                </div>
              </div>

              {/* Hospedagens */}
              <div className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <label className="font-heading text-sm font-bold text-night/70 uppercase tracking-wide">Hospedagens</label>
                  <span className="font-heading text-2xl font-black text-night transition-all duration-300">{accommodations}</span>
                </div>
                <Slider
                  value={[accommodations]}
                  onValueChange={(v) => setAccommodations(v[0])}
                  min={1}
                  max={20}
                  step={1}
                  className="[&_[role=slider]]:bg-ochre [&_[role=slider]]:border-ochre [&_[role=slider]]:w-6 [&_[role=slider]]:h-6 [&_.bg-primary]:bg-ochre [&_[data-orientation=horizontal]]:h-3"
                />
                <div className="flex justify-between text-xs text-night/40">
                  <span>1</span>
                  <span>20</span>
                </div>
              </div>
            </div>

            {/* Breakdown */}
            <div className="space-y-0">
              <div className="flex justify-between items-center py-4 border-b border-night/5">
                <span className="flex items-center gap-2 text-night/70 text-base">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                  Faturamento por reserva
                </span>
                <span className="font-heading text-xl text-night transition-all duration-300">{fmt(revenue)}</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-night/5">
                <span className="flex items-center gap-2 text-night/70 text-base">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                  Comissão Plataforma (16%)
                </span>
                <span className="font-heading text-xl text-red-600 font-bold transition-all duration-300">− {fmt(platformFee)}</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-night/5">
                <span className="flex items-center gap-2 text-night/70 text-base">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                  Imposto NF (8%)
                </span>
                <span className="font-heading text-xl text-red-600 font-bold transition-all duration-300">− {fmt(taxFee)}</span>
              </div>

              {/* Perda por reserva */}
              <div className="flex justify-between items-center py-4 border-b border-night/5 bg-red-50/50 -mx-8 md:-mx-10 px-8 md:px-10">
                <span className="font-heading text-base font-bold text-red-700">A cada reserva você perde</span>
                <span className="font-heading text-xl text-red-600 font-black transition-all duration-300">− {fmt(totalLoss)}</span>
              </div>

              {/* Você recebe */}
              <div className="flex justify-between items-center py-4 bg-ochre/5 -mx-8 md:-mx-10 px-8 md:px-10 rounded-b-2xl">
                <span className="font-heading text-lg font-bold text-night">Você recebe por reserva</span>
                <span className="font-heading text-xl text-ochre font-black transition-all duration-300">{fmt(netPerDay)}</span>
              </div>
            </div>

            <div className="h-px w-full my-8 bg-night/10" />

            {/* Potencial de ganho anual */}
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
              <p className="font-heading text-base font-bold text-night/60 mb-1">Potencial de ganho</p>
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="font-heading text-[2.2rem] md:text-[3rem] text-emerald-600 font-black transition-all duration-300">
                  +{fmt(annualLoss)}/ano
                </span>
              </div>
              <p className="text-sm md:text-base text-night/50">
                10 diárias/mês × 12 meses × {fmt(totalLoss)} = <strong className="text-emerald-600">+{fmt(annualLoss)}/ano</strong> vendendo direto
              </p>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="reveal text-center mt-14">
          <p className="text-base md:text-lg text-night/50">
            <strong className="text-ochre">
              Com o método, você aprende a não depender mais.
            </strong>
          </p>
        </div>

        {/* CTA */}
        <div className="reveal text-center mt-10">
          <a href="#comprar" className="btn-cta btn-cta-lg">
            QUERO VENDER DIRETO →
          </a>
        </div>
      </div>
    </section>
  );
};

export default OTAComparisonSection;
