import React, { useState } from "react";
import { ExperienceInfo, ThemeConfig } from "../types";
import { LucideIcon } from "./LucideIcon";

interface ExperienceSectionProps {
  experience: ExperienceInfo;
  theme: ThemeConfig;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience, theme }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const currentJob = experience.items[activeIndex] || experience.items[0];

  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden bg-slate-950">
      {/* Dynamic glow overlay */}
      <div
        className="absolute w-[450px] h-[450px] blur-[150px] rounded-full pointer-events-none opacity-5"
        style={{
          background: `radial-gradient(circle, ${theme.primaryColor} 0%, rgba(0,0,0,0) 70%)`,
          top: "20%",
          left: "10%",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest text-cyan-400 uppercase mb-2">
            <span>// 02</span>
            <span>{experience.title.toUpperCase()}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase font-sans">
            {experience.subtitle}
          </h2>
          <div className="h-[1px] w-20 bg-cyan-400 mt-4" />
        </div>

        {/* Workspace Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Left Column: Interactive Tab Buttons */}
          <div className="lg:col-span-4 flex flex-col space-y-2">
            <span className="font-mono text-[9px] text-slate-500 tracking-wider uppercase mb-1">
              Select Operating Station
            </span>

            {experience.items.map((job, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={job.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`p-4 rounded border transition-all duration-300 font-mono text-left relative overflow-hidden flex flex-col gap-1 cursor-pointer ${
                    isActive
                      ? "border-cyan-400/40 bg-slate-900"
                      : "border-slate-900 bg-slate-900/10 hover:border-slate-800"
                  }`}
                >
                  <div className="flex justify-between items-center text-[9px] text-slate-500">
                    <span>{job.duration}</span>
                    {job.current && (
                      <span className="text-cyan-400 font-bold">CURRENT</span>
                    )}
                  </div>
                  <div className="text-xs font-bold text-white uppercase tracking-wide truncate">
                    {job.position}
                  </div>
                  <div className="text-[10px] text-slate-400 truncate">
                    {job.company} // {job.location}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Experience Panel */}
          {currentJob && (
            <div className="lg:col-span-8 p-6 sm:p-8 rounded border border-slate-900 bg-slate-900/10 backdrop-blur-sm space-y-6">
              
              {/* Header Row */}
              <div className="border-b border-slate-900 pb-5">
                <div className="flex flex-wrap gap-4 justify-between items-start">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white uppercase tracking-tight">
                      {currentJob.position}
                    </h3>
                    <div className="flex items-center gap-2 mt-1.5 font-mono text-xs text-cyan-400">
                      <span className="font-bold uppercase">{currentJob.company}</span>
                      <span className="text-slate-600">//</span>
                      <span className="text-slate-400">{currentJob.duration}</span>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-900 text-[9px] font-mono text-slate-400 uppercase tracking-widest">
                    {currentJob.workMode} // {currentJob.employmentType}
                  </span>
                </div>
              </div>

              {/* Core Description */}
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                {currentJob.description}
              </p>

              {/* Responsibilities list */}
              {currentJob.responsibilities && currentJob.responsibilities.length > 0 && (
                <div className="space-y-3">
                  <div className="font-mono text-[9px] text-slate-500 tracking-wider uppercase">
                    Key Contributions & Actions
                  </div>
                  <ul className="space-y-2.5 text-xs">
                    {currentJob.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-slate-400 leading-relaxed">
                        <span className="text-cyan-400 font-bold font-mono shrink-0">»</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies deployed */}
              {currentJob.technologies && currentJob.technologies.length > 0 && (
                <div className="space-y-2 pt-4 border-t border-slate-900/60">
                  <div className="font-mono text-[9px] text-slate-500 tracking-wider uppercase">
                    Deployed Technologies
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentJob.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-slate-950 border border-slate-900 text-slate-400 text-[10px] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Projects deployed */}
              {currentJob.projects && currentJob.projects.length > 0 && (
                <div className="space-y-2 pt-4">
                  <div className="font-mono text-[9px] text-slate-500 tracking-wider uppercase">
                    Major Projects & Deliverables
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentJob.projects.map((proj) => (
                      <span
                        key={proj}
                        className="px-2.5 py-1 rounded bg-slate-950 border border-cyan-400/20 text-slate-300 text-[10px] font-mono"
                      >
                        {proj}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
