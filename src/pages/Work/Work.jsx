/** @format */

import { Route, Routes } from "react-router-dom";
import { ShareHeader } from "../../components/ShareHeader";
import { useState } from "react";
import { ProjectWorkView } from "./ProjectWorkView";
import blog from "../../assets/Rectangle 20.png";
import app from "../../assets/Rectangle 21.png";
import code from "../../assets/Rectangle 22.png";
import write from "../../assets/Rectangle 24.png";

export const Work = () => {
  const projectItems = [
    {
      category: "App Development",
      imageLink: blog,
      projects: [
        {
          title: "Project 1",
          description: "Description for Project 1",
          tags: "Node.js",
          githubLink: "https://github.com/yourusername/project1",
        },
        {
          title: "Project 2",
          description: "Description for Project 2",
          tags: "Javascript",
          githubLink: "https://github.com/yourusername/project2",
        },
      ],
    },
    {
      category: "Web Development",
      imageLink: app,
      projects: [
        {
          title: "Project 3",
          description: "Description for Project 3",
          tags: "Row Html",
          githubLink: "https://github.com/yourusername/project3",
        },
      ],
    },
    {
      category: "Design",
      imageLink: code,
      projects: [
        {
          title: "Project 4",
          description: "Description for Project 4",
          tags:  "Next.js",
          githubLink: "https://github.com/yourusername/project4",
        },
        {
          title: "Project 5",
          description: "Description for Project 5",
          tags: "React.js",
          githubLink: "https://github.com/yourusername/project5",
        },
      ],
    },
    {
      category: "Mentorship",
      imageLink: write,
      projects: [
        {
          title: "Project 6",
          description: "Description for Project 6",
          tags: "Express.js",
          githubLink: "https://github.com/yourusername/project6",
        },
      ],
    },
  ];
  const [isActive, setActive] = useState(null);

  const handler = (index) => {
    setActive(index);
  };

  return (
    <div className="transition-all">
      <ShareHeader pageTitle={"Portfolio"} />
      <ul className="grid grid-flow-row-dense  lg:grid-flow-col-dense gap-4 lg:justify-items-end py-5">
        <li className={"text-[#FFCE42] font-medium tracking-wide"}>All</li>
        {projectItems.map((item, index) => (
          <li
            onClick={() => handler(index)}
            key={index}
            className={
              isActive === index
                ? "text-[#FFCE42] font-medium tracking-wide"
                : "text-[#57657A] text-base font-medium cursor-pointer tracking-wide "
            }
          >
            {item.category}
          </li>
        ))}
      </ul>
      <div className="grid grid-flow-row-dense lg:grid-cols-2 gap-4">
        {projectItems.map((item, index) => (
          <ProjectWorkView key={index} project={item} />
        ))}
      </div>
    </div>
  );
};
