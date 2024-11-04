import React, { useState } from 'react';

function ProjectCard({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the previous image
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Function to go to the next image
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="max-w-2xl md:max-w-3xl lg:max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden relative">
      {/* Image */}
      <img
        src={images[currentIndex]}
        alt={`${title} - ${currentIndex + 1}`}
        className="w-full h-80 md:h-96 lg:h-[28rem] object-cover"
      />
      
      {/* Title */}
      <div className="p-6">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">{title}</h3>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-gray-800 text-white p-3 md:p-4 rounded-full text-xl"
      >
        ◀
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-gray-800 text-white p-3 md:p-4 rounded-full text-xl"
      >
        ▶
      </button>
    </div>
  );
}

export default ProjectCard;
