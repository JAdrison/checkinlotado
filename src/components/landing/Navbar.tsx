import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] grid grid-cols-[1fr_auto_1fr] items-center transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(242,237,224,0.96)] backdrop-blur-[20px] py-2.5 px-4 sm:px-10 border-b border-night/10"
          : "py-4 px-4 sm:px-10 border-b border-transparent"
      }`}
    >
      <div></div>
      <div className="flex justify-center">
        <span className="font-heading text-lg font-bold text-night">
          Check-in <span className="text-ochre">Lotado</span>
        </span>
      </div>
      <div className="flex justify-end">
        <a
          href="#comprar"
          className="btn-cta btn-cta-sm font-label"
        >
          <span>QUERO ENTRAR →</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
