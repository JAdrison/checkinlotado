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
import logoButterfly from "@/assets/logos/motel-butterfly.png";
import logoAgoba from "@/assets/logos/rancho-agoba.png";
import logoChoca from "@/assets/logos/village-choca.png";
import logoEncanto from "@/assets/logos/encanto-das-aguas.png";
import logoCasaTropical from "@/assets/logos/casa-tropical.png";

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
  { src: logoButterfly, alt: "Motel Butterfly" },
  { src: logoAgoba, alt: "Rancho Agobá" },
  { src: logoChoca, alt: "Village Choça" },
  { src: logoEncanto, alt: "Encanto das Águas" },
  { src: logoCasaTropical, alt: "Casa Tropical" },
];

const LogoItem = ({ logo }: { logo: { src: string | null; alt: string } }) => (
  <div className="flex-shrink-0 px-10 flex items-center justify-center" style={{ minWidth: 140, height: 72 }}>
    {logo.src ? (
      <img src={logo.src} alt={logo.alt} className="max-h-14 max-w-[140px] object-contain opacity-90 hover:opacity-100 transition-opacity duration-300" style={{ mixBlendMode: 'multiply' }} />
    ) : (
      <div className="h-20 w-28 rounded-lg border border-dashed flex items-center justify-center text-xs font-label uppercase tracking-widest" style={{ borderColor: 'var(--ochre)', color: 'var(--ochre)', opacity: 0.35 }}>
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

      {/* Quem confia no método */}
      <section style={{ background: "#F2EDE0", padding: "0 28px 96px" }}>
        <div className="max-w-[1100px] mx-auto">
          <div className="reveal text-center">
            <div className="label-text mb-6">Quem confia no método</div>
            <div className="overflow-hidden w-full">
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
      </section>
    </>
  );
};

export default ForWhom;
