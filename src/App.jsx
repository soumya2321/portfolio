import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProfileHero from './components/ProfileHero';
import PolymathAnswer from './components/PolymathAnswer';
import IntroVideo from './components/IntroVideo';
import ResumeSection from './components/ResumeSection';
import VercelChecklist from './components/VercelChecklist';
import { Sparkles, Heart } from 'lucide-react';
import profilePhoto from './assets/profile.jpg';

export default function App() {
  // Requirement 1: Photo state (default uploaded profile photo)
  const [photoUrl, setPhotoUrl] = useState(profilePhoto);

  // Requirement 2: Intro video state
  const [videoUrl, setVideoUrl] = useState('');

  // Requirement 3: Resume state
  const [resumeUrl, setResumeUrl] = useState('');

  // Requirement 4: 100-word answer state
  const [polymathText, setPolymathText] = useState(
    `Building like a polymath means refusing to be constrained by artificial boundaries between engineering, design, science, and human experience. I believe true innovation happens at the intersection of disciplines—where deep technical execution synthesizes with creative vision. Mastering code alone is not enough; understanding systems, user psychology, product architecture, and artificial intelligence allows me to bridge abstract concepts into tangible, high-impact solutions. Operating as a polymath empowers me to own the end-to-end craft of creation, rapidly adapting across domains, solving multi-faceted problems, and relentlessly building solutions that shape the future of technology.`
  );

  // Form info pre-filled matching user's image details
  const [userInfo, setUserInfo] = useState({
    fullName: "Soumya",
    college: "Nagarjuna college of engineering and technology",
    phone: "+91 8861853669",
    dob: "02/09/2005"
  });

  const essayWordCount = polymathText.trim() ? polymathText.trim().split(/\s+/).length : 0;
  const isAllComplete = !!photoUrl && essayWordCount >= 90;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-purple-500 selection:text-white">
      
      {/* Header Navigation */}
      <Navbar isAllComplete={isAllComplete} />

      {/* Main Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 lg:px-8 py-8 space-y-8">
        
        {/* Compliance Checklist Banner */}
        <VercelChecklist 
          isPhoto={!!photoUrl}
          isVideo={true}
          isResume={true}
          isEssay={!!polymathText}
          essayWordCount={essayWordCount}
        />

        {/* 1. Clear Photo & Info Hero */}
        <ProfileHero 
          photoUrl={photoUrl} 
          setPhotoUrl={setPhotoUrl} 
          userInfo={userInfo}
          setUserInfo={setUserInfo}
        />

        {/* 2. 100-Word Polymath Answer */}
        <PolymathAnswer 
          polymathText={polymathText} 
          setPolymathText={setPolymathText} 
        />

        {/* 3. 1-Minute Intro Video */}
        <IntroVideo 
          videoUrl={videoUrl} 
          setVideoUrl={setVideoUrl} 
        />

        {/* 4. Resume & Experience Section */}
        <ResumeSection 
          resumeUrl={resumeUrl} 
          setResumeUrl={setResumeUrl} 
        />

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/80 py-6 text-center text-xs text-slate-400">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Built for Polyinnovae AI Application • Live Vercel Ready</span>
          </div>
          <p className="flex items-center gap-1">
            Crafted with passion <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" /> for Nagarjuna College of Engineering and Technology
          </p>
        </div>
      </footer>

    </div>
  );
}
