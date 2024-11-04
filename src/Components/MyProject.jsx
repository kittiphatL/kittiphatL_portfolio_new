import React from 'react';
import ProjectCard from './ProjectCard';

function MyProject() {
  return (
    <div id="projects" className="relative flex flex-col items-center py-20">
      {/* Top Shadow Line */}
      <div className="absolute top-0 left-[10%] w-4/5 h-1 shadow-md"></div>

      {/* H1 positioned at the top left */}
      <h1 className="text-4xl font-bold text-blue-600 self-start ml-10">
        My Projects
      </h1>

      {/* Project Card positioned under the H1 */}
      <div className="mt-8">
        <ProjectCard
          images={[
            "src/assets/ProjectSandbox1.png",
            "src/assets/ProjectSandbox2.png",
            "src/assets/ProjectSandbox3.png",
            "src/assets/ProjectSandbox4.png"
          ]}
          title="Skooldio E-commerce Project Sandbox"  
        />
      </div>
    </div>
  );
}

export default MyProject;
