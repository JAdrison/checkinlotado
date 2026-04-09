import React, { useState, useRef, useEffect, useCallback } from "react";

interface AccordionItemData {
  id: number;
  phase: string;
  title: string;
  desc: string;
  imageUrl: string;
}

interface AccordionItemProps {
  item: AccordionItemData;
  isActive: boolean;
  onMouseEnter: () => void;
  onClick: () => void;
  itemRef?: React.Ref<HTMLDivElement>;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isActive, onMouseEnter, onClick, itemRef }) => {
  return (
    <div
      ref={itemRef}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 ease-in-out ${
        isActive ? "flex-[4] md:flex-[4]" : "flex-[0.6]"
      }`}
      style={{ minHeight: isActive ? "350px" : "60px" }}
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      {/* Overlay */}
      <div className={`absolute inset-0 transition-all duration-500 ${
        isActive
          ? "bg-gradient-to-t from-black/70 via-black/20 to-transparent"
          : "bg-black/60"
      }`} />

      {/* Vertical label when collapsed (desktop only) */}
      <div className={`absolute inset-0 hidden md:flex items-center justify-center p-4 transition-opacity duration-500 ${
        isActive ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}>
        <span
          className="text-ochre font-heading text-base md:text-lg whitespace-nowrap tracking-wide font-bold drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          {item.phase}
        </span>
      </div>

      {/* Horizontal label when collapsed (mobile only) */}
      <div className={`absolute inset-0 flex md:hidden items-center justify-center p-4 transition-opacity duration-500 ${
        isActive ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}>
        <span className="text-ochre font-heading text-base font-bold tracking-wide drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
          {item.phase}: {item.title}
        </span>
      </div>

      {/* Horizontal content when expanded */}
      <div className={`absolute bottom-0 left-0 right-0 p-6 transition-opacity duration-500 ${
        isActive ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}>
        <span className="text-ochre text-sm font-bold uppercase tracking-[0.15em] font-label drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]">
          {item.phase}
        </span>
        <h3 className="font-heading text-white mt-1 text-xl md:text-2xl">
          {item.title}
        </h3>
        <p className="text-white/70 text-base leading-relaxed mt-2">
          {item.desc}
        </p>
      </div>
    </div>
  );
};

interface InteractiveImageAccordionProps {
  items: AccordionItemData[];
}

const SCROLL_PER_PHASE = 150; // px of scroll per phase reveal

export const InteractiveImageAccordion: React.FC<InteractiveImageAccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [revealedCount, setRevealedCount] = useState(0);
  const stickyRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);

  // Calculate how many phases should be revealed based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const outer = outerRef.current;
      if (!outer) return;

      const rect = outer.getBoundingClientRect();
      // How far past the top of the outer container we've scrolled
      const scrolledInto = -rect.top;

      if (scrolledInto < 0) {
        setRevealedCount(0);
        return;
      }

      // Map scroll position to phase count
      const count = Math.min(
        items.length,
        Math.floor(scrolledInto / SCROLL_PER_PHASE) + 1
      );
      setRevealedCount(count);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items.length]);

  const isItemActive = (index: number) => {
    // During scroll-hijack mode, show items that have been revealed
    if (revealedCount > 0) {
      return index < revealedCount;
    }
    return activeIndex === index;
  };

  // Total spacer height = enough scroll distance for all phases
  const spacerHeight = items.length * SCROLL_PER_PHASE;

  return (
    <div
      ref={outerRef}
      style={{ height: `${spacerHeight + 100}vh` }}
      className="relative"
    >
      <div
        ref={stickyRef}
        className="sticky top-0 pt-4 pb-4"
        style={{ height: "auto", maxHeight: "100vh", zIndex: 10 }}
      >
        <div className="flex flex-col md:flex-row gap-3 w-full" style={{ minHeight: "450px" }}>
          {items.map((item, index) => (
            <AccordionItem
              key={item.id}
              item={item}
              isActive={isItemActive(index)}
              onMouseEnter={() => {
                if (revealedCount === 0) setActiveIndex(index);
              }}
              onClick={() => {
                if (revealedCount === 0) setActiveIndex(index);
              }}
            />
          ))}
        </div>

        {/* Progress indicator */}
        {revealedCount > 0 && revealedCount < items.length && (
          <div className="flex items-center justify-center mt-4 gap-2">
            <div className="flex gap-1.5">
              {items.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i < revealedCount ? "bg-ochre scale-100" : "bg-night/20 scale-75"
                  }`}
                />
              ))}
            </div>
            <span className="text-night/50 text-xs font-label ml-2">
              Role para revelar ({revealedCount}/{items.length})
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
