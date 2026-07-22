import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FAQInfo, ThemeConfig } from "../types";
import { LucideIcon } from "./LucideIcon";

interface FAQSectionProps {
  faq: FAQInfo;
  theme: ThemeConfig;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ faq, theme }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 relative overflow-hidden bg-slate-950">
      
      {/* Dynamic background glow */}
      <div
        className="absolute w-[400px] h-[400px] blur-[150px] rounded-full pointer-events-none opacity-5"
        style={{
          background: `radial-gradient(circle, ${theme.primaryColor} 0%, rgba(0,0,0,0) 70%)`,
          bottom: "10%",
          left: "5%",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest text-cyan-400 uppercase mb-2">
            <span>// 08</span>
            <span>{faq.title.toUpperCase()}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase font-sans">
            {faq.subtitle}
          </h2>
          <div className="h-[1px] w-12 bg-cyan-400 mt-4" />
        </div>

        {/* Accordion Questions list */}
        <div className="space-y-4 text-left">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded border transition-all duration-300 ${
                  isOpen
                    ? "border-cyan-400/30 bg-slate-900/60"
                    : "border-slate-900 bg-slate-900/10 hover:border-slate-800"
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 flex justify-between items-center text-left gap-4 font-sans cursor-pointer focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-100 tracking-wide uppercase">
                    {item.question}
                  </span>
                  <div className="shrink-0 p-1 rounded bg-slate-950 border border-slate-900 text-cyan-400">
                    <LucideIcon
                      name={isOpen ? "Minus" : "Plus"}
                      size={12}
                    />
                  </div>
                </button>

                {/* Collapsible Disclosure */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-slate-900/40 text-xs sm:text-sm text-slate-400 leading-relaxed space-y-3">
                        <p>{item.answer}</p>
                        {item.category && (
                          <div className="text-[10px] font-mono text-slate-600 uppercase">
                            CATEGORY TAG: {item.category}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
