const Footer = () => {
  return (
    <footer
      className="text-center py-8 px-7"
      style={{ background: "#080706", borderTop: "1px solid rgba(200,148,58,0.2)" }}
    >
      <p className="font-heading text-xl font-bold text-night mb-1">
        Check-in <span className="text-ochre">Lotado</span>
      </p>
      <p className="text-[rgba(245,239,224,0.45)] text-[0.78rem] mb-6">
        Suporte via WhatsApp · Garantia de 7 dias · Acesso imediato
      </p>
      <p className="text-[rgba(245,239,224,0.3)] text-[0.7rem]">
        © 2024 Check-in Lotado. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
