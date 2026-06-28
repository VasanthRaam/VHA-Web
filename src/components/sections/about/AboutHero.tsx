import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ImageWithPreview } from '@/components/ui/ImageWithPreview';

export function AboutHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-zinc-50 dark:bg-zinc-950 pt-32 pb-20 transition-colors duration-300">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </motion.div>
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
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

        {/* Center Cover Image Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-4xl aspect-[16/9] rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-2xl border border-black/10 dark:border-white/10 group bg-zinc-900"
        >
          <ImageWithPreview
            src="/images/1782645201147.jpg"
            alt="Vasanth Academy Campus Life"
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
            loading="eager"
          />
        </motion.div>
      </div>
    </section>
  );
}
