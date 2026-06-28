import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function JourneyTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} className="py-32 relative bg-zinc-50/50 dark:bg-zinc-950/50">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">Our Journey</h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            A timeline of dedication, growth, and excellence in shaping bright futures.
          </p>
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-4xl px-6">
        {/* Static Background Line */}
        <div className="absolute left-[39px] sm:left-1/2 top-0 bottom-0 w-[2px] bg-zinc-200 dark:bg-zinc-800 -translate-x-1/2 rounded-full" />
        
        {/* Animated Fill Line */}
        <motion.div 
          className="absolute left-[39px] sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary-500 via-blue-500 to-purple-500 -translate-x-1/2 origin-top rounded-full"
          style={{ scaleY: pathLength }}
        />

        <div className="space-y-24 relative z-10 pb-12">
          
          {/* Milestone 1: Beginning */}
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between group">
            <div className="hidden sm:block w-[45%] text-right pr-12">
              <motion.h3 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-3xl font-display font-bold text-foreground"
              >
                The Beginning
              </motion.h3>
            </div>
            
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="absolute left-0 sm:left-1/2 w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border-4 border-primary-500 -translate-x-1/2 flex items-center justify-center shadow-[0_0_20px_rgba(14,165,233,0.4)] z-10 transition-transform duration-300 group-hover:scale-110"
            >
              <div className="w-3 h-3 rounded-full bg-primary-500" />
            </motion.div>

            <div className="pl-16 sm:pl-12 sm:w-[45%] w-full">
              <h3 className="text-2xl font-display font-bold text-foreground sm:hidden mb-4">The Beginning</h3>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md p-8 rounded-3xl border border-black/5 dark:border-white/10 hover:border-primary-500/30 transition-colors shadow-lg"
              >
                <ul className="space-y-4 text-zinc-650 dark:text-zinc-400 font-medium">
                  <li className="flex items-start"><span className="w-2 h-2 rounded-full bg-primary-500 mt-2 mr-4 shrink-0"/> Started with just 5 ambitious students</li>
                  <li className="flex items-start"><span className="w-2 h-2 rounded-full bg-primary-500 mt-2 mr-4 shrink-0"/> Offered a single specialized Hindi Course</li>
                  <li className="flex items-start"><span className="w-2 h-2 rounded-full bg-primary-500 mt-2 mr-4 shrink-0"/> Built entirely on a foundation of personalized attention</li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Milestone 2: Today */}
          <div className="relative flex flex-col sm:flex-row-reverse items-start sm:items-center justify-between group">
            <div className="hidden sm:block w-[45%] text-left pl-12">
              <motion.h3 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-3xl font-display font-bold text-foreground"
              >
                Today
              </motion.h3>
            </div>
            
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="absolute left-0 sm:left-1/2 w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border-4 border-purple-500 -translate-x-1/2 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.4)] z-10 transition-transform duration-300 group-hover:scale-110"
            >
              <div className="w-3 h-3 rounded-full bg-purple-500" />
            </motion.div>

            <div className="pl-16 sm:pr-12 sm:pl-0 sm:w-[45%] w-full sm:text-right">
              <h3 className="text-2xl font-display font-bold text-foreground sm:hidden mb-4">Today</h3>
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md p-8 rounded-3xl border border-black/5 dark:border-white/10 hover:border-purple-500/30 transition-colors shadow-lg text-left sm:text-right"
              >
                <p className="text-zinc-650 dark:text-zinc-400 mb-6 font-medium leading-relaxed">
                  Grown into a highly respected, comprehensive educational academy empowering thousands of students across multiple disciplines.
                </p>
                <div className="flex flex-wrap gap-2 sm:justify-end">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400">Academics</span>
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">Languages</span>
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400">Arts</span>
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">Music</span>
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400">Skills</span>
                </div>
              </motion.div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
