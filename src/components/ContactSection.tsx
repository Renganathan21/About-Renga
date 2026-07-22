import React, { useState, useEffect } from "react";
import { ContactInfo, SocialLink, ThemeConfig } from "../types";
import { LucideIcon } from "./LucideIcon";

interface ContactSectionProps {
  contact: ContactInfo;
  socials: SocialLink[];
  theme: ThemeConfig;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ contact, socials, theme }) => {
  const [formState, setFormState] = useState({ name: "", email: "", org: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  // Keep a digital clock of IST timezone
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format to IST/UTC or local time
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          timeZone: "Asia/Kolkata",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    // Simulate teletransmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", org: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden bg-slate-950">
      
      {/* Decorative top grid lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

      {/* Glow */}
      <div
        className="absolute w-[500px] h-[500px] blur-[180px] rounded-full pointer-events-none opacity-[0.08]"
        style={{
          background: `radial-gradient(circle, ${theme.primaryColor} 0%, rgba(0,0,0,0) 70%)`,
          top: "30%",
          left: "25%",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest text-cyan-400 uppercase mb-2">
            <span>// 09</span>
            <span>CONTACT PIPELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase font-sans">
            {contact.title}
          </h2>
          <div className="h-[1px] w-20 bg-cyan-400 mt-4" />
        </div>

        {/* Master splits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Metadata column (Available status clocks) */}
          <div className="lg:col-span-5 flex flex-col space-y-8 text-left">
            <div>
              <h3 className="text-xl font-extrabold text-white uppercase tracking-tight mb-2">
                Let's Build Something Together
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
                {contact.subtitle}
              </p>
            </div>

            {/* Diagnostics Stats and Availability */}
            <div className="space-y-4 font-mono text-xs max-w-sm">
              <div className="p-4 bg-slate-900/40 border border-slate-900/80 rounded flex justify-between items-center">
                <span className="text-slate-500">STATION TIME:</span>
                <span className="text-cyan-400 font-bold">{currentTime} IST</span>
              </div>
              <div className="p-4 bg-slate-900/40 border border-slate-900/80 rounded flex justify-between items-center">
                <span className="text-slate-500">RESPONSE WINDOW:</span>
                <span className="text-slate-200 font-bold">UNDER 24 HOURS</span>
              </div>
              <div className="p-4 bg-slate-900/40 border border-slate-900/80 rounded flex justify-between items-center">
                <span className="text-slate-500">COORDINATES:</span>
                <span className="text-slate-200 font-bold">{contact.location ? contact.location.toUpperCase() : "TIRUNELVELI, INDIA"}</span>
              </div>
            </div>

            {/* Direct communication options */}
            <div className="space-y-2 text-xs font-mono">
              <div className="text-slate-500 uppercase tracking-wider text-[9px] mb-3">Direct Ingress Pipes</div>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors cursor-pointer">
                <LucideIcon name="Mail" size={13} className="text-cyan-400" />
                <span>{contact.email}</span>
              </a>
            </div>

            {/* Social Network coordinates */}
            {socials && socials.length > 0 && (
              <div className="pt-4 border-t border-slate-900/60 max-w-xs">
                <div className="text-slate-500 uppercase tracking-wider text-[9px] mb-4 font-mono">Coordinate Nodes</div>
                <div className="flex gap-4">
                  {socials.map((soc) => {
                    // Match social icon to lucide icons cleanly
                    let iconName = soc.icon || "Link";
                    if (soc.platform.toLowerCase().includes("github")) iconName = "Github";
                    if (soc.platform.toLowerCase().includes("linkedin")) iconName = "Linkedin";
                    if (soc.platform.toLowerCase().includes("twitter") || soc.platform.toLowerCase().includes("x")) iconName = "Twitter";
                    if (soc.platform.toLowerCase().includes("telegram")) iconName = "Send";

                    return (
                      <a
                        key={soc.platform}
                        href={soc.url}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded bg-slate-900 hover:bg-slate-800 border border-slate-900 text-slate-400 hover:text-white transition-colors cursor-pointer"
                        title={soc.platform}
                      >
                        <LucideIcon name={iconName} size={15} />
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Right Core animated Form card */}
          <div className="lg:col-span-7 p-8 rounded border border-slate-900 bg-slate-900/20 backdrop-blur-sm relative text-left">
            {submitted ? (
              <div className="py-16 text-center space-y-6">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-cyan-500/10 border border-cyan-400 text-cyan-400 animate-pulse">
                  <LucideIcon name="Check" size={28} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-mono text-base font-bold text-white uppercase tracking-widest">
                    TRANSMISSION ACQUIRED
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                    The envelope parameters have been cataloged. A. Renganathan will sync with your coordinates in less than 24 hours.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 rounded bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 font-mono text-[10px] tracking-wider uppercase cursor-pointer"
                >
                  Initiate Another Sync
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Form fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2 text-left">
                    <label className="block font-mono text-[9px] text-slate-500 uppercase tracking-wider">
                      Coordinate Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Elena Vance"
                      className="w-full px-4 py-3 bg-slate-950/80 border border-slate-900 rounded focus:border-cyan-400/50 text-slate-200 text-xs focus:outline-none focus:ring-0 transition-all font-mono"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2 text-left">
                    <label className="block font-mono text-[9px] text-slate-500 uppercase tracking-wider">
                      Secure Mail Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. elena@aetherlabs.com"
                      className="w-full px-4 py-3 bg-slate-950/80 border border-slate-900 rounded focus:border-cyan-400/50 text-slate-200 text-xs focus:outline-none focus:ring-0 transition-all font-mono"
                    />
                  </div>
                </div>

                {/* Organization Field */}
                <div className="space-y-2 text-left">
                  <label className="block font-mono text-[9px] text-slate-500 uppercase tracking-wider">
                    Organization / Venture URL
                  </label>
                  <input
                    type="text"
                    value={formState.org}
                    onChange={(e) => setFormState({ ...formState, org: e.target.value })}
                    placeholder="e.g. Aether Labs Corporation"
                    className="w-full px-4 py-3 bg-slate-950/80 border border-slate-900 rounded focus:border-cyan-400/50 text-slate-200 text-xs focus:outline-none focus:ring-0 transition-all font-mono"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2 text-left">
                  <label className="block font-mono text-[9px] text-slate-500 uppercase tracking-wider">
                    Synthesis Parameters / Core Brief *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Describe your system friction points or literary world outlines..."
                    className="w-full px-4 py-3 bg-slate-950/80 border border-slate-900 rounded focus:border-cyan-400/50 text-slate-200 text-xs focus:outline-none focus:ring-0 transition-all font-mono resize-none leading-relaxed"
                  />
                </div>

                {/* Submission CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 ${
                    isSubmitting
                      ? "bg-slate-800 text-slate-500 cursor-wait"
                      : "bg-white hover:bg-slate-200 text-slate-950 shadow-xl"
                  }`}
                >
                  <LucideIcon name={isSubmitting ? "Activity" : "Send"} size={13} className={isSubmitting ? "animate-spin text-cyan-400" : ""} />
                  <span>{isSubmitting ? "TRANSMITTING SIGNALS..." : (contact.ctaText || "Send Message").toUpperCase()}</span>
                </button>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
