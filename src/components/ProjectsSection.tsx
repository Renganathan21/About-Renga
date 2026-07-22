import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ProjectsInfo, ThemeConfig } from "../types";
import { LucideIcon } from "./LucideIcon";

interface ProjectsSectionProps {
  projects: ProjectsInfo;
  theme: ThemeConfig;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects, theme }) => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeTab, setActiveTab] = useState<"overview" | "challenge-solution">("overview");

  // Filter projects by category first
  const filteredProjects = projects.featured.filter(
    (proj) => selectedCategory === "All" || proj.category.toLowerCase() === selectedCategory.toLowerCase()
  );

  // Safely pick current project
  const currentProject = filteredProjects[activeProjectIndex] || filteredProjects[0] || projects.featured[0];

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setActiveProjectIndex(0);
    setActiveTab("overview");
  };

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      
      {/* Glow */}
      <div
        className="absolute w-[450px] h-[450px] blur-[150px] rounded-full pointer-events-none opacity-[0.08]"
        style={{
          background: `radial-gradient(circle, ${theme.secondaryColor} 0%, rgba(0,0,0,0) 70%)`,
          bottom: "10%",
          right: "20%",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest text-indigo-600 dark:text-cyan-400 uppercase mb-2 font-bold">
            <span>// 03</span>
            <span>{projects.title.toUpperCase()}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase font-sans">
            {projects.subtitle}
          </h2>
          <div className="h-[2px] w-20 bg-indigo-600 dark:bg-cyan-400 mt-4 rounded-full" />
        </div>

        {/* Categories Tab Filter */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-slate-200 dark:border-slate-900 pb-5 justify-start">
          {projects.categories.map((cat) => {
            const isActive = selectedCategory.toLowerCase() === cat.toLowerCase();
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-md text-xs font-mono tracking-wider transition-all duration-300 uppercase cursor-pointer ${
                  isActive
                    ? "bg-indigo-600 text-white font-bold dark:bg-cyan-400 dark:text-slate-950 shadow-xs"
                    : "bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-900 shadow-2xs dark:shadow-none"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 border border-slate-200 dark:border-slate-900 rounded-xl bg-white dark:bg-slate-900/10 text-slate-500 font-mono text-xs">
            NO PROJECTS FOUND UNDER THIS VECTOR CATEGORY
          </div>
        ) : (
          /* Master layout splits */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Projects Selection Directory list */}
            <div className="lg:col-span-4 flex flex-col space-y-3 text-left">
              <span className="font-mono text-[9px] text-slate-500 font-semibold tracking-wider uppercase mb-1">
                Select Directory Nodes
              </span>
              {filteredProjects.map((proj, idx) => {
                const isSelected = currentProject && currentProject.id === proj.id;
                return (
                  <button
                    key={proj.id}
                    onClick={() => {
                      const foundIdx = filteredProjects.findIndex((p) => p.id === proj.id);
                      if (foundIdx !== -1) {
                        setActiveProjectIndex(foundIdx);
                        setActiveTab("overview");
                      }
                    }}
                    className={`p-4 rounded-lg text-left border font-mono transition-all duration-300 w-full cursor-pointer relative overflow-hidden ${
                      isSelected
                        ? "border-indigo-600 dark:border-cyan-400/40 bg-indigo-50/80 dark:bg-slate-900 shadow-2xs"
                        : "border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-900/10 hover:border-slate-300 dark:hover:border-slate-800"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-[9px] text-slate-500 font-medium">
                        {idx + 1 < 10 ? `0${idx + 1}` : idx + 1} // {proj.status.toUpperCase()}
                      </span>
                      {isSelected && (
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-cyan-400" />
                      )}
                    </div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white tracking-wide uppercase truncate">
                      {proj.title}
                    </div>
                    <div className="text-[10px] text-slate-600 dark:text-slate-500 mt-1 truncate font-medium">
                      {proj.category} // {proj.year || "Current"}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Detailed project card showcase */}
            <div className="lg:col-span-8 rounded-xl border border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-900/20 backdrop-blur-sm overflow-hidden text-left flex flex-col shadow-sm dark:shadow-none">
              
              {/* Optional header image with subtle overlay */}
              {currentProject.thumbnail && (
                <div className="h-48 sm:h-64 w-full overflow-hidden relative border-b border-slate-200 dark:border-slate-900">
                  <img
                    src={currentProject.thumbnail}
                    alt={currentProject.title}
                    className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-100/80 dark:from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Visual Accent Pill */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-md bg-white/90 dark:bg-slate-950/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 text-[9px] font-mono text-indigo-700 dark:text-cyan-400 uppercase tracking-widest font-bold shadow-2xs">
                    {currentProject.status}
                  </div>
                </div>
              )}

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category, Year & Role Rows */}
                  <div className="flex flex-wrap gap-4 justify-between items-center border-b border-slate-200 dark:border-slate-900 pb-4 mb-6 font-mono text-[10px]">
                    <div>
                      <span className="text-slate-500">CATEGORY: </span>
                      <span className="text-indigo-600 dark:text-cyan-400 font-bold uppercase">{currentProject.category}</span>
                    </div>
                    {currentProject.role && (
                      <div>
                        <span className="text-slate-500">ROLE: </span>
                        <span className="text-slate-800 dark:text-slate-300 font-medium uppercase">{currentProject.role}</span>
                      </div>
                    )}
                    {currentProject.teamSize && (
                      <div>
                        <span className="text-slate-500">TEAM SIZE: </span>
                        <span className="text-slate-800 dark:text-slate-300 font-medium uppercase">{currentProject.teamSize}</span>
                      </div>
                    )}
                  </div>

                  {/* Sub Tab Switcher */}
                  <div className="flex border-b border-slate-200 dark:border-slate-900/60 mb-6 font-mono text-[10px]">
                    <button
                      onClick={() => setActiveTab("overview")}
                      className={`pb-3 pr-5 transition-colors border-b-2 ${
                        activeTab === "overview"
                          ? "border-indigo-600 text-indigo-600 dark:border-cyan-400 dark:text-cyan-400 font-bold"
                          : "border-transparent text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
                      }`}
                    >
                      OVERVIEW
                    </button>
                    {(currentProject.challenge || currentProject.solution) && (
                      <button
                        onClick={() => setActiveTab("challenge-solution")}
                        className={`pb-3 px-5 transition-colors border-b-2 ${
                          activeTab === "challenge-solution"
                            ? "border-indigo-600 text-indigo-600 dark:border-cyan-400 dark:text-cyan-400 font-bold"
                            : "border-transparent text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
                        }`}
                      >
                        CHALLENGE & SOLUTION
                      </button>
                    )}
                  </div>

                  {/* Content Panels with Transition animations */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentProject.id + "-" + activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-6"
                    >
                      {activeTab === "overview" && (
                        <>
                          <div>
                            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tight mb-3">
                              {currentProject.title}
                            </h3>
                            <p className="text-slate-700 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                              {currentProject.description}
                            </p>
                          </div>

                          {/* Features Grid list */}
                          {currentProject.features && currentProject.features.length > 0 && (
                            <div>
                              <div className="font-mono text-[9px] text-slate-500 uppercase tracking-wider mb-2.5 font-semibold">
                                Key Technical Capabilities
                              </div>
                              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                                {currentProject.features.map((feat) => (
                                  <li key={feat} className="flex items-start gap-2 text-slate-800 dark:text-slate-300">
                                    <span className="text-indigo-600 dark:text-cyan-400 font-bold shrink-0">✓</span>
                                    <span>{feat}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Tech stack badges */}
                          {currentProject.technologies && currentProject.technologies.length > 0 && (
                            <div>
                              <div className="font-mono text-[9px] text-slate-500 uppercase tracking-wider mb-2 font-semibold">
                                System Stack Modules
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {currentProject.technologies.map((t) => (
                                  <span
                                    key={t}
                                    className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-900 text-slate-700 dark:text-slate-400 text-[10px] font-mono shadow-2xs dark:shadow-none"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </>
                      )}

                      {activeTab === "challenge-solution" && (
                        <>
                          {currentProject.challenge && (
                            <div>
                              <div className="font-mono text-[9px] text-red-600 dark:text-red-400 uppercase tracking-wider mb-2 font-bold">
                                System Friction / Challenge
                              </div>
                              <p className="text-slate-700 dark:text-slate-400 text-xs sm:text-sm leading-relaxed p-4 rounded-lg bg-red-50/80 dark:bg-slate-950/60 border border-red-200 dark:border-red-500/10">
                                {currentProject.challenge}
                              </p>
                            </div>
                          )}

                          {currentProject.solution && (
                            <div>
                              <div className="font-mono text-[9px] text-emerald-700 dark:text-emerald-400 uppercase tracking-wider mb-2 font-bold">
                                Engineering Resolution / Solution
                              </div>
                              <p className="text-slate-800 dark:text-slate-300 text-xs sm:text-sm leading-relaxed p-4 rounded-lg bg-emerald-50/80 dark:bg-slate-950/60 border border-emerald-200 dark:border-emerald-500/10">
                                {currentProject.solution}
                              </p>
                            </div>
                          )}

                          {/* Responsibilities */}
                          {currentProject.responsibilities && currentProject.responsibilities.length > 0 && (
                            <div>
                              <div className="font-mono text-[9px] text-slate-500 uppercase tracking-wider mb-2.5 font-semibold">
                                System Role Responsibilities
                              </div>
                              <ul className="space-y-1.5 text-xs">
                                {currentProject.responsibilities.map((r) => (
                                  <li key={r} className="flex items-start gap-2 text-slate-700 dark:text-slate-400">
                                    <span className="text-indigo-600 dark:text-cyan-400/60 font-bold font-mono shrink-0">»</span>
                                    <span>{r}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Bottom links row */}
                <div className="mt-8 pt-5 border-t border-slate-200 dark:border-slate-900/60 flex flex-wrap gap-4 items-center justify-between text-xs font-mono">
                  <div className="text-slate-500 text-[10px] font-medium">
                    TIMELINE: {currentProject.year || "ACTIVE"}
                  </div>
                  
                  <div className="flex gap-4">
                    {currentProject.github && (
                      <a
                        href={currentProject.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer font-semibold"
                      >
                        <LucideIcon name="Github" size={13} />
                        <span>CODE REPO</span>
                      </a>
                    )}
                    {currentProject.demo && (
                      <a
                        href={currentProject.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-indigo-600 hover:text-indigo-800 dark:text-cyan-400 dark:hover:text-cyan-300 transition-colors cursor-pointer font-bold"
                      >
                        <LucideIcon name="ExternalLink" size={13} />
                        <span>LAUNCH DEMO</span>
                      </a>
                    )}
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
