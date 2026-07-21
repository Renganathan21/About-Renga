import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TimelineInfo, ThemeConfig } from "../types";
import { LucideIcon } from "./LucideIcon";

interface TimelineSectionProps {
  timeline: TimelineInfo;
  theme: ThemeConfig;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ timeline, theme }) => {
  const [filter, setFilter] = useState<string>("All");

  // Dynamically extract categories present in the timeline data
  const categories: string[] = ["All", ...(Array.from(new Set(timeline.items.map((item) => item.category))) as string[])];

  const filteredItems = timeline.items.filter(
    (item) => filter === "All" || item.category === filter
  );

  return (
    <section id="timeline" className="py-24 px-6 relative overflow-hidden bg-slate-950">
      
      {/* Glow overlay */}
      <div
        className="absolute w-[400px] h-[400px] blur-[150px] rounded-full pointer-events-none opacity-[0.04]"
        style={{
          background: `radial-gradient(circle, ${theme.primaryColor} 0%, rgba(0,0,0,0) 70%)`,
          bottom: "10%",
          left: "20%",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest text-cyan-400 uppercase mb-2">
            <span>// 05</span>
            <span>{timeline.title.toUpperCase()}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase font-sans">
            {timeline.subtitle}
          </h2>
          <div className="h-[1px] w-20 bg-cyan-400 mt-4" />
        </div>

        {/* Filter categories bar */}
        <div className="flex flex-wrap gap-2 justify-start mb-12 font-mono text-[10px]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full border transition-all duration-300 cursor-pointer ${
                filter === cat
                  ? "bg-white text-slate-950 border-white font-bold"
                  : "bg-slate-900/40 text-slate-400 border-slate-900 hover:border-slate-800 hover:text-slate-200"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Vertical Line Timeline core structure */}
        <div className="relative border-l border-slate-900 ml-4 md:ml-32 text-left">
          
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              return (
                <motion.div
                  key={item.year + "-" + item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="mb-12 relative pl-8 md:pl-16 last:mb-0 group"
                >
                  {/* Left Year Badge (Desktop only) */}
                  <div className="absolute left-[-140px] top-1.5 hidden md:block w-28 text-right font-mono font-extrabold text-lg text-slate-500 group-hover:text-cyan-400 transition-colors">
                    {item.year}
                  </div>

                  {/* Bullet Marker with custom category icon */}
                  <div
                    className="absolute left-[-10px] top-2 h-5 w-5 rounded-full border bg-slate-950 transition-all duration-300 group-hover:scale-110 flex items-center justify-center p-0.5 text-cyan-400 border-cyan-400"
                  >
                    <LucideIcon name={item.icon || "Award"} size={10} />
                  </div>

                  {/* Body Box */}
                  <div className="p-6 rounded border border-slate-900 bg-slate-900/10 backdrop-blur-sm hover:border-slate-800 transition-all duration-300">
                    <div className="flex flex-wrap justify-between items-center gap-2 mb-2 font-mono text-[10px]">
                      {/* Mobile Year Badge */}
                      <span className="md:hidden font-bold text-cyan-400">{item.year}</span>
                      
                      <span className="px-2 py-0.5 rounded border border-cyan-500/20 uppercase bg-slate-950/80 font-bold text-cyan-400">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-tight mb-2 font-sans">
                      {item.title}
                    </h3>

                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {filteredItems.length === 0 && (
            <div className="p-12 text-center text-slate-500 font-mono text-xs">
              No milestones found in this category projection.
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
