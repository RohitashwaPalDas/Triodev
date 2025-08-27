import React, { useState } from "react";

const ProjectImages = ({ selectedProject }) => {
  const [activeImage, setActiveImage] = useState(selectedProject.img[0]);
  return (
    <div className="flex flex-col md:flex-row gap-10 items-start">
      {/* Active Image */}
      <div className="w-full md:w-5/6">
        <div className="overflow-hidden rounded-2xl shadow-xl">
          <img
            src={activeImage}
            alt="Active"
            className="
          w-full 
          h-[10rem] sm:h-[24rem] md:h-[32rem] 
          object-cover 
          transform hover:scale-105 transition duration-500
        "
          />
        </div>
      </div>

      {/* Image Thumbnails */}
      <div className="w-full md:w-1/6">
        <div
          className="
        flex gap-4
        overflow-x-auto md:overflow-y-auto
        md:flex-col
        max-h-[32rem]
        pr-2
        scrollbar-thin scrollbar-thumb-blue-500/70 scrollbar-track-transparent
      "
        >
          {selectedProject.img.map((image, index) => (
            <div
              key={index}
              className={`flex-shrink-0 overflow-hidden rounded-xl shadow cursor-pointer border-2 transition duration-300 ${
                activeImage === image ? "border-blue-600" : "border-transparent"
              }`}
              onClick={() => setActiveImage(image)}
            >
              <img
                src={image}
                alt={`Thumbnail-${index}`}
                className="w-28 h-20 md:w-full md:h-28 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectImages;
