import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { NavItem, SiteInfo } from "../types";
import { LucideIcon } from "./LucideIcon";

interface NavbarProps {
  site: SiteInfo;
  items: NavItem[];
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ site, items, isDarkMode, onToggleTheme }) => {
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
          ? "py-3 bg-white/90 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-900 shadow-sm dark:shadow-lg"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Text */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="font-mono text-xs font-bold tracking-widest text-slate-900 dark:text-white hover:opacity-80 transition-opacity flex items-center gap-2"
        >
          <div className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-cyan-400" />
          <span>{site.logoText}</span>
        </a>

        {/* Navigation Items (Desktop) */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 dark:bg-slate-900/40 p-1 rounded-full border border-slate-200/90 dark:border-slate-800/80 backdrop-blur-sm shadow-xs dark:shadow-none">
          {items.map((item) => {
            const isCurrent = activeAnchor === item.href;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-4 py-1.5 rounded-full font-mono text-[10px] tracking-wider uppercase transition-colors duration-300 flex items-center gap-1.5 ${
                  isCurrent
                    ? "text-white font-bold bg-indigo-600 dark:bg-white dark:text-slate-950 shadow-xs"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                }`}
              >
                <LucideIcon name={item.icon} size={11} />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Compact Right Side Status & Theme Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/40 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors cursor-pointer text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white shadow-xs dark:shadow-none flex items-center justify-center"
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <LucideIcon name="Sun" size={13} /> : <LucideIcon name="Moon" size={13} />}
          </button>

          <div className="hidden sm:flex items-center gap-2">
            <div className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                site.availabilityStatus === "available"
                  ? "bg-emerald-500"
                  : site.availabilityStatus === "busy"
                  ? "bg-red-500"
                  : "bg-amber-500"
              }`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${
                site.availabilityStatus === "available"
                  ? "bg-emerald-500"
                  : site.availabilityStatus === "busy"
                  ? "bg-red-500"
                  : "bg-amber-500"
              }`}></span>
            </div>
            <span className="font-mono text-[9px] text-slate-600 dark:text-slate-400 font-semibold tracking-wider uppercase">
              {site.availabilityText}
            </span>
          </div>
        </div>
      </div>
    </motion.header>
  );
};
