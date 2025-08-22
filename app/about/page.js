'use client';

import AboutCTA from "@/components/AboutCTA";
import AboutHeroSection from "@/components/AboutHeroSection";
import Announcement from "@/components/Announcement";
import HowWeWork from "@/components/HowWeWork";
import Missions from "@/components/Missions";
import Reviews from "@/components/Reviews";
import ScrollToTop from "@/components/ScrollToTop";
import Stats from "@/components/Stats";
import Story from "@/components/Story";
import Team from "@/components/Team";
import Techs from "@/components/Techs";
import WhyUs from "@/components/WhyUs";
import React from "react";


const About = () => {
  

  return (
    <div className="bg-white text-gray-800">

      <ScrollToTop/>

      <Announcement/>

      <AboutHeroSection/>

      <Missions/>

      <Story/>

      <Techs/>

      <HowWeWork/>

      <Team/>

      <Stats/>

      <Reviews/>

      <WhyUs/>

      <AboutCTA/>
    </div>
  );
};

export default About;
