import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Users, BookOpen, Star } from 'lucide-react';
import { cn } from '@/utils/cn';

export function FacultyAndLeadership() {
  const successItems = [
    { icon: GraduationCap, title: "1000+ Hindi Pandits", desc: "Graduated with top honors and mastery over the language.", color: "text-purple-500", bg: "bg-purple-500/10" },
    { icon: Users, title: "Future Educators", desc: "Many of our proud alumni have become successful teachers and trainers.", color: "text-blue-500", bg: "bg-blue-500/10" },
    { icon: Star, title: "Top Achievers", desc: "Consistent excellence and top-tier results in all board and grade examinations.", color: "text-amber-500", bg: "bg-amber-500/10" }
  ];

  const facultyFeatures = [
    "10+ Experienced Teachers",
    "Subject Specialists",
    "Faculty Development Programs",
    "Regular Teaching Workshops",
    "Personalized Student Guidance"
  ];

  return (
    <section className="py-32 relative bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Student Success */}
        <div className="mb-40">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 mb-6 font-bold uppercase tracking-wider text-sm border border-amber-500/20">
              <Award className="w-4 h-4" /> Achievements
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">Student Success</h2>
            <p className="text-xl text-zinc-650 dark:text-zinc-400 max-w-2xl mx-auto">
              Our greatest achievement is the success of our students, many of whom have gone on to inspire others.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {successItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md rounded-[2rem] p-8 border border-black/5 dark:border-white/10 shadow-xl shadow-black/5 hover:-translate-y-2 hover:shadow-2xl hover:border-black/10 dark:hover:border-white/20 transition-all duration-300"
              >
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-inner", item.bg, item.color)}>
                  <item.icon className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-4">{item.title}</h4>
                <p className="text-zinc-650 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-40">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">Our Leadership</h2>
            <p className="text-xl text-zinc-650 dark:text-zinc-400 max-w-2xl mx-auto">
              The visionaries driving Vasanth Academy forward.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-zinc-900 rounded-[2rem] p-12 text-center border border-black/5 dark:border-white/10 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-32 h-32 mx-auto rounded-[2rem] bg-gradient-to-br from-primary-500 to-blue-500 mb-8 flex items-center justify-center text-white text-5xl font-display font-bold shadow-xl shadow-primary-500/20 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                R
              </div>
              <h3 className="text-3xl font-display font-bold text-foreground mb-3">Mrs. Revathi G.</h3>
              <p className="text-primary-600 dark:text-primary-400 font-bold mb-6 uppercase tracking-widest text-sm">Founder & Proprietor</p>
              <p className="text-zinc-650 dark:text-zinc-400 leading-relaxed">
                A passionate educator whose dedication to personalized teaching laid the foundation for the academy.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-zinc-900 rounded-[2rem] p-12 text-center border border-black/5 dark:border-white/10 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-32 h-32 mx-auto rounded-[2rem] bg-gradient-to-br from-blue-500 to-purple-500 mb-8 flex items-center justify-center text-white text-5xl font-display font-bold shadow-xl shadow-purple-500/20 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                V
              </div>
              <h3 className="text-3xl font-display font-bold text-foreground mb-3">Mr. Vignesh</h3>
              <p className="text-blue-600 dark:text-blue-400 font-bold mb-6 uppercase tracking-widest text-sm">Proprietor</p>
              <p className="text-zinc-650 dark:text-zinc-400 leading-relaxed">
                A visionary leader driving the academy's modern educational approach and strategic expansion.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Faculty */}
        <div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">Faculty Excellence</h2>
              <p className="text-xl text-zinc-650 dark:text-zinc-400 mb-10 leading-relaxed">
                Our institution is powered by a team of highly dedicated subject specialists who believe in continuous improvement and personalized guidance.
              </p>
              <ul className="space-y-5">
                {facultyFeatures.map((feature, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="flex items-center text-zinc-700 dark:text-zinc-300 font-bold text-lg bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-sm border border-black/5 dark:border-white/5"
                  >
                    <span className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center mr-5 shrink-0">
                      <BookOpen className="w-5 h-5 text-primary-500" />
                    </span>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="aspect-[4/4] md:aspect-[4/3] lg:aspect-square rounded-[3rem] bg-zinc-200 dark:bg-zinc-800 relative overflow-hidden flex items-center justify-center shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-purple-500/20 mix-blend-overlay" />
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30" />
              <Users className="w-32 h-32 text-zinc-500/50 dark:text-zinc-600/50 relative z-10" />
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
