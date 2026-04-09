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

export const InteractiveImageAccordion: React.FC<InteractiveImageAccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Auto-open on scroll for mobile
  useEffect(() => {
    if (!isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = itemRefs.current.indexOf(entry.target as HTMLDivElement);
            if (idx !== -1) {
              setActiveIndex(idx);
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [isMobile, items.length]);

  const setRef = useCallback((index: number) => (el: HTMLDivElement | null) => {
    itemRefs.current[index] = el;
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-3 w-full" style={{ minHeight: "450px" }}>
      {items.map((item, index) => (
        <AccordionItem
          key={item.id}
          item={item}
          isActive={activeIndex === index}
          onMouseEnter={() => setActiveIndex(index)}
          onClick={() => setActiveIndex(index)}
          itemRef={setRef(index)}
        />
      ))}
    </div>
  );
};
