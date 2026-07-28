import { useState, useEffect } from "react";
import { scrollToSection } from "@/lib/scrollToSection";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] grid grid-cols-[1fr_auto_1fr] items-center transition-all duration-500 ${
        scrolled
          ? "bg-[rgba(8,7,6,0.85)] backdrop-blur-[24px] py-2.5 px-4 sm:px-10 border-b border-ochre/15"
          : "py-4 px-4 sm:px-10 border-b border-transparent"
      }`}
    >
      <div></div>
      <div className="flex justify-center">
        <span className="font-heading text-2xl font-semibold tracking-tight text-night italic">
          Check-in <span className="text-ochre not-italic font-medium">Lotado</span>
        </span>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => scrollToSection("comprar")}
          className="btn-cta btn-cta-sm font-label hidden sm:inline-flex"
        >
          <span>QUERO ENTRAR →</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
