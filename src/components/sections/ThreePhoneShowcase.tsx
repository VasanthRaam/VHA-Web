import React from "react";
import { motion } from "framer-motion";

export function ThreePhoneShowcase() {
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center select-none">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-primary-500/10 dark:bg-primary-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* 3-Phone Stack Container */}
      <div className="relative w-full max-w-[500px] aspect-[0.8] flex items-center justify-center">
        
        {/* Left Phone */}
        <motion.div
          initial={{ opacity: 0, x: -60, rotate: -10, scale: 0.8 }}
          animate={{ opacity: 1, x: -70, rotate: -6, scale: 0.88 }}
          transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
          className="absolute left-0 z-10 w-[240px] aspect-[0.4825]"
        >
          {/* Minimal Label in Center of Camera Notch */}
          <div className="absolute top-[2.4%] left-1/2 transform -translate-x-1/2 z-20 bg-zinc-950/80 backdrop-blur-md px-3 py-0.5 rounded-full border border-white/10 pointer-events-none flex items-center justify-center shadow-lg">
            <span className="text-[8px] font-bold text-white tracking-widest uppercase leading-none">Attendance</span>
          </div>

          {/* Screenshot (Behind) */}
          <div 
            className="absolute z-0 overflow-hidden bg-black w-[94.56%] h-[97.38%]"
            style={{ top: "1.31%", left: "2.72%", borderRadius: "1.2rem" }}
          >
            <img src="/images/1000770068.jpg" alt="Student Attendance" className="w-full h-full object-cover object-top" />
          </div>
          {/* Transparent Device Frame (Top) */}
          <img src="/images/phone_transparent.png" alt="Device Frame" className="w-full h-full relative z-10 pointer-events-none drop-shadow-[0_15px_35px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)]" />
        </motion.div>

        {/* Right Phone */}
        <motion.div
          initial={{ opacity: 0, x: 60, rotate: 10, scale: 0.8 }}
          animate={{ opacity: 1, x: 70, rotate: 6, scale: 0.88 }}
          transition={{ type: "spring", stiffness: 50, delay: 0.3 }}
          className="absolute right-0 z-20 w-[240px] aspect-[0.4825]"
        >
          {/* Minimal Label in Center of Camera Notch */}
          <div className="absolute top-[2.4%] left-1/2 transform -translate-x-1/2 z-20 bg-zinc-950/80 backdrop-blur-md px-3 py-0.5 rounded-full border border-white/10 pointer-events-none flex items-center justify-center shadow-lg">
            <span className="text-[8px] font-bold text-white tracking-widest uppercase leading-none">Teacher</span>
          </div>

          <div 
            className="absolute z-0 overflow-hidden bg-black w-[94.56%] h-[97.38%]"
            style={{ top: "1.31%", left: "2.72%", borderRadius: "1.2rem" }}
          >
            <img src="/images/1000770082.jpg" alt="Teacher Dashboard" className="w-full h-full object-cover object-top" />
          </div>
          <img src="/images/phone_transparent.png" alt="Device Frame" className="w-full h-full relative z-10 pointer-events-none drop-shadow-[0_15px_35px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)]" />
        </motion.div>

        {/* Center Phone */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 60, delay: 0.1 }}
          className="absolute z-30 w-[260px] aspect-[0.4825]"
        >
          {/* Minimal Label in Center of Camera Notch */}
          <div className="absolute top-[2.4%] left-1/2 transform -translate-x-1/2 z-20 bg-zinc-950/80 backdrop-blur-md px-3.5 py-0.5 rounded-full border border-white/15 pointer-events-none flex items-center justify-center shadow-lg">
            <span className="text-[9px] font-bold text-white tracking-widest uppercase leading-none">Student</span>
          </div>

          <div 
            className="absolute z-0 overflow-hidden bg-black w-[94.56%] h-[97.38%]"
            style={{ top: "1.31%", left: "2.72%", borderRadius: "1.3rem" }}
          >
            <img src="/images/1000770067.jpg" alt="Student Dashboard" className="w-full h-full object-cover object-top" />
          </div>
          <img src="/images/phone_transparent.png" alt="Device Frame" className="w-full h-full relative z-10 pointer-events-none drop-shadow-[0_25px_50px_rgba(0,0,0,0.3)] dark:drop-shadow-[0_25px_50px_rgba(0,0,0,0.8)]" />
        </motion.div>

      </div>
    </div>
  );
}
