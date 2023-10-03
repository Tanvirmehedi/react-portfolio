/** @format */

import React from "react";

const ProjectTag = ({ tag }) => (
  <span className="text-lg font-medium">{tag}</span>
);

export const ProjectWorkView = ({ project, category }) => {
  const { title, description, tags, githubLink, imageLink } = project;
  if (category === "All") {
    return null;
  }

  return (
    <a href={githubLink} target="_blank">
      <div className="bg-[#FFE3BF]/50 grid grid-flow-dense rounded-lg p-2 cursor-pointer">
        <img src={imageLink} alt={title} className="w-full" />
        <div className="flex flex-col text-start pt-2">
          <p className="text-sm text-[#1A1003]/50">{category}</p>
          <div className="flex gap-2 ">
            <ProjectTag tag={tags} />
          </div>
        </div>
      </div>
    </a>
  );
};
