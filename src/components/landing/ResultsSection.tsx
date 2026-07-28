import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import print1 from "@/assets/prints/print-1.webp";
import print2 from "@/assets/prints/print-2.webp";
import print3 from "@/assets/prints/print-3.webp";
import print4 from "@/assets/prints/print-4.webp";
import print5 from "@/assets/prints/print-5.webp";
import print6 from "@/assets/prints/print-6.webp";
import print7 from "@/assets/prints/print-7.webp";
import print8 from "@/assets/prints/print-8.webp";
import print9 from "@/assets/prints/print-9.webp";
import print10 from "@/assets/prints/print-10.webp";
import print11 from "@/assets/prints/print-11.webp";
import print12 from "@/assets/prints/print-12.webp";
import print13 from "@/assets/prints/print-13.webp";
import print14 from "@/assets/prints/print-14.webp";

const allPrints = [
  print1, print2, print3, print4, print5, print6, print7,
  print8, print9, print10, print11, print12, print13, print14,
];

const Card = ({ img, delay }: { img: string; delay: number }) => (
  <div
    className="landing-card reveal overflow-hidden"
    style={{ transitionDelay: `${delay}s` }}
  >
    <div className="flex items-center gap-2 px-3 py-2" style={{ borderBottom: "1px solid rgba(200,148,58,0.1)" }}>
      <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
      <span className="text-night/85 text-[0.68rem] font-medium">WhatsApp · Reserva confirmada</span>
    </div>
    <div className="w-full overflow-hidden">
      <img
        src={img}
        alt="Reserva confirmada"
        className="w-full h-auto object-cover"
        width={378}
        height={555}
        loading="lazy"
      />
    </div>
  </div>
);

// How many columns per breakpoint
const DESKTOP_COLS = 4;
const TABLET_COLS = 2;
const MOBILE_COLS = 1;

// Distribute prints into columns round-robin style
const distributeToColumns = (prints: string[], numCols: number): string[][] => {
  const cols: string[][] = Array.from({ length: numCols }, () => []);
  prints.forEach((p, i) => cols[i % numCols].push(p));
  return cols;
};

const desktopColumns = distributeToColumns(allPrints, DESKTOP_COLS);
const tabletColumns = distributeToColumns(allPrints, TABLET_COLS);

const columnOffsets = [0, 64, 28, 80];

// Calculate how many "rows" we have for each layout
const desktopRows = Math.ceil(allPrints.length / DESKTOP_COLS);
const tabletRows = Math.ceil(allPrints.length / TABLET_COLS);
const mobileRows = allPrints.length; // 1 col = each item is a row

