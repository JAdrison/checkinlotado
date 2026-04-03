import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { CardStack, CardStackItem } from "@/components/ui/card-stack";

import imgApartamento from "@/assets/forwhom/apartamento.png";
import imgQuarto from "@/assets/forwhom/quarto-privativo.jpg";
import imgPraia from "@/assets/forwhom/casa-praia.png";
import imgSerra from "@/assets/forwhom/casa-serra.png";
import imgChacara from "@/assets/forwhom/chacara.jpg";
import imgCabana from "@/assets/forwhom/cabana.png";
import imgPousada from "@/assets/forwhom/pousada.png";
import imgHotel from "@/assets/forwhom/hotel.png";

import logoButterfly from "@/assets/logos/motel-butterfly.png";
import logoAgoba from "@/assets/logos/rancho-agoba.png";
import logoChoca from "@/assets/logos/village-choca.png";
import logoEncanto from "@/assets/logos/encanto-das-aguas.png";
import logoIparai from "@/assets/logos/iparai.png";
import logoCasaRobelu from "@/assets/logos/casa-robelu.png";
import logoPousadaEspraidada from "@/assets/logos/pousada-espraidada.png";
import logoVillaAzul from "@/assets/logos/villa-azul.png";

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
  
  { src: logoCasaRobelu, alt: "Casa Robelu" },
  { src: logoPousadaEspraidada, alt: "Pousada Espraidada" },
  { src: logoVillaAzul, alt: "Villa Azul" },
];

const LogoItem = ({ logo }: { logo: { src: string | null; alt: string } }) => (
  <div className="flex-shrink-0 px-12 flex items-center justify-center" style={{ width: 280, height: 120 }}>
    {logo.src ? (
      <img src={logo.src} alt={logo.alt} className="h-16 w-auto max-w-[200px] object-contain opacity-85 hover:opacity-100 transition-opacity duration-300" style={{ mixBlendMode: 'multiply' }} />
    ) : (
      <div className="h-10 w-28 rounded-lg border border-dashed flex items-center justify-center text-xs font-label uppercase tracking-widest" style={{ borderColor: 'var(--ochre)', color: 'var(--ochre)', opacity: 0.35 }}>
        Logo
      </div>
    )}
  </div>
);

const ForWhom: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <>
      {/* Card stack section - cream background */}
      <section style={{ background: "#F2EDE0", padding: isMobile ? "48px 16px 24px" : "64px 28px 32px" }}>
        <div className="max-w-[1100px] mx-auto">
          <div className="reveal text-center mb-10">
            <h2 className="font-heading text-[clamp(1.9rem,4vw,3.3rem)] font-black text-night leading-[1.2] mb-4">
              Esse método é para o seu tipo de <em className="shimmer-text font-extrabold">hospedagem</em>
            </h2>
            <p className="text-night/85 text-lg leading-relaxed max-w-[520px] mx-auto">
              De apartamentos urbanos a pousadas no interior — o método funciona para quem quer lotar com estratégia.
            </p>
          </div>

          <CardStack
            items={items}
            cardWidth={isMobile ? 300 : 480}
            cardHeight={isMobile ? 200 : 300}
            autoAdvance
            intervalMs={3000}
            pauseOnHover
            overlap={isMobile ? 0.5 : 0.45}
            spreadDeg={isMobile ? 30 : 40}
            maxVisible={isMobile ? 3 : 5}
            activeScale={1.04}
            inactiveScale={0.92}
            depthPx={isMobile ? 80 : 120}
            tiltXDeg={isMobile ? 6 : 10}
            activeLiftPx={isMobile ? 12 : 18}
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
