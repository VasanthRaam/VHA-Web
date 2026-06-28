import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/utils/cn';
import { STUDENT_VIDEOS, VIDEO_CATEGORIES, type VideoCategory } from '@/data/studentLife';

const Youtube = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

function YouTubeThumbnail({ youtubeId, title, className }: { youtubeId: string, title: string, className?: string }) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <div className={cn("w-full h-full relative bg-black", className)}>
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
        />
      </div>
    );
  }

  // maxresdefault is 1080p, hqdefault is 480p (fallback if maxres doesn't exist)
  // Usually maxresdefault works for modern videos
  return (
    <div 
      className={cn("w-full h-full relative cursor-pointer group bg-zinc-900 overflow-hidden", className)}
      onClick={() => setIsPlaying(true)}
    >
      <img
        src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
        onError={(e) => {
          // Fallback to high quality if max resolution is unavailable
          (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
        }}
        alt={title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-90"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-red-600/90 backdrop-blur-sm flex items-center justify-center text-white shadow-[0_0_30px_rgba(220,38,38,0.6)] transform transition-transform duration-300 group-hover:scale-110">
          <Play className="w-6 h-6 ml-1 fill-current" />
        </div>
      </div>
    </div>
  );
}

export function StudentLifeGallery() {
  const [activeCategory, setActiveCategory] = useState<VideoCategory>("All");
  
  const filteredVideos = STUDENT_VIDEOS.filter(v => activeCategory === "All" || v.category === activeCategory);
  
  // Choose featured: The first featured video in the filtered list, otherwise the first video in the list
  const featuredVideo = filteredVideos.find(v => v.featured) || filteredVideos[0];
  const gridVideos = filteredVideos.filter(v => v.id !== featuredVideo?.id);

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-2xl">
          <Badge variant="primary" className="mb-4 backdrop-blur-md bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20">
            <Youtube className="w-3 h-3 mr-2" /> Student Life
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Watch Our Students Shine
          </h2>
          <p className="text-xl text-zinc-650 dark:text-zinc-400">
            Learning at Vasanth Academy extends far beyond the classroom. Explore beautiful performances, cultural events, and remarkable achievements.
          </p>
        </div>
        <a 
          href="https://www.youtube.com/@vasanthacademy.1404" 
          target="_blank" 
          rel="noopener noreferrer"
          className="shrink-0"
        >
          <Button variant="outline" className="h-12 border-red-500/20 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 hover:border-red-500/40 rounded-xl group font-bold shadow-sm">
            <Youtube className="w-5 h-5 mr-2" />
            Subscribe to Channel
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </a>
      </div>

      {/* Category Filters (Horizontal Scrollable) */}
      <div className="flex overflow-x-auto pb-6 mb-6 -mx-6 px-6 lg:mx-0 lg:px-0 gap-3 scrollbar-hide">
        {VIDEO_CATEGORIES.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-5 py-2.5 rounded-full whitespace-nowrap text-sm font-bold transition-all duration-300 border",
              activeCategory === category 
                ? "bg-foreground text-background border-foreground shadow-lg scale-105"
                : "bg-white/70 dark:bg-zinc-900/50 backdrop-blur-sm text-zinc-650 dark:text-zinc-400 border-black/5 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Layout */}
      <div className="space-y-8">
        
        {/* Featured Video */}
        <AnimatePresence mode="wait">
          {featuredVideo && (
            <motion.div
              key={featuredVideo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="w-full aspect-video md:aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl border border-black/5 dark:border-white/10 relative group bg-zinc-900"
            >
              <YouTubeThumbnail youtubeId={featuredVideo.youtubeId} title={featuredVideo.title} />
              
              <div className="absolute top-6 left-6 pointer-events-none z-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider shadow-lg border border-white/10">
                  {featuredVideo.category}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Grid Videos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {gridVideos.map((video) => (
              <motion.div
                layout
                key={video.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-4 group"
              >
                <div className="w-full aspect-video rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 shadow-lg relative bg-zinc-900">
                  <YouTubeThumbnail youtubeId={video.youtubeId} title={video.title} />
                  <div className="absolute top-3 left-3 pointer-events-none z-10">
                    <span className="inline-block px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/90 text-[10px] font-bold uppercase tracking-wider shadow border border-white/10">
                      {video.category}
                    </span>
                  </div>
                </div>
                <div className="px-1">
                  <h4 className="font-bold text-foreground text-lg line-clamp-2 leading-tight group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {video.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {filteredVideos.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="py-24 text-center border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-[2rem] bg-white/30 dark:bg-zinc-900/30"
          >
            <Youtube className="w-12 h-12 text-zinc-400 mx-auto mb-4 opacity-50" />
            <h3 className="text-2xl font-display font-bold text-foreground mb-2">No videos found</h3>
            <p className="text-zinc-500">There are no videos available in this category yet.</p>
          </motion.div>
        )}

      </div>
    </div>
  );
}
