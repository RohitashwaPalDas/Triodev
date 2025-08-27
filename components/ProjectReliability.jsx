import React from "react";

const ProjectReliability = ({ selectedProject }) => {
  return (
    <div className="relative py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-3xl shadow-inner">
      <h2 className="text-3xl font-extrabold mb-12 text-blue-900 flex items-center gap-3 justify-center">
        <span className="p-3 bg-blue-200 rounded-full text-blue-800 shadow-md">
          <i className="fa-solid fa-lock fa-bounce"></i>
        </span>
        Reliability
      </h2>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto pr-2 sm:pr-0">
        {/* Vertical Line */}
        <div className="absolute left-6 top-0 h-full w-1 bg-gradient-to-b from-blue-300 to-blue-600 rounded-full "></div>

        <div className="space-y-10">
          {selectedProject.reliability.map((point, index) => (
            <div key={index} className="relative flex items-start gap-6">
              {/* Step Icon */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 flex items-center justify-center bg-white border-2 border-blue-500 rounded-full shadow-md">
                  <span className="text-blue-600 font-bold">{index + 1}</span>
                </div>
              </div>

              {/* Content Box */}
              <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-blue-100 w-full">
                <p className="text-gray-700 leading-relaxed">{point}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectReliability;
