import React from "react";
import { Helmet } from "react-helmet-async";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Link } from "react-router-dom";
import { Sparkles, PhoneCall, Music, BookOpen, PenTool, Globe, ChevronRight } from "lucide-react";
import { AppFlowViewer } from "@/components/sections/AppFlowViewer";
import { ThreePhoneShowcase } from "@/components/sections/ThreePhoneShowcase";

export function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const courses = [
    { title: "Academic Subjects", icon: BookOpen, desc: "Comprehensive coaching for school syllabus.", color: "from-blue-500 to-indigo-500" },
    { title: "Hindi Language", icon: Globe, desc: "Learn reading, writing, and speaking fluently.", color: "from-green-400 to-emerald-600" },
    { title: "Dance Academy", icon: Music, desc: "Western and traditional Bharatanatyam classes.", color: "from-rose-400 to-red-600" },
    { title: "Keyboard & Singing", icon: Music, desc: "Vocal training and instrumental mastery.", color: "from-purple-400 to-purple-600" },
    { title: "Drawing & Arts", icon: PenTool, desc: "Express creativity through guided art sessions.", color: "from-amber-400 to-orange-500" },
  ];

  const scrollToAppFlow = () => {
    document.getElementById("app-flow")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>VHA EduTech Academy | Excellence in Education & Arts</title>
        <meta name="description" content="Join VHA EduTech Academy for top-tier coaching in academics, languages, dance, music, and arts. Enquire now!" />
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
                VHA EduTech Academy is your premier destination for holistic education. From academic excellence and languages to dance and arts, we provide world-class coaching under one roof.
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

            {/* Right: Single Mockup Hero Preview */}
            <div className="relative hidden lg:flex justify-end items-center">
              <div className="relative w-full max-w-[280px] aspect-[0.4825] drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                <div 
                  className="absolute z-0 overflow-hidden bg-black w-[94.56%] h-[97.38%]"
                  style={{
                    top: "1.31%",
                    left: "2.72%",
                    borderRadius: "1.8rem",
                  }}
                >
                  <img
                    src="/images/1000770067.jpg"
                    alt="Student Dashboard"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <img 
                  src="/images/phone_transparent.png" 
                  alt="Device Mockup Frame" 
                  className="w-full h-full relative z-10 pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-32 relative bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6 text-foreground">Master Your Passion</h2>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                We offer a wide spectrum of courses taught by industry professionals and experienced educators.
              </p>
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${course.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-500`} />
                
                <div className="relative h-full glass-card rounded-3xl p-8 hover:bg-white dark:hover:bg-zinc-800/50 transition-colors duration-500 overflow-hidden">
                  <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-500`}>
                    <course.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{course.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {course.desc}
                  </p>
                  
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-black/5 dark:bg-white/5 rounded-full blur-2xl group-hover:bg-black/10 dark:group-hover:bg-white/10 transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Exclusive App Feature Highlight - Interactive App Flow Viewer */}
      <section className="py-32 relative overflow-hidden bg-background transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AppFlowViewer />
        </div>
      </section>
    </>
  );
}
