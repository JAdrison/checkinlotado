import { Check, Calendar, TrendingUp } from "lucide-react";
import { trackEvent } from "@/lib/meta-capi";
import whatsappImg from "@/assets/case-study/whatsapp-iparai.webp";
import guilhermeImg from "@/assets/case-study/guilherme-couto.webp";
import iparaiLogo from "@/assets/case-study/iparai-logo.png";
import videoThumb from "@/assets/video-thumbnail.webp";

const metrics = [
  {
    icon: Check,
    value: "+ Faturamento",
    label: "+71% de aumento no faturamento",
  },
  {
    icon: Calendar,
    value: "100%",
    label: "Finais de semana ocupados",
  },
  {
    icon: TrendingUp,
    value: "Aumento de +23%",
    label: "No valor do final de semana R$ 1770 > 2300 ",
  },
];

const Testimonials = () => {
  const { setOpen } = useLeadForm();
  return (
    <section className="relative overflow-hidden" style={{ padding: "40px 16px" }}>
      {/* Video background */}
      <video
        src="/videos/iparai-bg.mp4"
        poster={videoThumb}
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-8 sm:mb-14">
          <div className="label-text mb-3" style={{ color: "rgba(255,255,255,0.7)" }}>Veja na prática o que esse cliente conquistou com o método</div>
          <h2 className="font-heading text-[1.5rem] sm:text-[clamp(1.9rem,4vw,3.3rem)] font-black text-cream leading-[1.15]">
            Mais de R$ 70.000,00 Faturado<br />
            <em className="shimmer-text font-extrabold">em 7 Meses de Checkin Lotado</em>
          </h2>
          <p className="text-cream/80 mt-3 sm:mt-4 text-[0.9rem] sm:text-lg max-w-[500px] mx-auto">
            Todos os finais de semana esgotados
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
              width={500}
              height={700}
              loading="lazy"
            />
          </div>

          {/* Right — Metrics + Testimonial */}
          <div className="flex flex-col gap-5">
            {/* Metric cards */}
            {metrics.map((m, i) => (
              <div
                key={i}
                className="landing-card p-4 sm:p-5 flex items-center gap-3 sm:gap-4"
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
            <div className="p-5 sm:p-7 mt-1 rounded-xl" style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.12)" }}>
              <div className="text-ochre mb-3">★★★★★</div>
              <p className="text-cream/85 text-sm sm:text-base leading-[1.75] mb-4 sm:mb-5">
                "Em 7 meses, saímos de finais de semana vazios para agenda
                lotada. Só nesse fim de semana fechei 4 reservas — e ainda tinha
                pendentes. Os anúncios chegam no público certo, o site virou
                ferramenta de venda e o valor da hospedagem subiu. O Check-in
                Lotado foi o divisor de águas."
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={guilhermeImg}
                  alt="Casa Iparaí"
                  className="w-11 h-11 rounded-full object-cover bg-white"
                  width={44}
                  height={44}
                  loading="lazy"
                />
                <div>
                  <p className="text-cream text-base font-semibold">
                    Guilherme Couto
                  </p>
                  <p className="text-cream/65 text-sm">
                    Proprietário — Casa Iparaí
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CTA */}
        <div className="reveal text-center mt-12">
          <button onClick={() => setOpen(true)} className="btn-cta btn-cta-lg w-full sm:w-auto">
            <span className="text-[0.75rem] sm:text-base">QUERO LOTAR MINHA HOSPEDAGEM →</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
