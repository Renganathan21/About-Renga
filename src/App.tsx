import React, { useState, useEffect } from "react";
import { defaultPortfolio } from "./data/defaultPortfolio";
import { PortfolioData } from "./types";

// Component imports
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { SkillsSection } from "./components/SkillsSection";
import { ServicesSection } from "./components/ServicesSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { BooksSection } from "./components/BooksSection";
import { TimelineSection } from "./components/TimelineSection";
import { ProcessSection } from "./components/ProcessSection";
import { FAQSection } from "./components/FAQSection";
import { ContactSection } from "./components/ContactSection";
import { CursorGlow } from "./components/CursorGlow";
import { LoadingScreen } from "./components/LoadingScreen";
import { LucideIcon } from "./components/LucideIcon";

export default function App() {
  // Static state locked to defaultPortfolio as requested (not configurable by everyone)
  const [portfolioData] = useState<PortfolioData>(defaultPortfolio);
  const [isLoading, setIsLoading] = useState(true);

  // Set the document title and description from dynamic SEO config on mount
  useEffect(() => {
    if (portfolioData.seo) {
      document.title = portfolioData.seo.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", portfolioData.seo.description);
      }
    }
  }, [portfolioData.seo]);

  // Generate dynamic custom styling block mapping colors from theme directly
  const themeStyles = `
    :root {
      --primary: ${portfolioData.theme.primaryColor};
      --secondary: ${portfolioData.theme.secondaryColor};
      --accent: ${portfolioData.theme.accentColor};
      --bg: ${portfolioData.theme.backgroundColor};
      --card: ${portfolioData.theme.cardBackgroundColor};
      --text: ${portfolioData.theme.textColor};
    }
    body {
      background-color: ${portfolioData.theme.backgroundColor};
      color: ${portfolioData.theme.textColor};
      transition: background-color 0.5s ease, color 0.5s ease;
    }
    
    ::selection {
      background-color: ${portfolioData.theme.primaryColor};
      color: #000000;
    }
  `;

  // Dynamic loaders
  const loadingConfig = {
    loadingText: `INITIALIZING ${portfolioData.site.title.toUpperCase()} PROTOCOL...`,
    durationMs: 1500,
  };

  const cursorConfig = {
    enableGlow: true,
    glowSize: 320,
    glowColor: `${portfolioData.theme.primaryColor}1a`, // Primary color with alpha opacity
  };

  if (isLoading) {
    return (
      <LoadingScreen
        config={loadingConfig}
        onComplete={() => setIsLoading(false)}
      />
    );
  }

  return (
    <div
      className="relative min-h-screen selection:bg-cyan-400 selection:text-slate-950 overflow-x-hidden"
      style={{ backgroundColor: portfolioData.theme.backgroundColor }}
    >
      {/* Dynamic Style Injection */}
      <style dangerouslySetInnerHTML={{ __html: themeStyles }} />

      {/* Interactive Cursor Glow */}
      <CursorGlow config={cursorConfig} />

      {/* Floating Header Navbar */}
      <Navbar site={portfolioData.site} items={portfolioData.navigation} />

      {/* Main Portfolio Sections */}
      <main className="relative z-10">
        
        {/* Hero Landing */}
        <HeroSection
          hero={portfolioData.hero}
          site={portfolioData.site}
          theme={portfolioData.theme}
        />

        {/* Statistics block inline ribbon */}
        <section className="bg-slate-950 py-16 px-6 border-y border-slate-900/60 relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {portfolioData.statistics.map((stat) => (
              <div
                key={stat.label}
                className="text-left space-y-1 p-5 rounded border border-slate-900 bg-slate-900/10 hover:border-slate-800 transition-all duration-300 relative overflow-hidden group"
              >
                {/* Micro accent block */}
                <div className="p-2 w-fit rounded bg-slate-950 border border-slate-900 text-cyan-400 mb-2">
                  <LucideIcon name={stat.icon} size={14} />
                </div>
                <div className="font-mono text-2xl font-extrabold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="font-sans text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About Biography */}
        <AboutSection about={portfolioData.about} theme={portfolioData.theme} />

        {/* Professional Work Experience Station */}
        <ExperienceSection experience={portfolioData.experience} theme={portfolioData.theme} />

        {/* Engineered Artifacts Projects Directory */}
        <ProjectsSection projects={portfolioData.projects} theme={portfolioData.theme} />

        {/* Speculative Fiction Published Bookshelf */}
        <BooksSection books={portfolioData.books} theme={portfolioData.theme} />

        {/* Services & Capability Offerings */}
        <ServicesSection services={portfolioData.services} theme={portfolioData.theme} />

        {/* Technical Proficiency Skills Matrix */}
        <SkillsSection
          skills={portfolioData.skills}
          skillLevels={portfolioData.skillLevels}
          theme={portfolioData.theme}
        />

        {/* Milestones Journey Timeline */}
        <TimelineSection timeline={portfolioData.timeline} theme={portfolioData.theme} />

        {/* Operational Workflow Pipeline */}
        <ProcessSection process={portfolioData.workProcess} theme={portfolioData.theme} />

        {/* Diagnostic Query FAQ Accordion */}
        {portfolioData.faq && (
          <FAQSection faq={portfolioData.faq} theme={portfolioData.theme} />
        )}

        {/* Ingress Contact Form console */}
        <ContactSection
          contact={portfolioData.contact}
          socials={portfolioData.socials}
          theme={portfolioData.theme}
        />

      </main>

      {/* Footer Branding Area */}
      <footer className="py-16 px-6 bg-[#050508] border-t border-slate-900 text-left relative z-10 font-mono text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white font-extrabold tracking-widest uppercase">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>{portfolioData.footer.brand}</span>
            </div>
            <p className="text-[10px] text-slate-400 max-w-sm font-sans leading-relaxed">
              {portfolioData.footer.description}
            </p>
            <p className="text-[10px] text-slate-600 italic">
              "{portfolioData.footer.quote}"
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-3 text-[10px]">
            <div className="flex gap-4">
              {portfolioData.footer.quickLinks.map((link) => (
                <a key={link.title} href={link.href} className="hover:text-cyan-400 transition-colors cursor-pointer uppercase">
                  {link.title}
                </a>
              ))}
            </div>
            <div>
              {portfolioData.footer.copyright.text}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
