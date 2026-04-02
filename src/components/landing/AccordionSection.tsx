import { useState } from "react";

interface AccordionSectionProps {
  bgColor: string;
  label: string;
  titleBefore: string;
  titleHighlight: string;
  items: { question: string; answer: string }[];
}

const AccordionSection = ({ bgColor, label, titleBefore, titleHighlight, items }: AccordionSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section style={{ background: bgColor, padding: "96px 28px" }}>
      <div className="max-w-[800px] mx-auto">
        <div className="reveal text-center mb-14">
          <div className="label-text mb-3.5">{label}</div>
          <h2
            className="font-heading text-[clamp(1.9rem,4vw,3.3rem)] text-night"
            dangerouslySetInnerHTML={{
              __html: `${titleBefore}<br/><em class="shimmer-text">${titleHighlight}</em>`,
            }}
          />
        </div>
        <div className="flex flex-col gap-2.5">
          {items.map((item, i) => (
            <div
              key={i}
              className={`landing-card acc-item reveal ${openIndex === i ? "active" : ""}`}
              style={{ transitionDelay: `${(i + 1) * 0.05}s` }}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full text-left py-5 px-5 flex justify-between items-center bg-transparent border-none cursor-pointer gap-4"
              >
                <span className="text-night font-semibold text-[0.92rem] leading-snug">
                  {item.question}
                </span>
                <span
                  className="text-ochre text-[1.4rem] flex-shrink-0 leading-none transition-transform duration-300"
                  style={{ transform: openIndex === i ? "rotate(45deg)" : "none" }}
                >
                  +
                </span>
              </button>
              <div className={`acc-body ${openIndex === i ? "open" : ""}`}>
                <div
                  className="px-5 pb-5 pt-4 text-night/80 text-[0.87rem] leading-[1.75]"
                  style={{ borderTop: "1px solid rgba(200,148,58,0.1)" }}
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccordionSection;
