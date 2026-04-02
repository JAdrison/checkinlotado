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
      <img src={logo.src} alt={logo.alt} className="h-20 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
    ) : (
      <div className="h-20 w-28 rounded-lg border border-dashed flex items-center justify-center text-xs font-label uppercase tracking-widest" style={{ borderColor: 'var(--ochre)', color: 'var(--ochre)', opacity: 0.35 }}>
        Logo
      </div>
    )}
  </div>
);

        {/* Quem confia no método */}
        <div className="reveal text-center mt-20">
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
  );
};

export default ForWhom;
