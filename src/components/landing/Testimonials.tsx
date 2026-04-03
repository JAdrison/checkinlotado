import { Check, Calendar, TrendingUp } from "lucide-react";
import whatsappImg from "@/assets/case-study/whatsapp-iparai.png";
import guilhermeImg from "@/assets/case-study/guilherme-couto.png";

const metrics = [
  {
    icon: Check,
    value: "4 Reservas",
    label: "em um único final de semana",
  },
  {
    icon: Calendar,
    value: "100%",
    label: "Finais de semana ocupados",
  },
  {
    icon: TrendingUp,
    value: "2 Meses",
    label: "Para vender 4 meses de agenda",
  },
];

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden" style={{ padding: "64px 16px" }}>
      {/* Video background */}
      <video
        src="/videos/iparai-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-14">
          <div className="label-text mb-3.5" style={{ color: "rgba(255,255,255,0.7)" }}>Caso real</div>
          <h2 className="font-heading text-[clamp(1.9rem,4vw,3.3rem)] text-cream leading-[1.15]">
            4 Meses de Reservas Vendidas<br />
            <em className="shimmer-text">em Apenas 60 Dias</em>
          </h2>
          <p className="text-cream/80 mt-4 text-[0.95rem] max-w-[500px] mx-auto">
            Todos os finais de semana esgotados até janeiro
          </p>
        </div>

        {/* Two-panel layout */}
        <div className="reveal grid md:grid-cols-2 gap-8 items-stretch">
          {/* Left — WhatsApp screenshot */}
          <div className="flex items-center justify-center overflow-hidden rounded-lg">
            <img
              src={whatsappImg}
              alt="Print de conversa no WhatsApp mostrando reservas da Casa Iparaí"
              className="rounded-lg h-full max-h-[400px] md:max-h-full object-contain"
            />
          </div>

          {/* Right — Metrics + Testimonial */}
          <div className="flex flex-col gap-5">
            {/* Metric cards */}
            {metrics.map((m, i) => (
              <div
                key={i}
                className="landing-card p-5 flex items-center gap-4"
                style={{ transitionDelay: `${(i + 1) * 0.05}s`, background: "rgba(255,255,255,0.08)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <div className="w-11 h-11 rounded-full bg-ochre/[0.25] flex items-center justify-center shrink-0">
                  <m.icon className="w-5 h-5 text-ochre" />
                </div>
                <div>
                  <p className="text-cream font-bold text-[1.15rem] leading-tight">
                    {m.value}
                  </p>
                  <p className="text-cream/85 text-sm">{m.label}</p>
                </div>
              </div>
            ))}

            {/* Testimonial */}
            <div className="p-7 mt-1 rounded-xl" style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.12)" }}>
              <div className="text-ochre mb-3">★★★★★</div>
              <p className="text-cream/85 text-base leading-[1.75] mb-5">
                "Essa semana a gente completa 7 meses e o salto em reservas foi
                grande, principalmente nesse final de semana. De sábado até
                agora já finalizei 04 reservas, fora as que ainda estão com
                pagamento pendente por conta que tão recolhendo valores do
                grupo. Os anúncios estão bem estratégicos, chegando no público
                alvo. O site está super funcional, uma ferramenta excepcional
                que reduz as dúvidas de novos clientes como também a
                valorização que dá para o negócio. O grupo XPLO está fazendo um
                ótimo trabalho, obrigado."
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={guilhermeImg}
                  alt="Guilherme Couto"
                  className="w-11 h-11 rounded-full object-cover"
                />
                <div>
                  <p className="text-cream text-[0.85rem] font-semibold">
                    Guilherme Couto
                  </p>
                  <p className="text-cream/65 text-[0.72rem]">
                    Proprietário — Casa Iparaí
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
