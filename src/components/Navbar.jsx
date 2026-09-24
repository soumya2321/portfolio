import React from 'react';
import { Sparkles, CheckCircle2, Rocket, ExternalLink, ShieldCheck } from 'lucide-react';

export default function Navbar({ isAllComplete }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80 px-4 lg:px-8 py-3.5 transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 shadow-lg shadow-purple-500/20 text-white font-bold text-lg">
            <Sparkles className="w-5 h-5 text-purple-200 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Polymath Portfolio
              </span>
              <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                Polyinnovae AI Ready
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono">nagarjuna-college-eng.vercel.app</p>
          </div>
        </div>

        {/* Requirements Status & Action */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
            <CheckCircle2 className={`w-4 h-4 ${isAllComplete ? 'text-emerald-400' : 'text-amber-400'}`} />
            <span>Requirements Check: <strong className={isAllComplete ? "text-emerald-400" : "text-amber-400"}>
              {isAllComplete ? "4/4 Ready" : "In Progress"}
            </strong></span>
          </div>

          <a 
            href="https://vercel.com/new" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-lg shadow-md shadow-purple-900/30 transition-all hover:scale-105 active:scale-95"
          >
            <Rocket className="w-3.5 h-3.5" />
            <span>Deploy to Vercel</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>
        </div>

      </div>
    </header>
  );
}
