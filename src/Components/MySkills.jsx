import React from 'react';
import PythonLogo from '../assets/Python.png';
import HTMLLogo from '../assets/HTML5.png';
import CSSLogo from '../assets/CSS3.png';
import JavaScriptLogo from '../assets/JavaScript 5.png';
import ReactLogo from '../assets/React.png';
import VueLogo from '../assets/Vue.png';


function MySkills() {
  return (
    <div id="skills" className="relative flex flex-col items-center py-20">
      <div className="absolute top-0 left-[10%] w-4/5 h-1 shadow-md"></div>
      
      <h1 className="text-4xl font-bold text-blue-600 self-start ml-10 mb-10">
        My Skills
      </h1>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {/* Python */}
        <div className="flex flex-col items-center space-y-2">
          <img src={PythonLogo} alt="Python" className="w-20 h-20" />
          <p className="text-lg font-semibold text-gray-700">Python</p>
        </div>
        
        {/* HTML */}
        <div className="flex flex-col items-center space-y-2">
          <img src={HTMLLogo} alt="HTML" className="w-20 h-20" />
          <p className="text-lg font-semibold text-gray-700">HTML</p>
        </div>
        
        {/* CSS */}
        <div className="flex flex-col items-center space-y-2">
          <img src={CSSLogo} alt="CSS" className="w-20 h-20" />
          <p className="text-lg font-semibold text-gray-700">CSS</p>
        </div>
        
        {/* JavaScript */}
        <div className="flex flex-col items-center space-y-2">
          <img src={JavaScriptLogo} alt="JavaScript" className="w-20 h-20" />
          <p className="text-lg font-semibold text-gray-700">JavaScript</p>
        </div>
        
        {/* React */}
        <div className="flex flex-col items-center space-y-2">
          <img src={ReactLogo} alt="React" className="w-20 h-20" />
          <p className="text-lg font-semibold text-gray-700">React</p>
        </div>
        
        {/* Vue */}
        <div className="flex flex-col items-center space-y-2">
          <img src={VueLogo} alt="Vue" className="w-20 h-20" />
          <p className="text-lg font-semibold text-gray-700">Vue</p>
        </div>
      </div>
    </div>
  );
}

export default MySkills;
