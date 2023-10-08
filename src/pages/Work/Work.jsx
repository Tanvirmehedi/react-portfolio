/** @format */

import { Route, Routes } from "react-router-dom";
import { ShareHeader } from "../../components/ShareHeader";
import { useState } from "react";
import { ProjectWorkView } from "./ProjectWorkView";
import blog from "../../assets/Rectangle 20.png";
import app from "../../assets/Rectangle 21.png";
import code from "../../assets/Rectangle 22.png";
import write from "../../assets/Rectangle 24.png";
import { motion } from "framer-motion";

export const Work = () => {
  const projectItems = [
    {
      category: "All",
      projects: [],
    },
    {
      category: "Vanila JavaScript",
      projects: [
        {
          title: "E-commerce Website",
          description:
            "Built a Node.js-based e-commerce website with features like shopping cart and user authentication.",
          tags: "JavaScript",
          githubLink: "https://github.com/Tanvirmehedi/pageone-fashion",
          imageLink:
            "https://tanvirmehedi.github.io/react-portfolio-live/main.png",
        },
      ],
    },
    {
      category: "FrontEnd",
      projects: [
        {
          title: "Solution_gateways_protfolio",
          description:
            "Created a responsive portfolio website using HTML, CSS, and JavaScript.",
          tags: "HTML, CSS, JavaScript",
          githubLink:
            "https://github.com/Tanvirmehedi/Solution_gateways_protfolio",
          imageLink:
            "https://www.interviewbit.com/blog/wp-content/uploads/2022/05/image1.png",
        },
      ],
    },
    {
      category: "BackEnd",
      projects: [
        {
          title: "ChatGPT bot using OpenAI API",
          description:
            "Created a Node.js ChatGPT bot using OpenAI API. Maintained conversation history for context, enabling more natural and relevant interactions. Users can chat with the bot and exit by typing 'exit'. Enhancements like global npm package or Electron app possible.",
          tags: "Node.js ,ChatGPT",
          githubLink: "https://github.com/Tanvirmehedi/node-chatbot",
          imageLink:
            "https://www.kommunicate.io/blog/wp-content/uploads/2022/09/Cover-Images-for-Blogs-.png",
        },
      ],
    },
    {
      category: "Mentorship",
      projects: [
        {
          title: "leedCode-problem-solving",
          description:
            "Master JavaScript problem-solving on LeetCode with practical tips, solutions, and examples in this comprehensive Bangla guide. Enhance your JavaScript skills and problem-solving abilities.",
          tags: "Problem-solving, JavaScript",
          githubLink:
            "https://github.com/Tanvirmehedi/leedCode-problem-solving",
          imageLink:
            "https://camo.githubusercontent.com/2b2ef9c241c0b5416d60233f53bd6c8a472848142516595c5203231589588c42/68747470733a2f2f63646e2e686173686e6f64652e636f6d2f7265732f686173686e6f64652f696d6167652f75706c6f61642f76313639343339373032373030302f61616435316139352d343030662d346361302d396231392d3363353161393262643037362e6a7065673f773d3136303026683d383430266669743d63726f702663726f703d656e74726f7079266175746f3d636f6d70726573732c666f726d617426666f726d61743d77656270",
        },
      ],
    },
  ];

  const [isActive, setActive] = useState("All");

  const handler = (category) => {
    const data = projectItems.map((item) => item.category);

    const cat = data.find((item) => item === category);

    setActive(cat);
  };

  const filterData = () => {
    const data = projectItems.filter((item) => item.category === isActive);
    return data;
  };

  const data = filterData();

  return (
    <motion.div
      className="transition-all opacity-0"
      animate={{ opacity: 1 }}
      transition={{
        ease: "linear",
        duration: 1,
      }}
    >
      <ShareHeader pageTitle={"Portfolio"} />
      <ul className="grid grid-flow-row-dense gap-4 py-5 md:grid-cols-1 sm:grid-flow-col-dense md:grid-flow-col-dense lg:grid-flow-col-dense lg:justify-items-end ">
        {projectItems.map((item, index) => (
          <li
            onClick={() => handler(item.category)}
            key={index}
            className={
              isActive === item.category
                ? "text-[#FFCE42] font-medium tracking-wide"
                : "text-[#57657A] text-base font-medium cursor-pointer tracking-wide "
            }
          >
            {item.category}
          </li>
        ))}
      </ul>
      <div className="grid grid-flow-row-dense gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
        {isActive === "All"
          ? projectItems.map((item) => {
              return item.projects.map((project, index) => (
                <ProjectWorkView
                  key={index}
                  category={item.category}
                  project={project}
                />
              ));
            })
          : data.map((item) => {
              return item.projects.map((project, index) => (
                <ProjectWorkView
                  key={index}
                  category={item.category}
                  project={project}
                />
              ));
            })}
      </div>
    </motion.div>
  );
};
