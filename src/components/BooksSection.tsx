import React, { useState } from "react";
import { BooksInfo, ThemeConfig } from "../types";
import { LucideIcon } from "./LucideIcon";

interface BooksSectionProps {
  books: BooksInfo;
  theme: ThemeConfig;
}

export const BooksSection: React.FC<BooksSectionProps> = ({ books, theme }) => {
  const [activeBookIndex, setActiveBookIndex] = useState(0);

  const currentBook = books.items[activeBookIndex] || books.items[0];

  return (
    <section id="books" className="py-24 px-6 relative overflow-hidden bg-slate-950">
      {/* Glow */}
      <div
        className="absolute w-[450px] h-[450px] blur-[150px] rounded-full pointer-events-none opacity-5"
        style={{
          background: `radial-gradient(circle, ${theme.primaryColor} 0%, rgba(0,0,0,0) 70%)`,
          top: "10%",
          left: "20%",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest text-cyan-400 uppercase mb-2">
            <span>// 04</span>
            <span>{books.title.toUpperCase()}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase font-sans">
            {books.subtitle}
          </h2>
          <div className="h-[1px] w-20 bg-cyan-400 mt-4" />
        </div>

        {/* Bookshelf Deck & Spine layouts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Dynamic tactile bookshelf list */}
          <div className="lg:col-span-5 flex flex-col items-stretch space-y-6">
            <span className="font-mono text-[9px] text-slate-500 tracking-wider text-left uppercase">
              Select Book Volume
            </span>

            <div className="space-y-4 text-left">
              {books.items.map((book, idx) => {
                const isSelected = activeBookIndex === idx;
                
                return (
                  <button
                    key={book.id}
                    onClick={() => setActiveBookIndex(idx)}
                    className={`w-full p-4 rounded text-left border transition-all duration-300 font-mono relative overflow-hidden flex items-center gap-4 cursor-pointer ${
                      isSelected
                        ? "border-cyan-400/40 bg-slate-900"
                        : "border-slate-900 bg-slate-900/10 hover:border-slate-800"
                    }`}
                  >
                    {book.cover && (
                      <div className="w-12 h-16 rounded overflow-hidden shrink-0 bg-slate-950 border border-slate-800 relative">
                        <img
                          src={book.cover}
                          alt={book.title}
                          className="w-full h-full object-cover grayscale opacity-70"
                        />
                      </div>
                    )}
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-1 text-[9px] text-slate-500">
                        <span>VOLUME 0{idx + 1}</span>
                        <span className="text-cyan-400 font-bold uppercase">{book.status}</span>
                      </div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wide truncate">
                        {book.title}
                      </h4>
                      <p className="text-[10px] text-slate-400 truncate mt-0.5">
                        {book.type} // {book.genre.join(", ")}
                      </p>
                    </div>

                    {isSelected && (
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Side: Deep Book parameters viewer */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded border border-slate-900 bg-slate-900/10 backdrop-blur-sm text-left relative flex flex-col justify-between min-h-[400px]">
            <div>
              {/* Genre Status and Date Badges */}
              <div className="flex flex-wrap justify-between items-center gap-4 border-b border-slate-900 pb-5 mb-6 font-mono text-[10px] text-slate-500">
                <div>
                  GENRES: <span className="text-slate-200 uppercase font-bold">{currentBook.genre.join(" • ")}</span>
                </div>
                {currentBook.publishYear && (
                  <div>
                    PUBLISH YEAR: <span className="text-slate-200 uppercase font-bold">{currentBook.publishYear}</span>
                  </div>
                )}
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-2 mb-6">
                <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-900 text-[9px] font-mono text-cyan-400 uppercase tracking-widest">
                  {currentBook.type} // {currentBook.status}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase pt-3">
                  {currentBook.title}
                </h3>
                {currentBook.shortDescription && (
                  <p className="text-xs sm:text-sm font-mono text-slate-400">
                    {currentBook.shortDescription}
                  </p>
                )}
              </div>

              {/* Book Summary Description */}
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                {currentBook.description}
              </p>

              {/* Book progress bar (for items in progress like Soulstone) */}
              {currentBook.progress !== undefined && (
                <div className="p-4 rounded bg-slate-950/60 border border-slate-900 mb-6 text-left">
                  <div className="flex justify-between items-center font-mono text-[10px] text-slate-400 mb-2">
                    <span>MANUSCRIPT DRAFT PROGRESS</span>
                    <span className="text-cyan-400 font-bold">{currentBook.progress}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden relative border border-slate-800">
                    <div
                      className="absolute left-0 top-0 h-full bg-cyan-400 rounded-full"
                      style={{ width: `${currentBook.progress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Stats and Page counts */}
              <div className="grid grid-cols-2 gap-4 mb-6 font-mono text-xs text-left">
                {currentBook.pages && (
                  <div className="p-3 bg-slate-950 rounded border border-slate-900">
                    <span className="text-slate-500 block text-[9px] uppercase mb-1">PAGE COUNT</span>
                    <span className="text-slate-200 font-bold">{currentBook.pages} pages</span>
                  </div>
                )}
                {currentBook.language && (
                  <div className="p-3 bg-slate-950 rounded border border-slate-900">
                    <span className="text-slate-500 block text-[9px] uppercase mb-1">LANGUAGE</span>
                    <span className="text-slate-200 font-bold">{currentBook.language}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Actions and purchasing links */}
            {currentBook.purchaseLinks && (currentBook.purchaseLinks.amazon || currentBook.purchaseLinks.kindle || currentBook.purchaseLinks.paperback) && (
              <div className="mt-8 pt-5 border-t border-slate-900/60 flex flex-wrap justify-between items-center gap-4">
                <span className="font-mono text-[9px] text-slate-500 uppercase">
                  ACQUIRE COPIES
                </span>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  {currentBook.purchaseLinks.amazon && (
                    <a
                      href={currentBook.purchaseLinks.amazon}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-1.5 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <LucideIcon name="BookOpen" size={11} className="text-cyan-400" />
                      <span>AMAZON</span>
                    </a>
                  )}
                  {currentBook.purchaseLinks.kindle && (
                    <a
                      href={currentBook.purchaseLinks.kindle}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-1.5 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <LucideIcon name="Tablet" size={11} className="text-cyan-400" />
                      <span>KINDLE</span>
                    </a>
                  )}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
