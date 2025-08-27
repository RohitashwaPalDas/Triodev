"use client";

import React from "react";

import WorkHeroSection from "@/components/WorkHeroSection";
import Projects from "@/components/Projects";

const WorkPage = () => {
  return (
    <div className="min-h-screen py-10 relative overflow-hidden">

      <WorkHeroSection />

      <Projects/>

      
    </div>
  );
};

export default WorkPage;
