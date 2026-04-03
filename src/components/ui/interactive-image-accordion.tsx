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

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <span className="text-ochre text-[0.7rem] font-bold uppercase tracking-[0.15em] font-label">
          {item.phase}
        </span>
        <h3 className={`font-heading text-white mt-1 transition-all duration-500 ${
          isActive ? "text-xl md:text-2xl" : "text-base"
        }`}>
          {item.title}
        </h3>
        <p className={`text-white/70 text-sm leading-relaxed mt-2 transition-all duration-500 ${
          isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}>
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
