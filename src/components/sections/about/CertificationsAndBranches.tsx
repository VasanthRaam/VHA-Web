import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ShieldCheck, Music, CheckCircle2 } from 'lucide-react';
import { cn } from '@/utils/cn';

export function CertificationsAndBranches() {
  const branches = [
    { name: "Main Branch", location: "Melaputhur", color: "from-blue-600 to-indigo-600", shadow: "shadow-blue-500/30", mapUrl: "https://maps.app.goo.gl/T4sCfMVVgyvMKaMH8" },
    { name: "Second Branch", location: "Vaiyampatti", color: "from-emerald-500 to-teal-600", shadow: "shadow-emerald-500/30" }
  ];

  return (
    <section className="py-32 relative bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Certifications */}
        <div className="mb-40">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-6 font-bold uppercase tracking-wider text-sm border border-emerald-500/20">
              <ShieldCheck className="w-4 h-4" /> Recognition & Certifications
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">A Mark of Excellence</h2>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-zinc-900 rounded-[2rem] p-10 border border-black/5 dark:border-white/10 shadow-lg relative overflow-hidden group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-emerald-500/10 rounded-full blur-[40px] group-hover:bg-emerald-500/20 transition-colors" />
              <ShieldCheck className="w-16 h-16 text-emerald-500 mb-6 relative z-10" />
              <h3 className="text-3xl font-bold text-foreground mb-4 relative z-10">ISO Registered Concern</h3>
              <p className="text-lg text-zinc-650 dark:text-zinc-400 relative z-10 leading-relaxed">
                Vasanth Academy is an ISO-certified organization, reflecting our unwavering commitment to maintaining the highest standards of quality education.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-zinc-900 rounded-[2rem] p-10 border border-black/5 dark:border-white/10 shadow-lg relative overflow-hidden group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-[40px] group-hover:bg-purple-500/20 transition-colors" />
              <Music className="w-16 h-16 text-purple-500 mb-6 relative z-10" />
              <h3 className="text-2xl font-bold text-foreground mb-4 relative z-10">All India Music & Dance Federation</h3>
              <p className="text-zinc-650 dark:text-zinc-400 mb-6 relative z-10">
                Our Music & Dance courses are conducted through a globally recognized federation.
              </p>
              <ul className="space-y-4 relative z-10">
                {["Grade 1–8 Examinations", "Diploma Courses", "Advanced Diploma Courses"].map((item, i) => (
                  <li key={i} className="flex items-center text-zinc-700 dark:text-zinc-300 font-bold">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 mr-4 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Branches */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 mb-6 font-bold uppercase tracking-wider text-sm border border-blue-500/20">
              <MapPin className="w-4 h-4" /> Our Locations
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">Physical Branches</h2>
            <p className="text-xl text-zinc-650 dark:text-zinc-400 max-w-2xl mx-auto">
              Join our vibrant community in-person at our state-of-the-art facilities. Click Main Branch for Google Maps direction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto">
            {branches.map((branch, idx) => {
              const cardContent = (
                <>
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-[40px] group-hover:scale-150 transition-transform duration-700" />
                  
                  <MapPin className="w-12 h-12 text-white/90 mb-8 relative z-10" />
                  <p className="text-white/80 font-bold tracking-widest uppercase text-sm mb-2 relative z-10">{branch.name}</p>
                  <h3 className="text-4xl md:text-5xl font-display font-bold text-white relative z-10">{branch.location}</h3>
                </>
              );
              
              const className = cn(
                "relative p-12 rounded-[3rem] bg-gradient-to-br text-white shadow-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-500 border border-white/10 text-left block w-full",
                branch.color, branch.shadow
              );

              if (branch.mapUrl) {
                return (
                  <motion.a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className={className}
                  >
                    {cardContent}
                  </motion.a>
                );
              }

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className={className}
                >
                  {cardContent}
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
