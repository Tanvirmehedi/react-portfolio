/** @format */

export const ProjectWorkView = ({ project }) => {
  return (
    <div className="bg-[#FFE3BF]/50 grid grid-flow-dense rounded-lg p-2 cursor-pointer">
      <img className="" src={project?.imageLink} alt={project?.category} />
      <div className="flex flex-col text-start pt-2">
        <p className="text-sm text-[#1A1003]/50">{project.category}</p>
        <div className="flex gap-2 ">
          {project.projects.map((tag, index) => (
            <span key={index}>
              <span className="text-lg font-medium">{tag.tags}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
