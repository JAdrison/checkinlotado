import React from "react";
import { CardStack, CardStackItem } from "@/components/ui/card-stack";

import imgApartamento from "@/assets/forwhom/apartamento.png";
import imgQuarto from "@/assets/forwhom/quarto-privativo.jpg";
import imgPraia from "@/assets/forwhom/casa-praia.png";
import imgSerra from "@/assets/forwhom/casa-serra.png";
import imgChacara from "@/assets/forwhom/chacara.jpg";
import imgCabana from "@/assets/forwhom/cabana.png";
import imgPousada from "@/assets/forwhom/pousada.png";
import imgHotel from "@/assets/forwhom/hotel.png";

import logoIparai from "@/assets/logo-iparai.png";

const items: CardStackItem[] = [
  { id: 1, title: "Apartamentos e Studios", description: "Maximize a ocupação do seu espaço urbano", imageSrc: imgApartamento },
  { id: 2, title: "Quartos Privativos", description: "Transforme quartos vazios em receita constante", imageSrc: imgQuarto },
  { id: 3, title: "Casas de Praia", description: "Lote fins de semana e temporadas inteiras", imageSrc: imgPraia },
  { id: 4, title: "Casas de Serra", description: "Atraia hóspedes o ano todo, não só no frio", imageSrc: imgSerra },
  { id: 5, title: "Chácaras e Sítios", description: "Preencha a agenda com grupos e famílias", imageSrc: imgChacara },
  { id: 6, title: "Cabanas", description: "Crie experiências que vendem sozinhas", imageSrc: imgCabana },
  { id: 7, title: "Pousadas", description: "Ocupação previsível sem depender de OTAs", imageSrc: imgPousada },
  { id: 8, title: "Hotéis", description: "Estratégia comercial que enche quartos", imageSrc: imgHotel },
];

const trustedLogos = [
  { src: logoIparai, alt: "Iparaí" },
  { src: null, alt: "Em breve 1" },
  { src: null, alt: "Em breve 2" },
  { src: null, alt: "Em breve 3" },
  { src: null, alt: "Em breve 4" },
  { src: null, alt: "Em breve 5" },
  { src: null, alt: "Em breve 6" },
  { src: null, alt: "Em breve 7" },
  { src: null, alt: "Em breve 8" },
  { src: null, alt: "Em breve 9" },
  { src: null, alt: "Em breve 10" },
];

const LogoItem = ({ logo }: { logo: { src: string | null; alt: string } }) => (
  <div className="flex-shrink-0 px-8 flex items-center justify-center" style={{ minWidth: 160 }}>
    {logo.src ? (
      <img src={logo.src} alt={logo.alt} className="h-20 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300" />
    ) : (
      <div className="h-20 w-28 rounded-lg border border-dashed flex items-center justify-center text-xs font-label uppercase tracking-widest" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.4)' }}>
        Logo
      </div>
    )}
  </div>
);

const ForWhom: React.FC = () => {

  return (
    <>
      {/* Card stack section - cream background */}
      <section style={{ background: "#F2EDE0", padding: "96px 28px 48px" }}>
        <div className="max-w-[1100px] mx-auto">
          <div className="reveal text-center mb-10">
            <h2 className="font-heading text-[clamp(1.9rem,4vw,3.3rem)] text-night mb-4">
              Esse método é para o seu tipo de <em className="shimmer-text">hospedagem</em>
            </h2>
            <p className="text-night/85 text-[0.95rem] leading-relaxed max-w-[520px] mx-auto">
              De apartamentos urbanos a pousadas no interior — o método funciona para quem quer lotar com estratégia.
            </p>
          </div>

          <CardStack
            items={items}
            cardWidth={480}
            cardHeight={300}
            autoAdvance
            intervalMs={3000}
            pauseOnHover
            overlap={0.45}
            spreadDeg={40}
            maxVisible={5}
            activeScale={1.04}
            inactiveScale={0.92}
            depthPx={120}
            tiltXDeg={10}
            activeLiftPx={18}
          />
        </div>
      </section>

      {/* Scroll-driven video section */}
      <div ref={containerRef} className="relative" style={{ height: "150vh" }}>
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <video
            ref={videoRef}
            src="/videos/iparai-bg.mp4"
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content on top */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-7">
            <div className="reveal text-center">
              <div className="label-text mb-6" style={{ color: "rgba(255,255,255,0.7)" }}>Quem confia no método</div>
              <div className="overflow-hidden w-full max-w-[900px]">
                <div className="flex whitespace-nowrap" style={{ animation: 'ticker 30s linear infinite' }}>
                  {trustedLogos.map((logo, i) => (
                    <LogoItem key={`a-${i}`} logo={logo} />
                  ))}
                  {trustedLogos.map((logo, i) => (
                    <LogoItem key={`b-${i}`} logo={logo} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForWhom;
