import { motion } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";

import p1 from "@/assets/gallery/pousada-1.jpg";
import p2 from "@/assets/gallery/pousada-2.jpg";
import p3 from "@/assets/gallery/pousada-3.jpg";
import p4 from "@/assets/gallery/pousada-4.jpg";
import p5 from "@/assets/gallery/pousada-5.jpg";
import p6 from "@/assets/gallery/pousada-6.jpg";
import p7 from "@/assets/gallery/pousada-7.jpg";
import p8 from "@/assets/gallery/pousada-8.jpg";
import p9 from "@/assets/gallery/pousada-9.jpg";
import p10 from "@/assets/gallery/pousada-10.jpg";
import p11 from "@/assets/gallery/pousada-11.jpg";
import p12 from "@/assets/gallery/pousada-12.jpg";
import p13 from "@/assets/gallery/pousada-13.jpg";
import p14 from "@/assets/gallery/pousada-14.jpg";
import p15 from "@/assets/gallery/pousada-15.jpg";
import p16 from "@/assets/gallery/pousada-16.jpg";

const squareData = [
  { id: 1, src: p1 },
  { id: 2, src: p2 },
  { id: 3, src: p3 },
  { id: 4, src: p4 },
  { id: 5, src: p5 },
  { id: 6, src: p6 },
  { id: 7, src: p7 },
  { id: 8, src: p8 },
  { id: 9, src: p9 },
  { id: 10, src: p10 },
  { id: 11, src: p11 },
  { id: 12, src: p12 },
  { id: 13, src: p13 },
  { id: 14, src: p14 },
  { id: 15, src: p15 },
  { id: 16, src: p16 },
];

const shuffle = (array: typeof squareData) => {
  const copy = [...array];
  let currentIndex = copy.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [copy[currentIndex], copy[randomIndex]] = [copy[randomIndex], copy[currentIndex]];
  }
  return copy;
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isVisibleRef = useRef(false);
  const [shuffled, setShuffled] = useState(() => shuffle(squareData));

  const scheduleShuffle = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (!isVisibleRef.current) return;
    timeoutRef.current = setTimeout(() => {
      setShuffled(shuffle(squareData));
      scheduleShuffle();
    }, 3000);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          scheduleShuffle();
        } else if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [scheduleShuffle]);

  return (
    <div ref={containerRef} className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1 rounded-2xl overflow-hidden">
      {shuffled.map((sq) => (
        <motion.div
          key={sq.id}
          layout
          transition={{ duration: 1.5, type: "spring" }}
          className="w-full h-full overflow-hidden"
        >
          <img
            src={sq.src}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ShuffleGrid;
