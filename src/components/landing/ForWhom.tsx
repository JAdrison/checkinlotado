import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { CardStack, CardStackItem } from "@/components/ui/card-stack";

import imgApartamento from "@/assets/forwhom/apartamento.webp";
import imgQuarto from "@/assets/forwhom/quarto-privativo.webp";
import imgPraia from "@/assets/forwhom/casa-praia.webp";
import imgSerra from "@/assets/forwhom/casa-serra.webp";
import imgChacara from "@/assets/forwhom/chacara.webp";
import imgCabana from "@/assets/forwhom/cabana.webp";
import imgPousada from "@/assets/forwhom/pousada.webp";
import imgHotel from "@/assets/forwhom/hotel.webp";

import logoButterfly from "@/assets/logos/motel-butterfly.webp";
import logoAgoba from "@/assets/logos/rancho-agoba.webp";
import logoChoca from "@/assets/logos/village-choca.webp";
import logoEncanto from "@/assets/logos/encanto-das-aguas.webp";
import logoIparai from "@/assets/logos/iparai.webp";
import logoCasaRobelu from "@/assets/logos/casa-robelu.webp";
import logoPousadaEspraidada from "@/assets/logos/pousada-espraidada.webp";
import logoVillaAzul from "@/assets/logos/villa-azul.webp";

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
  <div className="flex-shrink-0 px-4 sm:px-12 flex items-center justify-center" style={{ width: 'var(--logo-w)', height: 'var(--logo-h)' }}>
    {logo.src ? (
      <img src={logo.src} alt={logo.alt} width={128} height={64} className="h-20 sm:h-24 w-auto max-w-[200px] sm:max-w-[260px] object-contain opacity-85 hover:opacity-100 transition-opacity duration-300" style={{ mixBlendMode: 'screen', filter: 'brightness(1.15) contrast(0.9)' }} loading="lazy" />
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
      <section style={{ background: "#0B0908", padding: isMobile ? "40px 16px 20px" : "64px 28px 32px" }}>
        <div className="max-w-[1100px] mx-auto">
          <div className="reveal text-center mb-8 sm:mb-10">
            <div className="label-text mb-3">PARA QUEM É</div>
            <h2 className="font-heading text-[1.5rem] sm:text-[clamp(1.9rem,4vw,3.3rem)] font-black text-night leading-[1.15] mb-6 sm:mb-8">
              Para quem quer parar de tratar a ocupação como <em className="text-ochre font-extrabold not-italic">sorte</em>.
            </h2>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-10 text-left max-w-[900px] mx-auto">
              <div>
                <div className="label-text mb-4">Tipos de hospedagem</div>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {["Hotéis","Pousadas","Chalés","Flats","Casas de praia","Casas de serra","Casas de temporada","Apartamentos","Chácaras","Quartos privativos"].map((t) => (
                    <li key={t} className="flex items-start gap-2 text-night/85 text-[0.85rem] sm:text-[0.95rem]">
                      <span className="text-ochre mt-1 text-xs">◆</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="label-text mb-4">Situações</div>
                <ul className="flex flex-col gap-2.5">
                  {["Hospedagens que lotam em feriados e esvaziam depois.","Proprietários que cuidam do próprio marketing.","Gestores que precisam orientar uma equipe.","Negócios que recebem contatos, mas convertem pouco.","Hospedagens que desejam aumentar reservas diretas.","Empresas que fazem promoções sem planejamento."].map((t) => (
                    <li key={t} className="flex items-start gap-2 text-night/85 text-[0.85rem] sm:text-[0.95rem] leading-relaxed">
                      <span className="text-ochre mt-1 text-xs">◆</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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
      <section style={{ background: "#0B0908", padding: isMobile ? "0 16px 36px" : "0 28px 48px", ['--logo-w' as string]: isMobile ? '160px' : '280px', ['--logo-h' as string]: isMobile ? '80px' : '120px' }}>
        <div className="max-w-[1100px] mx-auto">
          <div className="reveal text-center">
            <div className="label-text mb-6">Quem confia no método</div>
            <div className="overflow-hidden w-full" style={{ maxWidth: "100vw" }}>
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
