import React, { useState } from "react";

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
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isActive, onMouseEnter, onClick }) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 ease-in-out ${
        isActive ? "flex-[4]" : "flex-[0.6]"
      }`}
      style={{ minHeight: "450px" }}
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
          : "bg-black/50"
      }`} />

      {/* Vertical label when collapsed */}
      <div className={`absolute inset-0 flex items-center justify-center p-4 transition-opacity duration-500 ${
        isActive ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}>
        <span
          className="text-white font-heading text-sm md:text-base whitespace-nowrap tracking-wide"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          {item.phase}: {item.title}
        </span>
      </div>

      {/* Horizontal content when expanded */}
      <div className={`absolute bottom-0 left-0 right-0 p-6 transition-opacity duration-500 ${
        isActive ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}>
        <span className="text-ochre text-xs font-bold uppercase tracking-[0.15em] font-label">
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

  return (
    <div className="flex flex-col md:flex-row gap-3 w-full" style={{ minHeight: "450px" }}>
      {items.map((item, index) => (
        <AccordionItem
          key={item.id}
          item={item}
          isActive={activeIndex === index}
          onMouseEnter={() => setActiveIndex(index)}
          onClick={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
};
