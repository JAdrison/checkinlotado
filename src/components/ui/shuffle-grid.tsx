import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import p1 from "@/assets/gallery/pousada-1.webp";
import p2 from "@/assets/gallery/pousada-2.webp";
import p3 from "@/assets/gallery/pousada-3.webp";
import p4 from "@/assets/gallery/pousada-4.webp";
import p5 from "@/assets/gallery/pousada-5.webp";
import p6 from "@/assets/gallery/pousada-6.webp";
import p7 from "@/assets/gallery/pousada-7.webp";
import p8 from "@/assets/gallery/pousada-8.webp";
import p9 from "@/assets/gallery/pousada-9.webp";
import p10 from "@/assets/gallery/pousada-10.webp";
import p11 from "@/assets/gallery/pousada-11.webp";
import p12 from "@/assets/gallery/pousada-12.webp";
import p13 from "@/assets/gallery/pousada-13.webp";
import p14 from "@/assets/gallery/pousada-14.webp";
import p15 from "@/assets/gallery/pousada-15.webp";
import p16 from "@/assets/gallery/pousada-16.webp";

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
  const [shuffled, setShuffled] = useState(() => shuffle(squareData));

  useEffect(() => {
    const doShuffle = () => {
      setShuffled(shuffle(squareData));
      timeoutRef.current = setTimeout(doShuffle, 3000);
    };
    timeoutRef.current = setTimeout(doShuffle, 3000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1 rounded-2xl overflow-hidden">
      {shuffled.map((sq) => (
        <motion.div
          key={sq.id}
          layout
          transition={{ duration: 1.5, type: "spring" }}
          className="w-full h-full"
          style={{
            backgroundImage: `url(${sq.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}
    </div>
  );
};

export default ShuffleGrid;
