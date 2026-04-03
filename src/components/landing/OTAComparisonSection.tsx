import { useState } from "react";
import { AlertTriangle } from "lucide-react";
import reformaImg from "@/assets/reforma-tributaria.png";
import { Slider } from "@/components/ui/slider";

const fmt = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0, maximumFractionDigits: 0 });

const OTAComparisonSection = () => {
  const [dailyRate, setDailyRate] = useState(300);
  const [rooms, setRooms] = useState(6);

  const revenue = dailyRate * rooms;
  const airbnbFee = revenue * 0.16;
  const taxFee = revenue * 0.08;
  const totalLoss = airbnbFee + taxFee;
  const netPerDay = revenue - totalLoss;
  const annualLoss = totalLoss * 200;

  return (
    <section className="relative py-16 px-7" style={{ background: "#FFFFFF" }}>
      <div className="max-w-[1100px] mx-auto">
        {/* Headline */}
        <div className="reveal text-center mb-16">
          <div className="label-text text-ochre mb-4">
            A conta que ninguém faz
          </div>
          <h2 className="font-heading text-[clamp(1.9rem,4vw,3.3rem)] font-black leading-[1.2] text-night">
            Quanto custa depender
            <br />
            <span className="shimmer-text font-extrabold">só de Plataformas</span>?
          </h2>
        </div>

        {/* Subheadline — 3 fatos + imagem lado a lado */}
        <div className="reveal grid lg:grid-cols-2 gap-10 items-center mb-16">
          <div className="rounded-2xl overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.08)]">
            <img src={reformaImg} alt="Reportagem sobre Reforma Tributária 2026 — nova carga tributária para locação" className="w-full h-auto" />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-black text-night">
                3 coisas que todo dono de pousada precisa saber:
              </h3>
              <p className="text-night/60 text-base mt-2">
                Antes de precificar a próxima temporada
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <span className="w-11 h-11 shrink-0 rounded-full bg-ochre/10 text-ochre flex items-center justify-center font-bold text-base">01</span>
                <div>
                  <p className="font-heading text-lg font-bold text-night">Plataformas de hospedagens cobra 16% de comissão por reserva</p>
                  <p className="text-night/60 text-base">Direto do valor da diária, antes de qualquer imposto</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="w-11 h-11 shrink-0 rounded-full bg-ochre/10 text-ochre flex items-center justify-center font-bold text-base">02</span>
                <div>
                  <p className="font-heading text-lg font-bold text-night">Nota fiscal será obrigatória a partir de 2026</p>
                  <p className="text-night/60 text-base">Reforma Tributária equiparou temporada a hotelaria</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="w-11 h-11 shrink-0 rounded-full bg-ochre/10 text-ochre flex items-center justify-center font-bold text-base">03</span>
                <div>
                  <p className="font-heading text-lg font-bold text-night">Impostos podem tirar até 20% a mais da diária</p>
                  <p className="text-night/60 text-base">ISS municipal + novos tributos federais (IBS e CBS)</p>
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
          <div className="reveal rounded-2xl p-8 md:p-10 bg-cream shadow-[0_2px_24px_rgba(0,0,0,0.07)]">
            <h3 className="font-heading text-xl md:text-2xl font-black text-night text-center mb-8">
              Simule a <span className="text-ochre">sua perda real</span>
            </h3>

            {/* Inputs */}
            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              {/* Diária */}
              <div className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <label className="font-heading text-sm font-bold text-night/70 uppercase tracking-wide">Valor da diária</label>
                  <span className="font-heading text-2xl font-black text-night">{fmt(dailyRate)}</span>
                </div>
                <Slider
                  value={[dailyRate]}
                  onValueChange={(v) => setDailyRate(v[0])}
                  min={100}
                  max={1500}
                  step={50}
                  className="[&_[role=slider]]:bg-ochre [&_[role=slider]]:border-ochre [&_.bg-primary]:bg-ochre"
                />
                <div className="flex justify-between text-xs text-night/40">
                  <span>R$ 100</span>
                  <span>R$ 1.500</span>
                </div>
              </div>

              {/* Quartos */}
              <div className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <label className="font-heading text-sm font-bold text-night/70 uppercase tracking-wide">Quartos</label>
                  <span className="font-heading text-2xl font-black text-night">{rooms}</span>
                </div>
                <Slider
                  value={[rooms]}
                  onValueChange={(v) => setRooms(v[0])}
                  min={1}
                  max={20}
                  step={1}
                  className="[&_[role=slider]]:bg-ochre [&_[role=slider]]:border-ochre [&_.bg-primary]:bg-ochre"
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
                <span className="text-night/70 text-base">Faturamento por diária</span>
                <span className="font-heading text-xl text-night">{fmt(revenue)}</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-night/5">
                <span className="text-night/70 text-base">Comissão Airbnb (16%)</span>
                <span className="font-heading text-xl text-night">− {fmt(airbnbFee)}</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-night/5">
                <span className="text-night/70 text-base">Imposto NF (8%)</span>
                <span className="font-heading text-xl text-night">− {fmt(taxFee)}</span>
              </div>
              <div className="flex justify-between items-center py-4">
                <span className="font-heading text-lg text-night">Você recebe por diária</span>
                <span className="font-heading text-xl text-ochre">{fmt(netPerDay)}</span>
              </div>
            </div>

            <div className="h-px w-full my-8 bg-night/10" />

            {/* Impacto anual */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                <AlertTriangle className="w-6 h-6 text-night/40" />
                <span className="font-heading text-[2.2rem] md:text-[3rem] text-night">
                  −{fmt(annualLoss)}
                </span>
              </div>
              <p className="text-sm md:text-base text-night/50">
                200 diárias/ano × {fmt(totalLoss)} = <strong className="text-night/70">{fmt(annualLoss)}/ano</strong> saindo do seu faturamento
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
