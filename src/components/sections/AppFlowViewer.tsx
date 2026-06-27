import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";
import { 
  User, 
  GraduationCap, 
  Settings, 
  LayoutDashboard, 
  Calendar, 
  CreditCard, 
  BookOpen, 
  Award, 
  ClipboardList, 
  CheckCircle,
  TrendingUp,
  Users,
  PenTool,
  Clock,
  Play,
  ArrowLeft
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ThreePhoneShowcase } from "@/components/sections/ThreePhoneShowcase";

interface ScreenItem {
  id: string;
  title: string;
  desc: string;
  image: string;
  icon: any;
}

interface RoleFlow {
  role: string;
  label: string;
  icon: any;
  screens: ScreenItem[];
}

const roleFlows: RoleFlow[] = [
  {
    role: "student",
    label: "Student & Parent Hub",
    icon: GraduationCap,
    screens: [
      {
        id: "s-dash",
        title: "Student Dashboard",
        desc: "Main learning dashboard. [Click 'Attendance', 'Fees', or 'Take a Quiz' in the image to navigate!]",
        image: "/images/1000770067.jpg",
        icon: LayoutDashboard,
      },
      {
        id: "s-attendance",
        title: "Attendance Calendar",
        desc: "Color-coded monthly view of presence, absences, and holidays, with leave request action.",
        image: "/images/1000770068.jpg",
        icon: Calendar,
      },
      {
        id: "s-fees",
        title: "Fees & Invoices",
        desc: "Transparent list of current and historical fees with pending payments status.",
        image: "/images/1000770071.jpg",
        icon: CreditCard,
      },
      {
        id: "s-quizzes",
        title: "Practice Quizzes",
        desc: "List of assigned quizzes. [Click 'Start Quiz' in the image to begin!]",
        image: "/images/1000770072.jpg",
        icon: BookOpen,
      },
      {
        id: "s-testing",
        title: "Live Test Session",
        desc: "Interactive multiple-choice test taking experience. [Click options/submit to finish!]",
        image: "/images/1000770074.jpg",
        icon: Clock,
      },
      {
        id: "s-scores",
        title: "Performance Insights",
        desc: "Visual subject-wise analysis, best scores, progress trackers, and detailed scorecards.",
        image: "/images/1000770079.jpg",
        icon: Award,
      },
    ],
  },
  {
    role: "teacher",
    label: "Teacher Portal",
    icon: User,
    screens: [
      {
        id: "t-dash",
        title: "Teacher Dashboard",
        desc: "Operational base showing class statistics. [Click 'Attendance' or 'Homework' in image!]",
        image: "/images/1000770082.jpg",
        icon: LayoutDashboard,
      },
      {
        id: "t-attendance",
        title: "Daily Attendance",
        desc: "Roll-call panel to mark student attendance for specific batches easily.",
        image: "/images/1000770083.jpg",
        icon: Calendar,
      },
      {
        id: "t-homework",
        title: "Homework Dispatcher",
        desc: "Assign homework tasks to full batches or specific students with instructions.",
        image: "/images/1000770084.jpg",
        icon: ClipboardList,
      },
      {
        id: "t-leaves",
        title: "Review Leave Requests",
        desc: "Approve or reject sick leaves and other student absences.",
        image: "/images/1000770085.jpg",
        icon: CheckCircle,
      },
      {
        id: "t-leaderboard",
        title: "Student Leaderboard",
        desc: "Class performance metrics and leaderboard ranking students based on test grades.",
        image: "/images/1000770088.jpg",
        icon: Award,
      },
    ],
  },
];

