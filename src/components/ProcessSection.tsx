import React from "react";
import { WorkProcess, ThemeConfig } from "../types";

interface ProcessSectionProps {
  process: WorkProcess;
  theme: ThemeConfig;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ process, theme }) => {
  return (
    <section id="process" className="py-24 px-6 relative overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      
      {/* Dynamic background lighting */}
      <div
        className="absolute w-[500px] h-[500px] blur-[170px] rounded-full pointer-events-none opacity-5"
        style={{
          background: `radial-gradient(circle, ${theme.primaryColor} 0%, rgba(0,0,0,0) 70%)`,
          bottom: "10%",
          right: "5%",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest text-indigo-600 dark:text-cyan-400 uppercase mb-2 font-bold">
            <span>// 07</span>
            <span>OPERATIONAL PIPELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase font-sans">
            {process.title}
          </h2>
          <div className="h-[2px] w-20 bg-indigo-600 dark:bg-cyan-400 mt-4 rounded-full" />
        </div>

        {/* Process Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch text-left">
          {process.steps.map((flow) => (
            <div
              key={flow.step}
              className="p-6 rounded-xl border border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-900/10 hover:border-slate-300 dark:hover:border-slate-800 transition-all duration-300 relative flex flex-col justify-between shadow-2xs dark:shadow-none"
            >
              {/* Corner Step count decoration */}
              <div className="absolute right-6 top-6 font-mono text-3xl font-extrabold text-slate-300/60 dark:text-slate-800/40 select-none">
                {flow.step}
              </div>

              <div>
                <span className="font-mono text-[9px] font-bold text-indigo-600 dark:text-cyan-400 bg-indigo-50 dark:bg-slate-950 px-2.5 py-1 rounded-md border border-indigo-100 dark:border-slate-900 uppercase inline-block">
                  PHASE 0{flow.step}
                </span>

                <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-tight mt-6 mb-3 font-sans">
                  {flow.title}
                </h3>

                <p className="text-slate-700 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {flow.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
