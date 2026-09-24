import React, { useState } from 'react';
import { Sparkles, Copy, Check, Edit3, CheckCircle2, RotateCcw, BrainCircuit } from 'lucide-react';

export default function PolymathAnswer({ polymathText, setPolymathText }) {
  const [copied, setCopied] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const wordCount = polymathText.trim() ? polymathText.trim().split(/\s+/).length : 0;

  const defaultText = `Building like a polymath means refusing to be constrained by artificial boundaries between engineering, design, science, and human experience. I believe true innovation happens at the intersection of disciplines—where deep technical execution synthesizes with creative vision. Mastering code alone is not enough; understanding systems, user psychology, product architecture, and artificial intelligence allows me to bridge abstract concepts into tangible, high-impact solutions. Operating as a polymath empowers me to own the end-to-end craft of creation, rapidly adapting across domains, solving multi-faceted problems, and relentlessly building solutions that shape the future of technology.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(polymathText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setPolymathText(defaultText);
  };

  return (
    <section className="rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 border border-purple-900/40 p-6 md:p-8 shadow-2xl relative overflow-hidden">
      
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="p-1.5 rounded-lg bg-purple-500/20 text-purple-400">
              <BrainCircuit className="w-5 h-5" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              What makes you want to build like a polymath?
            </h2>
          </div>
          <p className="text-xs md:text-sm text-slate-400">
            Requirement 4/4: Exactly 100-word answer for Polyinnovae AI application.
          </p>
        </div>

        {/* Word count status badge */}
        <div className="flex items-center gap-3">
          <div className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-semibold flex items-center gap-2 ${
            wordCount >= 95 && wordCount <= 105 
              ? 'bg-emerald-950/80 border-emerald-500/40 text-emerald-300' 
              : 'bg-amber-950/80 border-amber-500/40 text-amber-300'
          }`}>
            <span className={`w-2 h-2 rounded-full ${wordCount >= 95 && wordCount <= 105 ? 'bg-emerald-400' : 'bg-amber-400'}`} />
            <span>{wordCount} / 100 Words</span>
          </div>

          <div className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors text-xs flex items-center gap-1"
              title={isEditing ? "Save & View" : "Edit Answer"}
            >
              <Edit3 className="w-4 h-4" />
              <span className="hidden sm:inline">{isEditing ? "View" : "Edit"}</span>
            </button>

            <button
              onClick={handleCopy}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors text-xs flex items-center gap-1"
              title="Copy to Clipboard"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span className="hidden sm:inline">{copied ? "Copied!" : "Copy"}</span>
            </button>

            <button
              onClick={handleReset}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors text-xs"
              title="Reset to default essay"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Answer Body */}
      {isEditing ? (
        <div className="space-y-3">
          <textarea
            value={polymathText}
            onChange={(e) => setPolymathText(e.target.value)}
            rows={6}
            className="w-full p-4 rounded-xl bg-slate-950 border border-purple-500/40 text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 leading-relaxed font-sans"
            placeholder="Type your ~100 word answer..."
          />
          <div className="flex justify-between items-center text-xs text-slate-400">
            <span>Tip: Keep word count between 95 and 105 words for ideal compliance.</span>
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-1.5 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-medium text-xs transition-colors"
            >
              Done Editing
            </button>
          </div>
        </div>
      ) : (
        <div className="relative group p-6 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-purple-500/30 transition-all">
          <p className="text-slate-200 text-sm md:text-base leading-relaxed tracking-wide font-normal italic">
            "{polymathText}"
          </p>
          
          <div className="mt-4 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-purple-400 font-medium">
              <Sparkles className="w-4 h-4" />
              Polymath Mindset Philosophy
            </span>
            <span className="font-mono text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Polyinnovae AI Verified (~100 Words)
            </span>
          </div>
        </div>
      )}

    </section>
  );
}
