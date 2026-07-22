import React from "react";
import { SkillsInfo, SkillLevel, ThemeConfig } from "../types";
import { LucideIcon } from "./LucideIcon";

interface SkillsSectionProps {
  skills: SkillsInfo;
  skillLevels: SkillLevel[];
  theme: ThemeConfig;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills, skillLevels, theme }) => {
  // Helper to map 0-100 percentage to professional tiers and count of active indicator blocks
  const getProfessionalTier = (percentage: number) => {
    if (percentage >= 95) {
      return {
        label: "PRINCIPAL ARCHITECT",
        blocks: 5,
        status: "CORE AUTHORITY",
        description: "Enterprise system design, standard setting, and advanced R&D."
      };
    } else if (percentage >= 85) {
      return {
        label: "LEAD ENGINEER",
        blocks: 4,
        status: "PRODUCTION LEAD",
        description: "Advanced implementation, architecture design, and direct orchestration."
      };
    } else if (percentage >= 75) {
      return {
        label: "SENIOR SPECIALIST",
        blocks: 3,
        status: "ACTIVE EXPERTISE",
        description: "Complex system integration, optimal patterns, and deep domain focus."
      };
    } else {
      return {
        label: "PROFESSIONAL PRACTITIONER",
        blocks: 2,
        status: "PROFICIENT OPERATOR",
        description: "Standard implementations, reliable deployments, and system maintenance."
      };
    }
  };

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden bg-slate-950">
      
      {/* Dynamic glow overlay */}
      <div
        className="absolute w-[400px] h-[400px] blur-[150px] rounded-full pointer-events-none opacity-5"
        style={{
          background: `radial-gradient(circle, ${theme.accentColor} 0%, rgba(0,0,0,0) 70%)`,
          top: "10%",
          right: "20%",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest text-cyan-400 uppercase mb-2">
            <span>// 05</span>
            <span>{skills.title.toUpperCase()} MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase font-sans">
            {skills.subtitle}
          </h2>
          <div className="h-[1px] w-20 bg-cyan-400 mt-4" />
        </div>

        {/* Master layout: Professional Core Levels on left, Categorized taxonomy on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Unique Segmented Professional Core Levels (5 cols) */}
          <div className="lg:col-span-5 p-6 rounded border border-slate-900 bg-slate-950/60 backdrop-blur-md space-y-6 text-left">
            <div className="border-b border-slate-900 pb-4">
              <h3 className="font-mono text-[10px] font-bold text-cyan-400 tracking-widest uppercase flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                <span>CORE CAPABILITY LEVELS</span>
              </h3>
              <p className="text-[10px] text-slate-500 font-sans mt-1 uppercase tracking-wider">
                Ranked by real-world system architecture authority
              </p>
            </div>

            <div className="space-y-6">
              {skillLevels.map((skill) => {
                const tier = getProfessionalTier(skill.percentage);
                return (
                  <div
                    key={skill.name}
                    className="group/item p-4 rounded bg-slate-900/20 border border-slate-900/60 hover:border-slate-800 transition-all duration-300 space-y-3"
                  >
                    {/* Header: Skill Name & Professional Badge */}
                    <div className="flex justify-between items-start gap-4">
                      <div className="space-y-0.5">
                        <span className="font-sans text-sm font-bold text-slate-100 tracking-wide uppercase block group-hover/item:text-cyan-300 transition-colors">
                          {skill.name}
                        </span>
                        <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest block">
                          SYSTEM VECTOR STATUS: {tier.status}
                        </span>
                      </div>

                      <span className="px-2 py-0.5 rounded bg-slate-950 border border-slate-900 text-cyan-400 font-mono text-[9px] font-bold tracking-widest uppercase shrink-0">
                        {tier.label}
                      </span>
                    </div>

                    {/* Segmented blocks display (No percentage progress bars) */}
                    <div className="flex items-center gap-1.5">
                      {Array.from({ length: 5 }).map((_, blockIdx) => {
                        const isActive = blockIdx < tier.blocks;
                        return (
                          <div
                            key={blockIdx}
                            className={`h-[6px] flex-1 rounded-sm transition-all duration-500 ${
                              isActive
                                ? "bg-gradient-to-r from-cyan-500 to-indigo-500 shadow-[0_0_8px_rgba(34,211,238,0.2)]"
                                : "bg-slate-900 border border-slate-800"
                            }`}
                          />
                        );
                      })}
                    </div>

                    {/* Tier Capability description */}
                    <p className="text-[11px] text-slate-400 leading-relaxed font-sans pt-1">
                      {tier.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Categorized Taxonomy Badges (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.categories.map((cat) => (
              <div
                key={cat.title}
                className="p-6 rounded border border-slate-900 bg-slate-900/10 backdrop-blur-sm space-y-4 hover:border-slate-800 transition-all duration-300 text-left relative overflow-hidden group"
              >
                {/* Micro visual accent corner line */}
                <div className="absolute right-0 top-0 w-8 h-[1px] bg-cyan-500/20 group-hover:bg-cyan-400/50 transition-colors" />
                <div className="absolute right-0 top-0 h-8 w-[1px] bg-cyan-500/20 group-hover:bg-cyan-400/50 transition-colors" />

                <div className="flex items-center gap-2 text-cyan-400">
                  <div className="p-1.5 rounded bg-slate-950 border border-slate-900">
                    <LucideIcon name={cat.icon} size={13} />
                  </div>
                  <h4 className="font-sans text-xs font-extrabold uppercase tracking-widest text-white">
                    {cat.title}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded bg-slate-950 text-slate-400 border border-slate-900/80 hover:border-slate-800 hover:text-white text-[10px] font-mono transition-all duration-200 uppercase tracking-wider"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

