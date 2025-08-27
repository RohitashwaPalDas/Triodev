"use client";

import React from "react";
import ProjectTitle from "@/components/ProjectTitle";
import ProjectImages from "@/components/ProjectImages";
import ProjectTechs from "@/components/ProjectTechs";
import ProjectFeatures from "@/components/ProjectFeatures";
import ProjectBusinessValue from "@/components/ProjectBusinessValue";
import ProjectReliability from "@/components/ProjectReliability";
import ProjectClientImpact from "@/components/ProjectClientImpact";
import ProjectLinks from "@/components/ProjectLinks";

const ProjectDetailsClient = ({ selectedProject }) => {
  
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white via-blue-50 to-white text-gray-900 py-2 px-4 md:px-12 md:py-16 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-20">
        <ProjectTitle selectedProject={selectedProject}/>

        <ProjectImages selectedProject={selectedProject}/>

        <ProjectTechs selectedProject={selectedProject}/>

        <ProjectFeatures selectedProject={selectedProject}/>

        <ProjectBusinessValue selectedProject={selectedProject}/>

        <ProjectReliability selectedProject={selectedProject}/>

        <ProjectClientImpact selectedProject={selectedProject} />

        <ProjectLinks selectedProject={selectedProject} />
        
      </div>
    </div>
  );
};

export default ProjectDetailsClient;
