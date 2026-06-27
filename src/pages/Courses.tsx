import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { BookOpen, Globe, Music, PenTool, CheckCircle2 } from "lucide-react";

export function Courses() {
  const categories = [
    {
      title: "Academic Subjects",
      icon: BookOpen,
      color: "from-blue-500 to-indigo-500",
      description: "Comprehensive coaching for school syllabus across all major boards (CBSE, ICSE, State).",
      features: ["Mathematics & Science focus", "Regular mock tests", "Doubt clearing sessions"]
    },
    {
      title: "Language Programs",
      icon: Globe,
      color: "from-green-400 to-emerald-600",
      description: "Master the Hindi language with our expert instructors. Perfect for both beginners and advanced learners.",
      features: ["Reading & Writing", "Spoken Hindi fluency", "Grammar & Vocabulary"]
    },
    {
      title: "Dance Academy",
      icon: Music,
      color: "from-rose-400 to-red-600",
      description: "Express yourself through movement. We offer classical and modern dance training.",
      features: ["Classical Bharatanatyam", "Western & Contemporary", "Stage performance training"]
    },
    {
      title: "Music & Vocals",
      icon: Music,
      color: "from-purple-400 to-purple-600",
      description: "Discover your rhythm and voice with our specialized music programs.",
      features: ["Keyboard & Piano", "Classical Singing", "Voice Modulation"]
    },
    {
      title: "Drawing & Fine Arts",
      icon: PenTool,
      color: "from-amber-400 to-orange-500",
      description: "Unleash your creativity. Learn foundational and advanced art techniques.",
      features: ["Sketching & Shading", "Watercolor & Acrylics", "Digital Art basics"]
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 lg:px-8 max-w-7xl mx-auto">
      <Helmet>
        <title>Our Courses | VHA EduTech Academy</title>
      </Helmet>
      
      <div className="text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl lg:text-6xl font-display font-bold mb-6 text-foreground"
        >
          Explore Our Courses
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-zinc-650 dark:text-zinc-400 max-w-3xl mx-auto"
        >
          We offer a diverse range of programs designed to nurture talent and promote holistic development.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {categories.map((cat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white/70 dark:bg-zinc-900/50 border border-black/5 dark:border-white/10 p-8 rounded-3xl relative overflow-hidden group hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-all duration-500 shadow-md backdrop-blur-md"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cat.color} blur-3xl opacity-10 group-hover:opacity-30 transition-opacity duration-500 rounded-full`} />
            
            <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-white mb-6 shadow-sm`}>
              <cat.icon className="w-7 h-7" />
            </div>
            
            <h2 className="text-2xl font-bold text-foreground mb-3">{cat.title}</h2>
            <p className="text-zinc-650 dark:text-zinc-400 mb-8">{cat.description}</p>
            
            <ul className="space-y-3">
              {cat.features.map((feature, i) => (
                <li key={i} className="flex items-center text-zinc-700 dark:text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-primary-500 mr-3 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
