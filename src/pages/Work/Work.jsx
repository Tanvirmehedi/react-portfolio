/** @format */

import { Route, Routes } from "react-router-dom";
import { ShareHeader } from "../../components/ShareHeader";
import { WorkNav } from "./WorkNav";
import { useState } from "react";

export const Work = () => {
  const projectItems = [
    {
      category: "All",
    },
    {
      category: "App Development",
      imageLink: "https://example.com/app-development-image.jpg",
      projects: [
        {
          title: "Project 1",
          description: "Description for Project 1",
          tags: ["tag1", "tag2", "tag3"],
          githubLink: "https://github.com/yourusername/project1",
        },
        {
          title: "Project 2",
          description: "Description for Project 2",
          tags: ["tag4", "tag5"],
          githubLink: "https://github.com/yourusername/project2",
        },
      ],
    },
    {
      category: "Web Development",
      imageLink: "https://example.com/web-development-image.jpg",
      projects: [
        {
          title: "Project 3",
          description: "Description for Project 3",
          tags: ["tag6", "tag7"],
          githubLink: "https://github.com/yourusername/project3",
        },
      ],
    },
    {
      category: "Design",
      imageLink: "https://example.com/design-image.jpg",
      projects: [
        {
          title: "Project 4",
          description: "Description for Project 4",
          tags: ["tag8", "tag9"],
          githubLink: "https://github.com/yourusername/project4",
        },
        {
          title: "Project 5",
          description: "Description for Project 5",
          tags: ["tag10"],
          githubLink: "https://github.com/yourusername/project5",
        },
      ],
    },
    {
      category: "Mentorship",
      imageLink: "https://example.com/mentorship-image.jpg",
      projects: [
        {
          title: "Project 6",
          description: "Description for Project 6",
          tags: ["tag11", "tag12"],
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
      <ul className="flex flex-col flex-wrap lg:flex-row gap-4 justify-evenly my-5">
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
    </div>
  );
};
