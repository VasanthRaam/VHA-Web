import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function AboutHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-zinc-50 dark:bg-zinc-950 pt-20 transition-colors duration-300">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </motion.div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 text-sm font-bold tracking-widest uppercase mb-8 border border-primary-500/20">
            Our Story
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 leading-tight">
            Empowering Minds for <br/>
            <span className="text-gradient">18+ Years</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-650 dark:text-zinc-400 leading-relaxed max-w-3xl mx-auto">
            From a humble beginning to a comprehensive educational academy, we build knowledge, confidence, creativity, and lifelong success.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
