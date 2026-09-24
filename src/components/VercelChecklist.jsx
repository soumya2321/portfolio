import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, Sparkles, Copy, Check, Rocket, ArrowRight } from 'lucide-react';

export default function VercelChecklist({ isPhoto, isVideo, isResume, isEssay, essayWordCount }) {
  const [copiedLink, setCopiedLink] = useState(false);

  const vercelLink = "https://your-project.vercel.app";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(vercelLink);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const checklistItems = [
    { title: "A clear photo of you", status: isPhoto, req: "Requirement 1" },
    { title: "A 1-minute intro video — just talk about yourself", status: isVideo, req: "Requirement 2" },
    { title: "Your resume", status: isResume, req: "Requirement 3" },
    { 
      title: 'A 100-word answer: "What makes you want to build like a polymath?"', 
      status: isEssay && essayWordCount >= 90 && essayWordCount <= 110, 
      req: "Requirement 4",
      detail: `${essayWordCount} / 100 words` 
    },
  ];

  const completedCount = checklistItems.filter(item => item.status).length;

  return (
    <section className="rounded-2xl bg-gradient-to-r from-purple-950/60 via-slate-900 to-indigo-950/60 border border-purple-500/30 p-6 md:p-8 shadow-2xl relative overflow-hidden">
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Summary & Status */}
        <div className="space-y-3 text-center md:text-left flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-mono font-semibold border border-purple-500/30">
            <ShieldCheck className="w-4 h-4 text-purple-400" />
            Polyinnovae AI Submission Status
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Vercel Site Compliance: <span className="text-emerald-400">{completedCount}/4 Completed</span>
          </h2>

          <p className="text-slate-300 text-xs md:text-sm max-w-xl">
            Everything required by the Polyinnovae application is built into this site. Once deployed to Vercel, copy your live link below into the application box!
          </p>
        </div>

        {/* Right Side: Vercel Link Box */}
        <div className="w-full md:w-auto shrink-0 bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3 text-center">
          <span className="text-[11px] font-mono uppercase text-slate-400 block">Your Vercel Submission URL</span>
          
          <div className="flex items-center justify-between gap-2 bg-slate-900 px-3 py-2 rounded-xl border border-slate-800 font-mono text-xs text-purple-300">
            <span>{vercelLink}</span>
            <button
              onClick={handleCopyLink}
              className="p-1.5 hover:bg-slate-800 rounded-lg text-slate-300 transition-colors"
              title="Copy Vercel Link"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          <a
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
          >
            <Rocket className="w-4 h-4" />
            <span>Deploy Project to Vercel</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Grid Checklist */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-800/80">
        {checklistItems.map((item, idx) => (
          <div 
            key={idx}
            className={`p-3.5 rounded-xl border transition-all flex items-start gap-3 ${
              item.status 
                ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-200' 
                : 'bg-slate-950/60 border-slate-800 text-slate-400'
            }`}
          >
            <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${item.status ? 'text-emerald-400' : 'text-slate-600'}`} />
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider block text-slate-400">{item.req}</span>
              <h4 className="text-xs font-semibold text-slate-100 line-clamp-2">{item.title}</h4>
              {item.detail && <span className="text-[10px] text-purple-400 font-mono mt-1 block">{item.detail}</span>}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
