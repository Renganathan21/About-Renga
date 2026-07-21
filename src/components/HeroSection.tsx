import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { HeroInfo, SiteInfo, ThemeConfig } from "../types";
import { LucideIcon } from "./LucideIcon";

interface HeroSectionProps {
  hero: HeroInfo;
  site: SiteInfo;
  theme: ThemeConfig;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ hero, site, theme }) => {
  const [typedText, setTypedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasImageError, setHasImageError] = useState(false);

  // Simple typing effect loop
  useEffect(() => {
    const currentWord = hero.typingWords[wordIndex] || "";
    let timer: NodeJS.Timeout;

    const handleType = () => {
      if (isDeleting) {
        setTypedText((prev) => prev.slice(0, -1));
        if (typedText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % hero.typingWords.length);
        }
      } else {
        setTypedText(currentWord.slice(0, typedText.length + 1));
        if (typedText === currentWord) {
          // Pause at peak
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      }
    };

    const speed = isDeleting ? 40 : 100;
    timer = setTimeout(handleType, speed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, wordIndex, hero.typingWords]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-32 pb-20 overflow-hidden"
    >
      {/* Background Decorative Vector Grids */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Floating Ambient Aurora Blob */}
      <div
        className="absolute w-[450px] h-[450px] blur-[150px] rounded-full pointer-events-none opacity-30 animate-pulse"
        style={{
          background: `radial-gradient(circle, ${theme.primaryColor} 0%, rgba(0,0,0,0) 70%)`,
          top: "15%",
          left: "20%",
        }}
      />
      <div
        className="absolute w-[380px] h-[380px] blur-[130px] rounded-full pointer-events-none opacity-20"
        style={{
          background: `radial-gradient(circle, ${theme.secondaryColor} 0%, rgba(0,0,0,0) 70%)`,
          bottom: "10%",
          right: "15%",
        }}
      />

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Typography Block */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-8 text-left">
          
          {/* Availability Status Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <span className="font-mono text-[9px] tracking-wider text-slate-300 uppercase">
              {hero.badgeText}
            </span>
          </motion.div>

          {/* Headline Statement */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-sans text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
            >
              {hero.headline}
            </motion.h1>

            {/* Synthesizer Typewriter Cursor */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-mono text-base sm:text-lg text-slate-400 flex items-center min-h-[30px]"
            >
              <span className="text-cyan-400 font-bold mr-2">//</span>
              <span>I act as a </span>
              <span className="text-white font-semibold ml-1.5 underline decoration-cyan-400 decoration-2 underline-offset-4">
                {typedText}
              </span>
              <span className="ml-1 animate-ping text-cyan-400">|</span>
            </motion.div>
          </div>

          {/* Professional Narrative Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl"
          >
            {hero.subheadline}
          </motion.p>

          {/* Quick Info Badges Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-4 border-t border-slate-900 w-full max-w-xl text-left"
          >
            <div>
              <div className="font-mono text-[9px] text-slate-500 tracking-wider uppercase">ROLE</div>
              <div className="text-xs font-semibold text-slate-200 mt-1">{site.currentRole}</div>
            </div>
            <div>
              <div className="font-mono text-[9px] text-slate-500 tracking-wider uppercase">EXPERIENCE</div>
              <div className="text-xs font-semibold text-slate-200 mt-1">{site.yearsExperience}+ Years Craft</div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="font-mono text-[9px] text-slate-500 tracking-wider uppercase">LOCATION</div>
              <div className="text-xs font-semibold text-slate-200 mt-1">{site.location}</div>
            </div>
          </motion.div>

          {/* Dynamic CTAs List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap gap-4 pt-6 w-full"
          >
            {hero.ctas.map((cta, index) => {
              const isPrimary = cta.type === "primary";
              const isAccent = cta.type === "accent";
              
              return (
                <a
                  key={index}
                  href={cta.href}
                  className={`px-6 py-3.5 rounded-full font-mono text-xs tracking-wider uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                    isPrimary
                      ? "bg-white text-slate-950 font-bold hover:bg-slate-200 shadow-xl"
                      : isAccent
                      ? "bg-slate-900 text-cyan-400 border border-cyan-500/30 hover:border-cyan-400"
                      : "bg-slate-950 text-slate-300 border border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <LucideIcon name={cta.icon} size={13} />
                  <span>{cta.label}</span>
                </a>
              );
            })}
          </motion.div>

        </div>

        {/* Right Graphic Frame */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          
          {/* Circular Frame */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
            className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden border border-slate-800 p-2 bg-slate-900/30 backdrop-blur-sm shadow-2xl"
          >
            <div className="w-full h-full rounded-full overflow-hidden relative bg-slate-950 flex items-center justify-center">
              {(!hasImageError && !hero.profileImage.includes("photos.app.goo.gl")) ? (
                <img
                  src={hero.profileImage}
                  alt={site.title}
                  referrerPolicy="no-referrer"
                  onError={() => setHasImageError(true)}
                  className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700"
                />
              ) : (
                <div className="flex flex-col items-center justify-center space-y-4 p-8 w-full h-full rounded-full bg-gradient-to-b from-slate-950 to-slate-900 text-center relative overflow-hidden group">
                  {/* Glowing cyber grid pattern in background */}
                  <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#22d3ee_1px,transparent_1px)] [background-size:16px_16px]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/20 via-transparent to-transparent opacity-40" />
                  
                  {/* Tech/author styled avatar icon/initials */}
                  <div className="relative z-10 w-24 h-24 rounded-full border border-cyan-500/20 flex items-center justify-center bg-slate-950/80 shadow-[0_0_15px_rgba(34,211,238,0.1)] group-hover:border-cyan-400 transition-colors duration-500">
                    <span className="text-4xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 font-sans">
                      AR
                    </span>
                  </div>
                  <div className="relative z-10 space-y-1">
                    <div className="font-mono text-[10px] tracking-widest text-cyan-400 font-bold uppercase">A. RENGANATHAN</div>
                    <div className="font-mono text-[8px] tracking-widest text-slate-500 uppercase">ENGINEER & AUTHOR</div>
                  </div>
                </div>
              )}
              {/* Overlay filter */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0E] via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>

            {/* Glowing Orbit Rings */}
            <div
              className="absolute inset-0 rounded-full border border-dashed animate-spin pointer-events-none"
              style={{
                borderColor: `${theme.primaryColor}20`,
                animationDuration: "40s",
              }}
            />
            <div
              className="absolute -inset-4 rounded-full border border-dashed animate-spin pointer-events-none"
              style={{
                borderColor: `${theme.secondaryColor}15`,
                animationDuration: "60s",
                animationDirection: "reverse",
              }}
            />
          </motion.div>

          {/* Atmospheric Telemetry Readout Box (Marginal Details) */}
          <div className="absolute bottom-[-10px] right-[-10px] sm:bottom-4 sm:right-4 p-4 rounded bg-slate-950/90 border border-slate-800 font-mono text-[9px] text-slate-500 leading-relaxed text-left w-48 shadow-lg backdrop-blur-sm pointer-events-none select-none">
            <div className="text-cyan-400 font-bold mb-1">AURA DIAGNOSTICS</div>
            <div>STATION: LOCAL_WS_SG</div>
            <div>SYS_LOAD: CALIBRATED</div>
            <div>COORDINATES: 1.3521° N, 103.8198° E</div>
            <div>STATUS: ONLINE // ENHANCED</div>
          </div>

        </div>

      </div>
    </section>
  );
};
