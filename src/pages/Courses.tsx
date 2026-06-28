import React from "react";
import { Helmet } from "react-helmet-async";
import { LearningPrograms } from "@/components/sections/LearningPrograms";

export function Courses() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-8 max-w-7xl mx-auto">
      <Helmet>
        <title>Our Programs | Vasanth Academy</title>
      </Helmet>
      
      <LearningPrograms animateEntrance={false} />
    </div>
  );
}
