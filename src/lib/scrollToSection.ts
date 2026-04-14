export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const scrollTo = () => {
    const rect = el.getBoundingClientRect();
    const top = window.scrollY + rect.top;
    window.scrollTo({ top, behavior: "smooth" });
  };

  scrollTo();
  // Correction pass after lazy content may have loaded
  setTimeout(scrollTo, 600);
}