export function AppFlowViewer() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  const currentRole = roleFlows[activeRoleIndex];
  const currentScreen = currentRole.screens[activeScreenIndex];

  const handleRoleChange = (idx: number) => {
    setActiveRoleIndex(idx);
    setActiveScreenIndex(0);
  };

  return (
    <div className="w-full flex flex-col items-center" id="app-flow">
      
      {!isExpanded ? (
        <div className="flex flex-col items-center text-center w-full px-4 max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-10 max-w-3xl">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6 text-foreground leading-tight">
              Manage Learning on the Go with <br/>
              <span className="text-gradient">VHA EduTech App</span>
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Our custom application connects students, parents, teachers, and administrators. See class updates, attendance trackers, fee status, and interactive quizzes in one place.
            </p>
          </div>

          {/* Three Phone Showcase */}
          <div className="w-full flex justify-center scale-75 md:scale-90 lg:scale-100 transform origin-center select-none">
            <ThreePhoneShowcase />
          </div>

          {/* Explore Button */}
          <div className="flex justify-center mt-6">
            <Button 
              size="lg" 
              className="h-14 px-8 text-lg font-semibold group rounded-2xl shadow-primary-500/25"
              onClick={() => setIsExpanded(true)}
            >
              <Play className="w-5 h-5 mr-3 fill-white group-hover:scale-110 transition-transform" /> 
              Explore Flow
            </Button>
          </div>
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full flex flex-col items-center"
        >
          {/* Back Button */}
          <div className="w-full flex justify-start mb-6 max-w-7xl px-4 lg:px-8">
            <button
              onClick={() => setIsExpanded(false)}
              className="flex items-center gap-2 text-sm font-semibold text-zinc-500 hover:text-primary-500 dark:text-zinc-400 dark:hover:text-primary-400 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Showcase
            </button>
          </div>

          {/* Section Header */}
          <div className="text-center max-w-3xl mb-12 lg:mb-16 px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-foreground">
              Experience the Academy Workflows
            </h2>
            <p className="text-base lg:text-lg text-zinc-600 dark:text-zinc-400">
              Interactive simulator is active. Toggle between student, teacher, and admin portals below and browse screens to explore features.
            </p>
          </div>

          {/* Role Tabs */}
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-10 w-full max-w-4xl px-4">
            {roleFlows.map((flow, idx) => {
              const Icon = flow.icon;
              const isActive = activeRoleIndex === idx;
              return (
                <button
                  key={flow.role}
                  onClick={() => handleRoleChange(idx)}
                  className={cn(
                    "flex items-center gap-2 lg:gap-3 px-5 py-3 lg:py-3.5 rounded-2xl border transition-all duration-300 font-semibold text-sm lg:text-base",
                    isActive
                      ? "bg-primary-500 text-white border-primary-500 shadow-xl shadow-primary-500/20"
                      : "bg-white dark:bg-zinc-900 border-black/5 dark:border-white/5 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                  )}
                >
                  <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
                  {flow.label}
                </button>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-12 gap-6 md:gap-12 lg:gap-16 items-start lg:items-center w-full max-w-7xl px-4 lg:px-8">
            
            {/* Left: Screens List */}
            <div className="lg:col-span-7 space-y-4 order-2 lg:order-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeRoleIndex}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  {currentRole.screens.map((screen, index) => {
                    const isActive = activeScreenIndex === index;
                    const Icon = screen.icon;

                    return (
                      <button
                        key={screen.id}
                        onClick={() => setActiveScreenIndex(index)}
                        className={cn(
                          "w-full text-left p-3 md:p-5 rounded-2xl transition-all duration-300 border flex items-center md:items-start gap-3 md:gap-4",
                          isActive
                            ? "bg-primary-50 dark:bg-primary-500/10 border-primary-200 dark:border-primary-500/30 shadow-md"
                            : "bg-white dark:bg-zinc-900/40 border-black/5 dark:border-white/5 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                        )}
                      >
                        <div
                          className={cn(
                            "flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center transition-colors",
                            isActive
                              ? "bg-primary-500 text-white"
                              : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400"
                          )}
                        >
                          <Icon className="w-4 h-4 md:w-5 md:h-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3
                            className={cn(
                              "text-xs sm:text-sm md:text-base lg:text-lg font-bold transition-colors leading-tight md:leading-normal truncate md:whitespace-normal md:mb-1",
                              isActive ? "text-primary-700 dark:text-primary-300" : "text-zinc-900 dark:text-zinc-200"
                            )}
                          >
                            {screen.title}
                          </h3>
                          <p
                            className={cn(
                              "text-xs lg:text-sm leading-relaxed transition-colors hidden md:block",
                              isActive ? "text-primary-900/70 dark:text-primary-100/70" : "text-zinc-500 dark:text-zinc-400"
                            )}
                          >
                            {screen.desc}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: Simulator Mockup */}
            <div className="lg:col-span-5 flex justify-center relative order-1 lg:order-2">
              <div className="relative w-full max-w-[280px] lg:max-w-[320px] aspect-[0.4825]">
                <div className="absolute inset-0 bg-primary-500/20 dark:bg-primary-500/20 blur-[80px] rounded-full z-0 pointer-events-none" />
                
                <div className="relative z-10 w-full h-full">
                  <div 
                    className="absolute z-0 overflow-hidden bg-black select-none w-[94.56%] h-[97.38%]"
                    style={{ top: "1.31%", left: "2.72%", borderRadius: "1.8rem" }}
                  >
                    <AnimatePresence>
                      <motion.img
                        key={currentScreen.id}
                        src={currentScreen.image}
                        alt={currentScreen.title}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none"
                      />
                    </AnimatePresence>
                  </div>

                  <img 
                    src="/images/phone_transparent.png" 
                    alt="Device Mockup Frame" 
                    className="w-full h-full relative z-30 pointer-events-none drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </div>
  );
}
