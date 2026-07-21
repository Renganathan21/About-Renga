import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { NavItem, SiteInfo } from "../types";
import { LucideIcon } from "./LucideIcon";

interface NavbarProps {
  site: SiteInfo;
  items: NavItem[];
}

export const Navbar: React.FC<NavbarProps> = ({ site, items }) => {
  const [activeAnchor, setActiveAnchor] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Determine active section based on scroll offset
      const sections = items.map((item) => item.href.replace("#", ""));
      const offsets = sections.map((id) => {
        const el = document.getElementById(id);
        return el ? { id, top: el.offsetTop - 120 } : null;
      }).filter(Boolean) as { id: string; top: number }[];

      const currentScroll = window.scrollY;
      let active = "#home";
      for (let i = 0; i < offsets.length; i++) {
        if (currentScroll >= offsets[i].top) {
          active = `#${offsets[i].id}`;
        }
      }
      setActiveAnchor(active);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
      setActiveAnchor(href);
    }
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-slate-950/80 backdrop-blur-md border-b border-slate-900 shadow-lg"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Text */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="font-mono text-xs font-bold tracking-widest text-white hover:opacity-80 transition-opacity flex items-center gap-2"
        >
          <div className="w-2 h-2 rounded-full bg-cyan-400" />
          <span>{site.logoText}</span>
        </a>

        {/* Navigation Items (Desktop) */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/40 p-1 rounded-full border border-slate-800/80 backdrop-blur-sm">
          {items.map((item) => {
            const isCurrent = activeAnchor === item.href;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-4 py-1.5 rounded-full font-mono text-[10px] tracking-wider uppercase transition-colors duration-300 flex items-center gap-1.5 ${
                  isCurrent
                    ? "text-slate-950 font-bold bg-white"
                    : "text-slate-400 hover:text-slate-100"
                }`}
              >
                <LucideIcon name={item.icon} size={11} />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Compact Right Side Status Indicator */}
        <div className="hidden sm:flex items-center gap-2">
          <div className="relative flex h-2 w-2">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
              site.availabilityStatus === "available"
                ? "bg-emerald-400"
                : site.availabilityStatus === "busy"
                ? "bg-red-400"
                : "bg-amber-400"
            }`}></span>
            <span className={`relative inline-flex rounded-full h-2 w-2 ${
              site.availabilityStatus === "available"
                ? "bg-emerald-400"
                : site.availabilityStatus === "busy"
                ? "bg-red-400"
                : "bg-amber-400"
            }`}></span>
          </div>
          <span className="font-mono text-[9px] text-slate-400 tracking-wider uppercase">
            {site.availabilityText}
          </span>
        </div>
      </div>
    </motion.header>
  );
};
