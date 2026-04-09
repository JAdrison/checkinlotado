import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { supabase } from "@/integrations/supabase/client";
import { trackEvent } from "@/lib/meta-capi";
import logoImg from "@/assets/checkin-lotado-logo.png";

const KIWIFY_URL = "https://pay.kiwify.com.br/Y613pR3";

const accommodationTypes = [
  "Casa de praia",
  "Casa de serra",
  "Pousada",
  "Apartamento",
  "Hotel",
  "Chácara",
];

const LeadFormDialog = () => {
  const { open, setOpen } = useLeadForm();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    accommodation_type: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Preencha seu nome";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Informe um e-mail válido";
    const digits = form.whatsapp.replace(/\D/g, "");
    if (digits.length < 10 || digits.length > 11)
      e.whatsapp = "Informe um WhatsApp válido";
    if (!form.accommodation_type) e.accommodation_type = "Selecione o tipo";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    const whatsappFull = `+55${form.whatsapp.replace(/\D/g, "")}`;

    try {
      await supabase.from("leads").insert({
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        whatsapp: whatsappFull,
        accommodation_type: form.accommodation_type,
      });

      trackEvent("Lead", {
        content_name: "Check-in Lotado",
        accommodation_type: form.accommodation_type,
      });

      window.open(KIWIFY_URL, "_blank");
      setOpen(false);
      setForm({ name: "", email: "", whatsapp: "", accommodation_type: "" });
      setErrors({});
    } catch {
      window.open(KIWIFY_URL, "_blank");
    } finally {
      setLoading(false);
    }
  };

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return digits;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  const inputClass =
    "w-full rounded-lg px-4 py-3 text-sm text-cream bg-white/[0.07] border border-ochre/20 placeholder:text-cream/30 focus:outline-none focus:border-ochre/50 focus:ring-1 focus:ring-ochre/20 transition-colors";

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="max-w-md w-[95vw] p-0 border-ochre/20 overflow-hidden rounded-2xl"
        style={{ background: "#1A1208" }}
      >
        <DialogTitle className="sr-only">Formulário de inscrição</DialogTitle>
        <div className="p-6 sm:p-8">
          {/* Logo */}
          <div className="text-center mb-6">
            <img src={logoImg} alt="Check-in Lotado" className="h-16 sm:h-20 mx-auto" />
          </div>

          {/* Headline */}
          <p className="text-cream text-center text-lg sm:text-xl font-semibold leading-snug mb-6 sm:mb-8">
            Preencha o formulário e descubra como{" "}
            <strong className="text-ochre">faturar alto</strong> com a sua
            hospedagem.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-cream/60 text-xs font-label tracking-wider mb-1.5 block">
                NOME
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                placeholder="Seu nome completo"
                maxLength={100}
                className={inputClass}
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="text-cream/60 text-xs font-label tracking-wider mb-1.5 block">
                MELHOR E-MAIL
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                placeholder="seu@email.com"
                maxLength={255}
                className={inputClass}
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="text-cream/60 text-xs font-label tracking-wider mb-1.5 block">
                WHATSAPP
              </label>
              <div className="flex">
                <span className="flex items-center px-3 rounded-l-lg text-sm text-cream/50 bg-white/[0.04] border border-r-0 border-ochre/20">
                  +55
                </span>
                <input
                  type="tel"
                  value={form.whatsapp}
                  onChange={(e) =>
                    updateField("whatsapp", formatPhone(e.target.value))
                  }
                  placeholder="(11) 99999-9999"
                  className={inputClass.replace("rounded-lg", "rounded-r-lg")}
                />
              </div>
              {errors.whatsapp && (
                <p className="text-red-400 text-xs mt-1">{errors.whatsapp}</p>
              )}
            </div>

            <div>
              <label className="text-cream/60 text-xs font-label tracking-wider mb-1.5 block">
                TIPO DE HOSPEDAGEM
              </label>
              <select
                value={form.accommodation_type}
                onChange={(e) =>
                  updateField("accommodation_type", e.target.value)
                }
                className={`${inputClass} appearance-none`}
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23C8943A' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 12px center",
                }}
              >
                <option value="" disabled className="bg-[#1A1208] text-cream/50">
                  Selecione...
                </option>
                {accommodationTypes.map((type) => (
                  <option key={type} value={type} className="bg-[#1A1208] text-cream">
                    {type}
                  </option>
                ))}
              </select>
              {errors.accommodation_type && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.accommodation_type}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 py-4 px-8 rounded-xl font-semibold text-base tracking-wide text-night transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                background: "linear-gradient(135deg, #C8943A 0%, #E2B868 100%)",
                boxShadow: "0 8px 30px rgba(200, 148, 58, 0.4)",
              }}
            >
              {loading ? "Enviando..." : "Quero faturar alto →"}
            </button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LeadFormDialog;
