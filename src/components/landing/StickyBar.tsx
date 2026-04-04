import { useState, useEffect } from "react";
import { trackEvent } from "@/lib/meta-capi";

const StickyBar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      id="sticky-bar"
      className={show ? "show" : ""}
    >
      <div className="flex items-center gap-3">
        <span className="font-heading font-bold text-night text-[0.9rem]">
          Check-in <span className="text-ochre">Lotado</span>
        </span>
        <span className="text-night/80 text-[0.78rem] hidden sm:inline">
          12x R$51,40 · Acesso imediato
        </span>
      </div>
      <a href="#comprar" className="btn-cta btn-cta-sm">
        <span>QUERO ENTRAR →</span>
      </a>
    </div>
  );
};

export default StickyBar;
