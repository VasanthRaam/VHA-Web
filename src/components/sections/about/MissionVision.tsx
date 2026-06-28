import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, CheckCircle2 } from 'lucide-react';
import { ImageWithPreview } from '@/components/ui/ImageWithPreview';

export function MissionVision() {
  const philosophy = [
    "Individual Attention",
    "Personal Guidance",
    "Continuous Motivation",
    "Professional Faculty",
    "Practical Learning",
    "Career-Oriented Development"
  ];

  return (
    <section className="py-32 relative bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Mission */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 mb-6 font-bold uppercase tracking-wider text-sm border border-primary-500/20">
              <Target className="w-4 h-4" /> Our Mission
            </div>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              Building knowledge, confidence, creativity, and lifelong success.
            </h3>
            <p className="text-xl text-zinc-650 dark:text-zinc-400 leading-relaxed">
              We are committed to providing unparalleled quality education that empowers our students. 
              Our mission goes beyond textbooks; we strive to develop well-rounded individuals ready to face the future with confidence and creativity.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2 aspect-square rounded-[3rem] overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl relative bg-zinc-900"
          >
            <ImageWithPreview 
              src="/images/1782644368452.jpg" 
              alt="Students participating in drawing competition" 
              className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Vision */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="aspect-square rounded-[3rem] overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl relative bg-zinc-900"
          >
            <ImageWithPreview 
              src="/images/1782644368464.jpg" 
              alt="Students during normal classroom learning" 
              className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 mb-6 font-bold uppercase tracking-wider text-sm border border-purple-500/20">
              <Eye className="w-4 h-4" /> Our Vision
            </div>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              Accessible quality education nurturing unique talents.
            </h3>
            <p className="text-xl text-zinc-650 dark:text-zinc-400 leading-relaxed">
              We envision a world where every student's unique talent is recognized and nurtured through modern, highly personalized learning environments. We aim to make top-tier educational resources accessible to all.
            </p>
          </motion.div>
        </div>

        {/* Philosophy */}
        <div className="mt-40">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 mb-6 font-bold uppercase tracking-wider text-sm border border-rose-500/20">
              <Heart className="w-4 h-4" /> Teaching Philosophy
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">Because Every Learner Matters</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {philosophy.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex items-center p-6 rounded-2xl bg-white/70 dark:bg-zinc-900/50 backdrop-blur-md border border-black/5 dark:border-white/10 hover:border-rose-500/30 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center mr-4 shrink-0 shadow-inner">
                  <CheckCircle2 className="w-6 h-6 text-rose-500" />
                </div>
                <span className="text-lg font-bold text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
