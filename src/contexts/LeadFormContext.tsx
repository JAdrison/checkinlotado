import { createContext, useContext, useState, ReactNode } from "react";

interface LeadFormContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const LeadFormContext = createContext<LeadFormContextType>({ open: false, setOpen: () => {} });

export const useLeadForm = () => useContext(LeadFormContext);

export const LeadFormProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <LeadFormContext.Provider value={{ open, setOpen }}>
      {children}
    </LeadFormContext.Provider>
  );
};
