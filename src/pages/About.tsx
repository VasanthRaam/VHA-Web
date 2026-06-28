import React, { Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { AboutHero } from "@/components/sections/about/AboutHero";

// Lazy load below-the-fold sections to ensure the Hero paints instantly
const JourneyTimeline = React.lazy(() => import("@/components/sections/about/JourneyTimeline").then(m => ({ default: m.JourneyTimeline })));
const AnimatedStats = React.lazy(() => import("@/components/sections/about/AnimatedStats").then(m => ({ default: m.AnimatedStats })));
const MissionVision = React.lazy(() => import("@/components/sections/about/MissionVision").then(m => ({ default: m.MissionVision })));
const FacultyAndLeadership = React.lazy(() => import("@/components/sections/about/FacultyAndLeadership").then(m => ({ default: m.FacultyAndLeadership })));
const CertificationsAndBranches = React.lazy(() => import("@/components/sections/about/CertificationsAndBranches").then(m => ({ default: m.CertificationsAndBranches })));

const SectionLoader = () => (
  <div className="w-full h-96 flex items-center justify-center bg-background">
    <div className="w-8 h-8 rounded-full border-2 border-primary-500 border-t-transparent animate-spin opacity-50" />
  </div>
);

export function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Vasanth Academy</title>
        <meta name="description" content="Discover Vasanth Academy's 18+ years journey, our expert faculty, and our mission to provide quality personalized education." />
      </Helmet>
      
      <div className="overflow-hidden bg-background">
        <AboutHero />
        
        <Suspense fallback={<SectionLoader />}>
          <JourneyTimeline />
          <AnimatedStats />
          <MissionVision />
          <FacultyAndLeadership />
          <CertificationsAndBranches />
        </Suspense>
      </div>
    </>
  );
}
