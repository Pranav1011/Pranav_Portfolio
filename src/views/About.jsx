import React, { useContext } from "react";
import { techStack } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id="about" className={darkMode === true ? "bg-white" : "bg-gray-900"}>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
        <h2
          className={
            darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          About Me
        </h2>
        <div>
          <motion.div>
            <p
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-gray-500"
                  : "mt-4 text-xl text-justify text-white"
              }
            >
              I am a Data Analyst pursuing a MS in Data Analytics Engineering at Northeastern University. 
              Proficient in Python, SQL, PowerBi, and ML with hands-on experience analytics to derive 
              meaningful insights and optimize decision-making processes.

              I thrive in situations with constraints as it motivates me to come up with creative solutions 
              for different business problems. I excel in uncovering trends, building predictive models, and
               crafting compelling visualizations that derive actionable results. My interests lie at the 
               intersection of data science and analytics, where I strive to solve complex problems and foster innovation.
            </p>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
