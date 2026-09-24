import React, { useState } from 'react';
import { Video, Play, Pause, Upload, CheckCircle2, Link, Film, Mic, Sparkles } from 'lucide-react';

export default function IntroVideo({ videoUrl, setVideoUrl }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoInputUrl, setVideoInputUrl] = useState('');
  const [activeTab, setActiveTab] = useState('player'); // 'player', 'upload', 'script'

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoUrl(url);
      setActiveTab('player');
    }
  };

  const handleUrlSubmit = (e) => {
    e.preventDefault();
    if (videoInputUrl.trim()) {
      setVideoUrl(videoInputUrl.trim());
      setActiveTab('player');
    }
  };

  return (
    <section className="rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 border border-slate-800 p-6 md:p-8 shadow-2xl">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400">
              <Video className="w-5 h-5" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              1-Minute Intro Video
            </h2>
          </div>
          <p className="text-xs md:text-sm text-slate-400">
            Requirement 2/4: A short 60-second self-introduction video.
          </p>
        </div>

        {/* Tab Switcher & Status */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
            <button
              onClick={() => setActiveTab('player')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                activeTab === 'player' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Video Player
            </button>
            <button
              onClick={() => setActiveTab('upload')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                activeTab === 'upload' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Upload / Embed
            </button>
            <button
              onClick={() => setActiveTab('script')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                activeTab === 'script' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              1-Min Script Guide
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 rounded-xl text-xs font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Requirement 2/4 Ready</span>
          </div>
        </div>
      </div>

      {/* Main View Switcher */}
      {activeTab === 'player' && (
        <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner group aspect-video max-w-3xl mx-auto flex items-center justify-center">
          {videoUrl ? (
            <video 
              src={videoUrl} 
              controls 
              className="w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80"
            />
          ) : (
            <div className="text-center p-8 max-w-md">
              <div className="w-16 h-16 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center mx-auto mb-4 text-indigo-400">
                <Film className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Intro Video Showcase</h3>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                Add your 1-minute intro video file, YouTube link, or Loom recording to feature it directly on your site.
              </p>
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => setActiveTab('upload')}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl transition-all shadow-md flex items-center gap-2"
                >
                  <Upload className="w-4 h-4" />
                  Add / Upload Video
                </button>
                <button
                  onClick={() => setActiveTab('script')}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-semibold rounded-xl transition-all flex items-center gap-2"
                >
                  <Mic className="w-4 h-4 text-purple-400" />
                  View 60s Script
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {activeTab === 'upload' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto py-4">
          
          {/* File Upload Box */}
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-center text-center justify-center space-y-4 hover:border-indigo-500/40 transition-colors">
            <div className="w-12 h-12 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
              <Upload className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">Upload Video File</h4>
              <p className="text-xs text-slate-400">MP4, WebM or MOV (Recommended 60s)</p>
            </div>
            <label className="cursor-pointer px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl transition-colors">
              Choose File
              <input type="file" accept="video/*" onChange={handleFileUpload} className="hidden" />
            </label>
          </div>

          {/* Video URL Form */}
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-center space-y-4 hover:border-indigo-500/40 transition-colors">
            <div className="flex items-center gap-2 text-indigo-400">
              <Link className="w-5 h-5" />
              <h4 className="text-sm font-bold text-white">Embed Video Link</h4>
            </div>
            <p className="text-xs text-slate-400">Paste Loom, YouTube, or direct MP4 link below:</p>
            <form onSubmit={handleUrlSubmit} className="space-y-3">
              <input
                type="url"
                value={videoInputUrl}
                onChange={(e) => setVideoInputUrl(e.target.value)}
                placeholder="https://www.loom.com/share/..."
                className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
              />
              <button
                type="submit"
                className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl transition-colors"
              >
                Set Video URL
              </button>
            </form>
          </div>

        </div>
      )}

      {activeTab === 'script' && (
        <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-slate-950 border border-indigo-900/30 space-y-4">
          <div className="flex items-center gap-2 text-purple-400">
            <Sparkles className="w-5 h-5" />
            <h3 className="text-sm font-bold text-white">Suggested 1-Minute Video Script</h3>
          </div>
          <div className="space-y-3 text-xs text-slate-300 leading-relaxed font-mono bg-slate-900/80 p-4 rounded-xl border border-slate-800">
            <p><strong>0:00 - 0:15 | Intro & Background:</strong> "Hi Polyinnovae team! My name is [Your Name], studying at Nagarjuna College of Engineering and Technology."</p>
            <p><strong>0:15 - 0:35 | What You Build:</strong> "I specialize in modern full-stack development, AI integrations, and rapid prototyping. I love turning complex problems into elegant products."</p>
            <p><strong>0:35 - 0:50 | Why Polymath:</strong> "I build like a polymath because combining design, code, and AI lets me construct end-to-end solutions independently."</p>
            <p><strong>0:50 - 1:00 | Call to Action:</strong> "Check out my resume and interactive portfolio below. Excited to build with you!"</p>
          </div>
        </div>
      )}

    </section>
  );
}
