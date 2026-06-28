import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/utils/cn';
import { learningPrograms } from '@/data/programs';
import { Button } from '@/components/ui/Button';

interface LearningProgramsProps {
  animateEntrance?: boolean;
}

export function LearningPrograms({ animateEntrance = true }: LearningProgramsProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  return (
    <div className="w-full">
      <div className="text-center mb-16">
        <div
          className={cn(
            "transition-all duration-500 transform",
            animateEntrance ? "translate-y-0 opacity-100" : ""
          )}
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6 text-foreground">
            Explore Our Learning Programs
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Discover a wide spectrum of holistic educational paths, from academic excellence to creative arts, designed to nurture every talent.
          </p>
        </div>
      </div>

      {/* Mobile Swipe Container / Desktop Grid - uses items-start to prevent other cards from stretching */}
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 -mx-6 px-6 md:grid md:grid-cols-2 lg:grid-cols-3 items-start md:overflow-visible md:snap-none md:mx-0 md:px-0 md:pb-0 md:gap-8 hide-scrollbar">
        {learningPrograms.map((program, idx) => {
          const isExpanded = expandedId === program.id;
          const Icon = program.icon;

          return (
            <div
              key={program.id}
              className={cn(
                "snap-center shrink-0 w-[85vw] sm:w-[350px] md:w-auto md:shrink transition-all duration-500 transform",
                animateEntrance ? "translate-y-0 opacity-100" : ""
              )}
              style={animateEntrance ? { transitionDelay: `${idx * 50}ms` } : undefined}
            >
              <div
                className={cn(
                  "relative flex flex-col overflow-hidden rounded-[2rem] border transition-all duration-350 ease-out",
                  "bg-white/70 dark:bg-zinc-900/50 backdrop-blur-md hover:-translate-y-1.5",
                  isExpanded 
                    ? "border-primary-500/50 shadow-xl shadow-primary-500/10 dark:shadow-primary-500/5"
                    : "border-black/5 dark:border-white/10 hover:border-black/10 dark:hover:border-white/20 shadow-md hover:shadow-lg"
                )}
              >
                {/* Subtle Background Glow */}
                <div className={cn(
                  "absolute top-0 right-0 w-64 h-64 bg-gradient-to-br rounded-full blur-[80px] pointer-events-none transition-opacity duration-300",
                  program.color,
                  isExpanded ? "opacity-20 dark:opacity-30" : "opacity-10 dark:opacity-15"
                )} />

                {/* Card Header (Always Visible) */}
                <div 
                  className="p-8 cursor-pointer flex flex-col z-10 select-none"
                  onClick={() => toggleExpand(program.id)}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={cn("w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white shadow-md", program.color)}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center text-zinc-500 dark:text-zinc-400 transition-transform duration-300",
                        isExpanded ? "rotate-180" : ""
                      )}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-foreground transition-colors duration-200">
                    {program.title}
                  </h3>
                  
                  <p className="text-zinc-650 dark:text-zinc-400 leading-relaxed text-sm sm:text-base">
                    {program.description}
                  </p>
                </div>

                {/* Expandable Content - GPU-Accelerated CSS Grid height animation */}
                <div 
                  className={cn(
                    "grid transition-all duration-300 ease-in-out px-8 z-10 relative",
                    isExpanded ? "grid-rows-[1fr] opacity-100 pb-8" : "grid-rows-[0fr] opacity-0 pb-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="pt-6 border-t border-black/5 dark:border-white/10 space-y-6">
                      {program.paths.map((path, pIdx) => (
                        <div key={pIdx} className="space-y-4">
                          {(path.title || path.info) && (
                            <div>
                              {path.title && <h4 className="font-semibold text-foreground text-lg">{path.title}</h4>}
                              {path.info && <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mt-1">{path.info}</p>}
                            </div>
                          )}
                          
                          {path.sections.length > 0 && (
                            <div className="space-y-4">
                              {path.sections.map((section, sIdx) => (
                                <div key={sIdx}>
                                  <span className="text-xs uppercase tracking-wider font-bold text-zinc-500 dark:text-zinc-450 block mb-2">
                                    {section.title}
                                  </span>
                                  <div className="flex flex-wrap gap-2">
                                    {section.items.map((item, iIdx) => (
                                      <span 
                                        key={iIdx} 
                                        className="text-xs sm:text-sm px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 border border-black/5 dark:border-white/5"
                                      >
                                        {item}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}

                      <div className="pt-4">
                        <Link to="/contact" className="block w-full">
                          <Button 
                            className={cn("w-full justify-between bg-gradient-to-r hover:opacity-95 transition-opacity border-0 text-white font-medium shadow-md", program.color)}
                          >
                            {program.ctaText}
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
