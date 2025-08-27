import React from "react";

const ProjectLinks = ({ selectedProject }) => {
  return (
    <div className="flex flex-wrap gap-6 justify-center mt-12">
      <a
        href={selectedProject.liveDemo}
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:bg-blue-700 hover:scale-105 transition transform duration-300"
      >
        🚀 Live Demo
      </a>
      <a
        href={selectedProject.github}
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-2xl shadow-lg hover:bg-gray-800 hover:scale-105 transition transform duration-300"
      >
        💻 View Code
      </a>
    </div>
  );
};

export default ProjectLinks;
