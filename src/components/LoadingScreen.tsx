import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

interface LoadingScreenProps {
  config: {
    loadingText: string;
    durationMs: number;
  };
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ config, onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState("Initializing Core Engine...");

  useEffect(() => {
    const totalDuration = config.durationMs || 1500;
    const intervalMs = totalDuration / 100;
    
    const stages = [
      "Securing Secure Host...",
      "Resolving Dynamic Schemas...",
      "Syncing Typographic Grids...",
      "Calibrating Ambient Shaders...",
      "Executing Narrative Pipelines...",
      "Ready // Core Stable"
    ];

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;
        
        // Dynamic stage updates
        const stageIndex = Math.min(
          Math.floor((next / 100) * stages.length),
          stages.length - 1
        );
        setStage(stages[stageIndex]);

        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 300);
          return 100;
        }
        return next;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [config.durationMs, onComplete]);

  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col justify-between p-12 select-none bg-[#07070a]"
      style={{ fontFamily: "JetBrains Mono, monospace" }}
    >
      {/* Top Section */}
      <div className="flex justify-between items-start text-xs text-slate-500">
        <div>
          <span className="text-cyan-400">● STATUS // ACTIVE </span>
          <span className="ml-4 text-slate-600">PREVIEW PORT: 3000</span>
        </div>
        <div className="text-right">
          AURA PROTOCOL v4.1.0 // SATHISH
        </div>
      </div>

      {/* Middle Section */}
      <div className="max-w-2xl mx-auto w-full flex flex-col justify-center flex-1">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold tracking-tight text-white mb-2 uppercase"
        >
          {config.loadingText}
        </motion.div>
        
        <div className="text-xs text-slate-400 mb-6 h-4">
          {stage}
        </div>

        {/* Progress Bar Container */}
        <div className="h-[2px] bg-slate-800 w-full overflow-hidden relative rounded-full">
          <motion.div
            className="absolute left-0 top-0 h-full bg-cyan-400"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress % Text */}
        <div className="flex justify-between items-center mt-3 text-[10px] text-slate-500">
          <div>METRICS SECURED</div>
          <div className="text-cyan-400 font-bold">{progress}%</div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-end text-xs text-slate-600">
        <div>
          DESIGN DIRECTIVE: ELITE SPECULATION
        </div>
        <div>
          © 2026 SATHISH. DESIGN LEVEL AWWWARDS COHORT.
        </div>
      </div>
    </div>
  );
};