const ResultsSection = () => {
  const [revealStep, setRevealStep] = useState(0);

  // Detect current breakpoint
  const [breakpoint, setBreakpoint] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setBreakpoint('desktop');
      else if (window.innerWidth >= 640) setBreakpoint('tablet');
      else setBreakpoint('mobile');
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const currentRows = breakpoint === 'desktop' ? desktopRows : breakpoint === 'tablet' ? tabletRows : mobileRows;

  const isFullyExpanded = (totalRows: number) => {
    return 1.5 + revealStep >= totalRows;
  };

  const getMaxHeight = (cardH: number, gap: number, rowsToShow: number, offset: number = 0) => {
    return offset + rowsToShow * cardH + (Math.floor(rowsToShow) - 1) * gap;
  };

  const desktopCardH = 280;
  const tabletCardH = 320;
  const mobileCardH = 380;
  const gap = 16;

  const desktopRowsToShow = 1.5 + revealStep;
  const tabletRowsToShow = 1.5 + revealStep;
  const mobileRowsToShow = 1.5 + revealStep;

  const desktopMaxH = isFullyExpanded(desktopRows) ? 99999 : getMaxHeight(desktopCardH, gap, desktopRowsToShow, 80);
  const tabletMaxH = isFullyExpanded(tabletRows) ? 99999 : getMaxHeight(tabletCardH, gap, tabletRowsToShow);
  const mobileMaxH = isFullyExpanded(mobileRows) ? 99999 : getMaxHeight(mobileCardH, gap, mobileRowsToShow);

  const desktopFullyExpanded = isFullyExpanded(desktopRows);
  const tabletFullyExpanded = isFullyExpanded(tabletRows);
  const mobileFullyExpanded = isFullyExpanded(mobileRows);

  let globalIndex = 0;

  return (
    <section style={{ background: "#050505" }} className="py-10 sm:py-16 px-4 sm:px-7">
      <div className="max-w-[1000px] mx-auto">
        <div className="reveal text-center mb-8 sm:mb-14">
          <div className="label-text mb-3 text-base sm:text-lg">APLICAÇÃO EM HOSPEDAGENS REAIS</div>
          <h2 className="font-heading text-[1.8rem] sm:text-[clamp(2.2rem,4.6vw,3.6rem)] font-black text-night leading-[1.15] mb-3 sm:mb-4 max-w-[820px] mx-auto">
            Resultados que mostram o que acontece quando marketing, oferta e atendimento{" "}
            <em className="text-ochre font-extrabold not-italic">trabalham juntos</em>.
          </h2>
          <p className="text-night/70 text-[0.8rem] sm:text-[0.9rem] leading-relaxed max-w-[640px] mx-auto mb-4 sm:mb-6">
            Resultados alcançados com aplicação da estratégia e acompanhamento da XPLO em hospedagens reais.
          </p>
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-ochre/[0.12] text-ochre text-[0.75rem] sm:text-[0.82rem] font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-ochre animate-pulse" />
            +300 reservas confirmadas
          </div>
        </div>

        {/* Desktop: 4 columns */}
        <div className="hidden lg:block relative">
          <div
            className="overflow-hidden transition-all duration-700 ease-in-out"
            style={{ maxHeight: `${desktopMaxH}px` }}
          >
            <div className="flex gap-4 justify-center">
              {desktopColumns.map((col, colIdx) => (
                <div key={colIdx} className="flex-1 max-w-[230px] flex flex-col gap-4" style={{ paddingTop: columnOffsets[colIdx] }}>
                  {col.map((img) => {
                    const idx = globalIndex++;
                    return <Card key={idx} img={img} delay={(idx + 1) * 0.05} />;
                  })}
                </div>
              ))}
            </div>
          </div>
          {!desktopFullyExpanded && (
            <div
              className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
              style={{ background: "linear-gradient(to bottom, transparent, #050505)" }}
            />
          )}
        </div>

        {/* Tablet: 2 columns */}
        <div className="hidden sm:block lg:hidden relative">
          <div
            className="overflow-hidden transition-all duration-700 ease-in-out"
            style={{ maxHeight: `${tabletMaxH}px` }}
          >
            <div className="grid grid-cols-2 gap-4">
              {allPrints.map((img, i) => (
                <Card key={i} img={img} delay={(i + 1) * 0.05} />
              ))}
            </div>
          </div>
          {!tabletFullyExpanded && (
            <div
              className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
              style={{ background: "linear-gradient(to bottom, transparent, #050505)" }}
            />
          )}
        </div>

        {/* Mobile: 1 column */}
        <div className="block sm:hidden relative">
          <div
            className="overflow-hidden transition-all duration-700 ease-in-out"
            style={{ maxHeight: `${mobileMaxH}px` }}
          >
            <div className="grid grid-cols-1 gap-4">
              {allPrints.map((img, i) => (
                <Card key={i} img={img} delay={(i + 1) * 0.05} />
              ))}
            </div>
          </div>
          {!mobileFullyExpanded && (
            <div
              className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
              style={{ background: "linear-gradient(to bottom, transparent, #050505)" }}
            />
          )}
        </div>

        {/* Toggle button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => {
              if (isFullyExpanded(currentRows)) {
                setRevealStep(0);
              } else {
                setRevealStep(revealStep + 2);
              }
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-night text-cream text-[0.85rem] font-semibold tracking-wide hover:bg-night/90 transition-all duration-300"
          >
            {isFullyExpanded(currentRows) ? "Ver menos" : "Ver + reservas"}
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                isFullyExpanded(currentRows) ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
