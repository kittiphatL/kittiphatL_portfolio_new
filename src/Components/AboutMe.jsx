import React, { useState } from 'react';
import { Linkedin, Github } from 'lucide-react';

function AboutMe() {
  const [isTextBoxVisible, setIsTextBoxVisible] = useState(false);

  // Toggle the visibility of the text box
  const toggleTextBox = () => {
    setIsTextBoxVisible(!isTextBoxVisible);
  };

  return (
    <div id="about" className="h-screen flex items-center justify-center bg-white relative">
      {/* Top Shadow Line */}
      <div className="absolute top-0 left-[10%] w-4/5 h-1 shadow-md"></div>
      
      {/* Content */}
      <div className="flex flex-col items-center space-y-4">
        <img 
          className="rounded-full w-40 h-auto max-w-xs" 
          src="../src/assets/My Avatar.jpeg" 
          alt="My Avatar" 
        />
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">Kittiphat Lotrakul</h1>
          <p className="text-blue-500">Web Developer</p>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="https://www.linkedin.com/in/kittiphat-lotrakul-88137825a/" target="_blank" rel="noopener noreferrer">
              <Linkedin color="#2563eb" size={32} />
            </a>
          </li>
          <li>
            <a href="https://github.com/kittiphatL" target="_blank" rel="noopener noreferrer">
              <Github color="#2563eb" size={32} />
            </a>
          </li>
        </ul>
        
        {/* Button to toggle text box */}
        <button 
          onClick={toggleTextBox} 
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          About Myself
        </button>

        {/* Conditional rendering of the text box */}
        {isTextBoxVisible && (
          <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded-md shadow-lg max-w-md text-gray-700">
            <p>
              Hi, I'm Kittiphat Lotrakul, a passionate Web Developer with a background in Electrical Engineering. I love creating dynamic and responsive websites and have a keen interest in modern web technologies. I'm always eager to learn new skills and improve my craft.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AboutMe;
