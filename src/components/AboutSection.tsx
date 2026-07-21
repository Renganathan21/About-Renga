import React from "react";
import { motion } from "motion/react";
import { AboutInfo, ThemeConfig } from "../types";
import { LucideIcon } from "./LucideIcon";

interface AboutSectionProps {
  about: AboutInfo;
  theme: ThemeConfig;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ about, theme }) => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden bg-slate-950">
      
      {/* Dynamic glow overlay */}
      <div
        className="absolute w-[400px] h-[400px] blur-[150px] rounded-full pointer-events-none opacity-10"
        style={{
          background: `radial-gradient(circle, ${theme.secondaryColor} 0%, rgba(0,0,0,0) 70%)`,
          bottom: "10%",
          left: "5%",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest text-cyan-400 uppercase mb-2">
            <span>// 01</span>
            <span>{about.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase font-sans">
            {about.subtitle}
          </h2>
          <div className="h-[1px] w-20 bg-cyan-400 mt-4" />
        </div>

        {/* Dynamic Narrative & Achievements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            <h3 className="text-lg sm:text-xl font-bold text-slate-100 leading-relaxed font-sans">
              {about.introduction}
            </h3>
            
            {about.description.map((para, index) => (
              <p key={index} className="text-slate-400 text-sm sm:text-base leading-relaxed">
                {para}
              </p>
            ))}

            {/* Micro quote block */}
            <div className="p-5 border-l-2 border-cyan-400 bg-slate-900/40 rounded-r text-xs font-mono text-slate-300 leading-relaxed max-w-lg mt-4">
              "We do not design layouts to satisfy pixels; we engineer visual pipelines to guide decision architectures."
            </div>
          </div>

          {/* Right Achievements Stats Column */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {about.highlights.map((ach, index) => (
              <div
                key={index}
                className="p-6 rounded border border-slate-900 bg-slate-900/30 backdrop-blur-sm flex flex-col justify-between text-left group hover:border-slate-800 transition-all duration-300 hover:translate-y-[-2px] relative overflow-hidden"
              >
                {/* Background mini card glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at 80% 20%, ${theme.primaryColor}, transparent 50%)`,
                  }}
                />

                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 rounded bg-slate-950 border border-slate-800 text-cyan-400">
                    <LucideIcon name={ach.icon} size={16} />
                  </div>
                  <span className="font-mono text-[9px] text-slate-600">CAPABILITY</span>
                </div>

                <div>
                  <div className="font-sans text-sm font-extrabold text-white tracking-tight">
                    {ach.title}
                  </div>
                  {ach.description && (
                    <div className="text-[11px] text-slate-400 font-sans mt-2 leading-relaxed">
                      {ach.description}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
