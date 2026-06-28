import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Users, BookOpen, GraduationCap } from 'lucide-react';
import { cn } from '@/utils/cn';

function CountUp({ end, suffix = "+", duration = 2000 }: { end: number, suffix?: string, duration?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeProgress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function AnimatedStats() {
  const stats = [
    { label: "Years of Excellence", value: 18, icon: Award, color: "text-blue-500", bg: "bg-blue-500/10" },
    { label: "Students Trained", value: 1500, icon: Users, color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { label: "Hindi Pandits Produced", value: 1000, icon: GraduationCap, color: "text-purple-500", bg: "bg-purple-500/10" },
    { label: "Expert Faculty", value: 10, icon: BookOpen, color: "text-rose-500", bg: "bg-rose-500/10" }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-zinc-900 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-800/50 border border-black/5 dark:border-white/10 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-6", stat.bg, stat.color)}>
                <stat.icon className="w-8 h-8" />
              </div>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2">
                <CountUp end={stat.value} />
              </h3>
              <p className="text-sm md:text-base font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
