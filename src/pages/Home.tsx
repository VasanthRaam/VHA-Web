import React from "react";
import { Helmet } from "react-helmet-async";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Link } from "react-router-dom";
import { Sparkles, PhoneCall, Music, BookOpen, PenTool, Globe, ChevronRight } from "lucide-react";
import { AppFlowViewer } from "@/components/sections/AppFlowViewer";
import { LearningPrograms } from "@/components/sections/LearningPrograms";
import { StudentLifeGallery } from "@/components/sections/StudentLifeGallery";
import { ImageWithPreview } from "@/components/ui/ImageWithPreview";

export function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);



  const scrollToAppFlow = () => {
    document.getElementById("app-flow")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>Vasanth Academy | Excellence in Education & Arts</title>
        <meta name="description" content="Join Vasanth Academy for top-tier coaching in academics, languages, dance, music, and arts. Enquire now!" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-primary-600/20 blur-[150px] rounded-full"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.5, 1],
              x: [0, 100, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full"
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="text-left max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Badge variant="primary" className="mb-6 backdrop-blur-md">
                  <Sparkles className="w-3 h-3 mr-2" /> Admissions Open 2026
                </Badge>
              </motion.div>
              
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold tracking-tight mb-8 leading-tight text-foreground"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              >
                Nurturing talent, <br/>
                <span className="text-gradient">shaping futures.</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg lg:text-xl text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                Vasanth Academy is your premier destination for holistic education. From academic excellence and languages to dance and arts, we provide world-class coaching under one roof.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                <Link to="/contact">
                  <Button size="lg" className="h-14 px-8 text-lg font-semibold group rounded-2xl shadow-primary-500/25">
                    <PhoneCall className="w-5 h-5 mr-3 group-hover:animate-bounce" /> 
                    Call for Enquiry
                  </Button>
                </Link>
                <Button variant="ghost" size="lg" className="h-14 group text-foreground" onClick={scrollToAppFlow}>
                  Explore App Flow <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>

            {/* Right: Hero Cover Image Card */}
            <div className="relative flex justify-center lg:justify-end items-center w-full mt-12 lg:mt-0">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-full max-w-[500px] aspect-[16/10] rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-2xl border border-black/10 dark:border-white/10 group bg-zinc-900"
              >
                <ImageWithPreview
                  src="/images/1782645201159.jpg"
                  alt="Vasanth Academy Cover Photo"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Programs Section */}
      <section className="py-32 relative bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <LearningPrograms />
        </div>
      </section>
      
      {/* Student Life & Achievements Section */}
      <section className="py-32 relative bg-background transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StudentLifeGallery />
        </div>
      </section>

      {/* Exclusive App Feature Highlight - Interactive App Flow Viewer */}
      <section className="py-32 relative overflow-hidden bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AppFlowViewer />
        </div>
      </section>
    </>
  );
}
