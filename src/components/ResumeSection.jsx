import React from 'react';
import { FileText, Download, ExternalLink, CheckCircle2, GraduationCap, Code2, Briefcase, Award, Upload, Cloud, Cpu, Trophy, Terminal } from 'lucide-react';

export default function ResumeSection({ resumeUrl, setResumeUrl }) {
  const defaultResume = "/resume.pdf";

  return (
    <section className="rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 border border-slate-800 p-6 md:p-8 shadow-2xl space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Resume & Verified Qualifications
            </h2>
          </div>
          <p className="text-xs md:text-sm text-slate-400">
            Requirement 3/4: Official resume of Soumya Sahukar (Computer Science & Engineering).
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <a
            href={defaultResume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
            <span>Preview PDF</span>
          </a>

          <a
            href={defaultResume}
            download="Soumya_Sahukar_Resume.pdf"
            className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl text-xs font-semibold flex items-center gap-2 transition-all shadow-md shadow-cyan-900/30"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Official PDF</span>
          </a>
        </div>
      </div>

      {/* Grid Row 1: Experience & Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Work Experience */}
        <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between text-cyan-400 border-b border-slate-800/80 pb-3">
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              <h3 className="text-sm font-bold text-white">Work Experience</h3>
            </div>
            <span className="text-[10px] font-mono uppercase bg-cyan-500/10 text-cyan-300 px-2 py-0.5 rounded border border-cyan-500/20">2 Internships</span>
          </div>

          <div className="space-y-4">
            
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-white">Machine Learning Intern</h4>
                <span className="text-[10px] font-mono text-purple-400">Dec 2025 – Feb 2026</span>
              </div>
              <span className="text-xs text-indigo-300 font-semibold block">Infosys</span>
              <ul className="space-y-1 text-xs text-slate-400 list-disc list-inside">
                <li>Engineered 50+ features and applied SMOTE to address class imbalance in ML datasets.</li>
                <li>Built FastAPI prediction API with sub-second inference for real-time habitability prediction.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-white">AWS Cloud Intern</h4>
                <span className="text-[10px] font-mono text-cyan-400">Jan 2026 – May 2026</span>
              </div>
              <span className="text-xs text-cyan-300 font-semibold block">Toriiminds</span>
              <ul className="space-y-1 text-xs text-slate-400 list-disc list-inside">
                <li>Architected AWS cloud infrastructure, deploying 10+ EC2 instances and IAM policies.</li>
                <li>Configured Virtual Private Clouds (VPCs) and optimized storage, reducing costs by 15%.</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Featured Projects */}
        <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between text-indigo-400 border-b border-slate-800/80 pb-3">
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5" />
              <h3 className="text-sm font-bold text-white">Featured Projects</h3>
            </div>
            <span className="text-[10px] font-mono uppercase bg-indigo-500/10 text-indigo-300 px-2 py-0.5 rounded border border-indigo-500/20">3 Projects</span>
          </div>

          <div className="space-y-3">
            
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-white">Predicting Habitability of Exoplanets</h4>
                <span className="text-[10px] text-purple-400 font-mono">99% Accuracy</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                ML model using NASA Exoplanet dataset (40K rows, 90+ columns) with Class-Weighted SVM & real-time FastAPI + React dashboard.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-white">Blood Bank Management System</h4>
                <span className="text-[10px] text-cyan-400 font-mono">500+ Donors</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Database application managing donor records & inventory, reducing manual errors by 30% with &lt; 2s lookup speed.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-white">Soil Moisture-Based Irrigation System</h4>
                <span className="text-[10px] text-emerald-400 font-mono">Arduino IoT</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Automated water pump controls via moisture sensors and relay modules, cutting water consumption by 40%.
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* Grid Row 2: Skills, Certifications & Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Technical Skills */}
        <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-purple-400 border-b border-slate-800/80 pb-3">
            <Code2 className="w-5 h-5" />
            <h3 className="text-sm font-bold text-white">Technical Skills</h3>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <span className="text-[10px] font-mono uppercase text-slate-500 block mb-1">Languages</span>
              <p className="text-slate-300 font-mono leading-relaxed">C++, Java, C, Python, HTML, CSS, JavaScript, SQL</p>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-slate-500 block mb-1">Cloud & Design</span>
              <p className="text-slate-300 font-mono leading-relaxed">AWS, Google Cloud Platform, UI/UX Design</p>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-slate-500 block mb-1">AI & ML</span>
              <p className="text-slate-300 font-mono leading-relaxed">Predictive Modeling, Feature Eng, Model Eval, Gen AI</p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-cyan-400 border-b border-slate-800/80 pb-3">
            <Cloud className="w-5 h-5" />
            <h3 className="text-sm font-bold text-white">Certifications</h3>
          </div>

          <ul className="space-y-2.5 text-xs text-slate-300">
            <li className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
              <span><strong>AWS Certified Solutions Architect</strong> – Associate (SAA-C03)</span>
            </li>
            <li className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
              <span><strong>AWS Academy Graduate</strong> – Cloud Foundations</span>
            </li>
            <li className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
              <span><strong>Oracle Cloud Infrastructure</strong> – Certified Foundations</span>
            </li>
            <li className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
              <span><strong>Google Cloud</strong> – Career Launchpad</span>
            </li>
          </ul>
        </div>

        {/* Achievements & Coding Profiles */}
        <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-amber-400 border-b border-slate-800/80 pb-3">
            <Trophy className="w-5 h-5" />
            <h3 className="text-sm font-bold text-white">Achievements & Profiles</h3>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-500/20 space-y-1">
              <span className="font-bold text-amber-300 block">🏆 Hyper API Hackathon 2025</span>
              <p className="text-[11px] text-slate-300">Secured <strong>Top 5 Finalist</strong> position among 50+ technical teams.</p>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
              <span className="font-bold text-emerald-400 block">🏸 Regional Badminton Player</span>
              <p className="text-[11px] text-slate-400">Competed at the regional level in badminton.</p>
            </div>

            <div className="pt-1 flex items-center justify-between text-slate-400 font-mono text-[11px]">
              <span>LeetCode: <strong className="text-purple-300">Soumya21s</strong></span>
              <span>CodeChef: <strong className="text-cyan-300">soumya0818</strong></span>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
