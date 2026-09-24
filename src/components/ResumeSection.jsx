import React, { useState } from 'react';
import { FileText, Download, ExternalLink, CheckCircle2, GraduationCap, Code2, Briefcase, Award, Upload } from 'lucide-react';

export default function ResumeSection({ resumeUrl, setResumeUrl }) {
  const [activeTab, setActiveTab] = useState('summary'); // 'summary', 'timeline'

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setResumeUrl(url);
    }
  };

  return (
    <section className="rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 border border-slate-800 p-6 md:p-8 shadow-2xl">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Resume & Technical Profile
            </h2>
          </div>
          <p className="text-xs md:text-sm text-slate-400">
            Requirement 3/4: Comprehensive background, education, and technical experience.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <label className="cursor-pointer px-3 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors">
            <Upload className="w-3.5 h-3.5 text-cyan-400" />
            <span>Upload PDF Resume</span>
            <input type="file" accept=".pdf" onChange={handleResumeUpload} className="hidden" />
          </label>

          <a
            href={resumeUrl || "#"}
            download="Resume.pdf"
            className="px-4 py-1.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl text-xs font-semibold flex items-center gap-2 transition-all shadow-md"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>

      {/* Grid Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Education & Core Card */}
        <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-cyan-400">
            <GraduationCap className="w-5 h-5" />
            <h3 className="text-sm font-bold text-white">Education</h3>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs text-cyan-400 font-mono">
              <span>B.E. / B.Tech</span>
              <span>2023 - 2027</span>
            </div>
            <h4 className="text-sm font-bold text-white leading-snug">
              Nagarjuna College of Engineering and Technology
            </h4>
            <p className="text-xs text-slate-400">
              Computer Science & Engineering / AI & Technology focus.
            </p>
          </div>

          <div className="pt-2">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-purple-400" />
              Key Highlights
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                <span>Polymath builder approach across Web Dev, AI, and UI/UX design.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                <span>Active hackathon participant and full-stack software engineer.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Tech Stack Matrix */}
        <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-purple-400">
            <Code2 className="w-5 h-5" />
            <h3 className="text-sm font-bold text-white">Technical Stack</h3>
          </div>

          <div className="space-y-3">
            <div>
              <span className="text-[11px] font-mono text-slate-500 uppercase block mb-1.5">Frontend & UI</span>
              <div className="flex flex-wrap gap-1.5">
                {['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Vite', 'HTML5/CSS3'].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-purple-300 font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-[11px] font-mono text-slate-500 uppercase block mb-1.5">Backend & Cloud</span>
              <div className="flex flex-wrap gap-1.5">
                {['Node.js', 'Express', 'Python', 'Vercel API', 'REST / GraphQL', 'Git & GitHub'].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-cyan-300 font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-[11px] font-mono text-slate-500 uppercase block mb-1.5">AI & Tooling</span>
              <div className="flex flex-wrap gap-1.5">
                {['Gemini AI', 'OpenAI APIs', 'Prompt Eng', 'Figma', 'Postman'].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-emerald-300 font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Projects & Experience */}
        <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-indigo-400">
            <Briefcase className="w-5 h-5" />
            <h3 className="text-sm font-bold text-white">Featured Projects</h3>
          </div>

          <div className="space-y-3">
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-white">Polyinnovae Application Site</h4>
                <span className="text-[10px] text-purple-400 font-mono">Vercel Live</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Full-stack interactive portfolio built for Polyinnovae AI, featuring live photo upload, video intro, resume download, and polymath essay.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-white">AI-Powered Web Apps</h4>
                <span className="text-[10px] text-cyan-400 font-mono">React / Node</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Intelligent user interfaces with responsive layout algorithms and modern dark-mode aesthetic.
              </p>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between text-xs text-emerald-400 font-medium">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Requirement 3/4 Verified
            </span>
          </div>
        </div>

      </div>

    </section>
  );
}
