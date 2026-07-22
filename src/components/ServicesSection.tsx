import React from "react";
import { ServicesInfo, ThemeConfig } from "../types";
import { LucideIcon } from "./LucideIcon";

interface ServicesSectionProps {
  services: ServicesInfo;
  theme: ThemeConfig;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ services, theme }) => {
  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      
      {/* Decorative top border ambient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-800 to-transparent" />
      
      {/* Dynamic background lighting */}
      <div
        className="absolute w-[500px] h-[500px] blur-[160px] rounded-full pointer-events-none opacity-5"
        style={{
          background: `radial-gradient(circle, ${theme.primaryColor} 0%, rgba(0,0,0,0) 70%)`,
          top: "20%",
          right: "5%",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest text-indigo-600 dark:text-cyan-400 uppercase mb-2 font-bold">
            <span>// 06</span>
            <span>{services.title.toUpperCase()}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase font-sans">
            {services.subtitle}
          </h2>
          <div className="h-[2px] w-20 bg-indigo-600 dark:bg-cyan-400 mt-4 rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {services.items.map((srv) => {
            return (
              <div
                key={srv.id}
                className="p-8 rounded-xl border border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-900/30 hover:border-slate-300 dark:hover:border-slate-800 transition-all duration-300 flex flex-col justify-between text-left group relative overflow-hidden h-full shadow-sm dark:shadow-none"
              >
                {/* Visual dynamic edge accent */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-[3px] bg-indigo-600 dark:bg-cyan-400"
                />

                <div>
                  {/* Top Icon */}
                  <div className="mb-6">
                    <div className="p-3 w-fit rounded-lg bg-indigo-50 dark:bg-slate-950 border border-indigo-100 dark:border-slate-800 text-indigo-600 dark:text-cyan-400 shadow-2xs">
                      <LucideIcon name={srv.icon} size={20} />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight font-sans uppercase">
                      {srv.title}
                    </h3>
                    <p className="text-slate-700 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {srv.description}
                    </p>
                  </div>

                  {/* Features / Deliverables List */}
                  {srv.features && srv.features.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-900 space-y-3">
                      <div className="font-mono text-[9px] text-slate-500 font-semibold tracking-wider uppercase">
                        Scope & Key Capabilities
                      </div>
                      <ul className="space-y-2 text-xs">
                        {srv.features.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-slate-800 dark:text-slate-300 leading-relaxed">
                            <span className="text-indigo-600 dark:text-cyan-400 font-bold shrink-0">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-900/40 flex justify-end">
                  <a
                    href="#contact"
                    className="font-mono text-[9px] tracking-widest text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-cyan-400 flex items-center gap-1 transition-colors uppercase font-bold"
                  >
                    <span>Request Service</span>
                    <LucideIcon name="ArrowRight" size={10} />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
