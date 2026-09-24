import React, { useState } from 'react';
import { Camera, MapPin, Calendar, Phone, GraduationCap, Upload, CheckCircle2, UserCheck } from 'lucide-react';

export default function ProfileHero({ photoUrl, setPhotoUrl, userInfo, setUserInfo }) {
  const [isEditingPhoto, setIsEditingPhoto] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 p-6 md:p-8 shadow-2xl">
      {/* Background glow effects */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl pointer-events-none glow-bg" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none glow-bg" />

      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
        
        {/* Photo Container - Requirement #1 */}
        <div className="relative group shrink-0">
          <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-2xl p-1 bg-gradient-to-tr from-purple-500 via-indigo-500 to-cyan-400 shadow-xl shadow-purple-950/50">
            <div className="w-full h-full rounded-[14px] overflow-hidden bg-slate-950 relative flex items-center justify-center">
              {photoUrl ? (
                <img 
                  src={photoUrl} 
                  alt="Profile" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-slate-500 p-4 text-center">
                  <UserCheck className="w-12 h-12 mb-2 text-purple-400" />
                  <span className="text-xs font-semibold">Upload Photo</span>
                </div>
              )}

              {/* Photo Upload Overlay */}
              <label 
                htmlFor="profile-photo-input"
                className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center cursor-pointer text-white text-xs font-medium gap-1.5 backdrop-blur-xs"
              >
                <Camera className="w-6 h-6 text-purple-400" />
                <span>Change Photo</span>
                <span className="text-[10px] text-slate-400 font-mono">(Click to browse)</span>
              </label>
              <input 
                id="profile-photo-input" 
                type="file" 
                accept="image/*" 
                className="hidden" 
                onChange={handleImageUpload} 
              />
            </div>
          </div>

          {/* Badge requirement status */}
          <div className="absolute -bottom-2 right-1/2 translate-x-1/2 md:translate-x-0 md:-right-2 flex items-center gap-1.5 px-3 py-1 bg-emerald-950/90 text-emerald-400 border border-emerald-500/30 rounded-full text-[11px] font-medium shadow-md">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Requirement 1/4: Photo Set</span>
          </div>
        </div>

        {/* Info & Details */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono mb-2">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
              Polyinnovae AI Applicant
            </div>
            
            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              {userInfo.fullName || "Student / Builder"}
            </h1>
            <p className="text-slate-400 text-sm md:text-base mt-1 max-w-xl">
              Full-Stack Developer, AI Enthusiast & Polymath Builder creating high-impact digital experiences.
            </p>
          </div>

          {/* Meta Attributes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm text-slate-300 pt-2 border-t border-slate-800/80">
            <div className="flex items-center justify-center md:justify-start gap-2.5 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/60">
              <GraduationCap className="w-4 h-4 text-purple-400 shrink-0" />
              <div className="truncate">
                <span className="text-slate-500 text-[11px] block">College / Institution</span>
                <span className="font-medium text-slate-200 truncate">{userInfo.college}</span>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-2.5 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/60">
              <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
              <div>
                <span className="text-slate-500 text-[11px] block">Phone Number</span>
                <span className="font-mono font-medium text-slate-200">{userInfo.phone}</span>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-2.5 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/60">
              <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
              <div>
                <span className="text-slate-500 text-[11px] block">Date of Birth</span>
                <span className="font-mono font-medium text-slate-200">{userInfo.dob}</span>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-2.5 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/60">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <span className="text-slate-500 text-[11px] block">Location / Status</span>
                <span className="font-medium text-slate-200">India • Ready to Build</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
