import React from "react";
import { Sparkles } from "lucide-react";
import { CheckCircle } from "lucide-react";

const ProjectFeatures = ({ selectedProject }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-blue-800 flex items-center gap-3">
        <Sparkles className="w-10 h-10 text-yellow-500" /> Features
      </h2>
      <ul className="grid md:grid-cols-2 gap-6">
        {selectedProject.features.map((feature, index) => (
          <li
            key={index}
            className="p-6 bg-gradient-to-r from-blue-50 via-sky-50 to-blue-100 border border-blue-200 rounded-xl shadow hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-blue-600 mt-1" />
              <p className="text-gray-800 text-lg font-medium">{feature}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectFeatures;
