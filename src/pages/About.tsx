import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Award, Users, Target, CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-8 max-w-7xl mx-auto">
      <Helmet>
        <title>About Us | VHA EduTech Academy</title>
      </Helmet>
      
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl lg:text-5xl font-display font-bold mb-6 text-foreground">Our Story & Vision</h1>
          <p className="text-xl text-zinc-650 dark:text-zinc-400 mb-6 leading-relaxed">
            VHA EduTech Academy was founded with a singular mission: to provide holistic, high-quality education that goes beyond just textbooks. 
          </p>
          <p className="text-lg text-zinc-600 dark:text-zinc-500 mb-8 leading-relaxed">
            We believe in nurturing every aspect of a student's potential. Whether it's mastering complex academic subjects, learning a new language, or expressing creativity through dance and arts, our academy is built to support students at every step.
          </p>
          <ul className="space-y-4">
            {["Expert Faculty", "State-of-the-art Facilities", "Custom Student App", "Personalized Attention"].map((item, i) => (
              <li key={i} className="flex items-center text-zinc-700 dark:text-zinc-300 font-medium">
                <CheckCircle2 className="w-5 h-5 text-primary-500 mr-3 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-[300px] md:h-[500px]"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-transparent rounded-[3rem] border border-black/5 dark:border-white/10 backdrop-blur-xl -rotate-6 scale-95" />
          <img 
            src="/images/1000770067.jpg" 
            alt="Academy Student Dashboard" 
            className="absolute inset-0 w-full h-full object-cover object-top rounded-[3rem] shadow-2xl border border-black/5 dark:border-white/5"
          />
        </motion.div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "Excellence", icon: Award, desc: "We strive for academic and artistic excellence in everything we teach." },
          { title: "Community", icon: Users, desc: "Building a supportive environment where students thrive together." },
          { title: "Innovation", icon: Target, desc: "Integrating technology like our custom App and AI Tutor to enhance learning." }
        ].map((val, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white/70 dark:bg-zinc-900/50 border border-black/5 dark:border-white/10 p-8 rounded-3xl text-center shadow-md backdrop-blur-md"
          >
            <div className="h-16 w-16 mx-auto rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-500 dark:text-primary-400 mb-6">
              <val.icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{val.title}</h3>
            <p className="text-zinc-650 dark:text-zinc-400">{val.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
