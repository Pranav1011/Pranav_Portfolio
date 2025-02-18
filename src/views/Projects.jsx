import React, { useContext, useState } from "react";
import Card from "../components/Card";
import { ThemeContext } from "../themeProvider";
import { projects } from "../constants";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [showAll, setShowAll] = useState(false);

  // Show only first 4 projects initially
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">Projects</h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">What I Built</h4>
        
        <div className="mt-8 flex justify-between items-stretch flex-wrap">
          {displayedProjects.map((project, index) => (
            <Card key={index} project={project} />
          ))}
        </div>

        {/* Show More Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="w-40 py-3 px-4 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;