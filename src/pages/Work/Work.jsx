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
      category: "All",
      projects: [],
    },
    {
      category: "App Development",
      projects: [
        {
          title: "E-commerce Website",
          description:
            "Built a Node.js-based e-commerce website with features like shopping cart and user authentication.",
          tags: "Node.js",
          githubLink: "https://github.com/yourusername/ecommerce-node",
          imageLink:
            "https://tanvirmehedi.github.io/react-portfolio-live/main.png",
        },
        {
          title: "Weather App",
          description:
            "Developed a JavaScript weather app using APIs to display weather information.",
          tags: "Javascript",
          githubLink: "https://github.com/yourusername/weather-app-js",
          imageLink:
            "https://tanvirmehedi.github.io/react-portfolio-live/main.png",
        },
      ],
    },
    {
      category: "Web Development",
      projects: [
        {
          title: "Portfolio Website",
          description:
            "Created a responsive portfolio website using HTML, CSS, and JavaScript.",
          tags: "HTML, CSS, JavaScript",
          githubLink: "https://github.com/yourusername/portfolio-website",
          imageLink:
            "https://tanvirmehedi.github.io/react-portfolio-live/main2.png",
        },
      ],
    },
    {
      category: "Design",
      projects: [
        {
          title: "UI/UX Redesign",
          description:
            "Redesigned the user interface and user experience for an existing web application using Next.js.",
          tags: "Next.js, UI/UX",
          githubLink: "https://github.com/yourusername/ui-ux-redesign",
          imageLink:
            "https://tanvirmehedi.github.io/react-portfolio-live/main3.png",
        },
        {
          title: "Personal Blog",
          description:
            "Designed and developed a personal blog using React.js for content management.",
          tags: "React.js, Blogging",
          githubLink: "https://github.com/yourusername/personal-blog-react",
          imageLink:
            "https://tanvirmehedi.github.io/react-portfolio-live/main3.png",
        },
      ],
    },
    {
      category: "Mentorship",
      projects: [
        {
          title: "Coding Bootcamp",
          description:
            "Mentored students in a coding bootcamp, teaching web development with Express.js.",
          tags: "Express.js, Mentorship",
          githubLink: "https://github.com/yourusername/coding-bootcamp",
          imageLink:
            "https://tanvirmehedi.github.io/react-portfolio-live/main4.png",
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
    <div className="transition-all">
      <ShareHeader pageTitle={"Portfolio"} />
      <ul className="grid grid-flow-row-dense gap-4 py-5 sm:grid-flow-col-dense md:grid-flow-col-dense lg:grid-flow-col-dense  lg:justify-items-end ">
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
      <div className="grid grid-flow-row-dense gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
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
    </div>
  );
};
