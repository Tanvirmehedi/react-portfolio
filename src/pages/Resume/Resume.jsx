/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShareHeader } from "../../components/ShareHeader";
import { EducationExperience } from "./EducationExperience";
import { faGraduationCap, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { SkillServices } from "./SkillServices";

export const Resume = () => {
  const educationAndExperience = [
    {
      category: "Education",
      icon: (
        <FontAwesomeIcon className="text-[#f56d4b]" icon={faGraduationCap} />
      ),
      Data: [
        {
          institution: "Moringa School",
          duration: "2020-2021",
          major: "Software Development",
          color: "bg-[#FFE3BF]/50",
        },
        {
          institution: "Masinde Muliro University",
          duration: "2012-2016",
          major: "Disaster Management",
          color: "bg-[#FFEED9]/50",
        },
      ],
    },
    {
      category: "Experience",
      icon: <FontAwesomeIcon className="text-[#f7c142]" icon={faTrophy} />,
      Data: [
        {
          major: "Website Development",
          institution: "Moringa School",
          duration: "2022 - Present",
          color: "bg-[#FFEED9]/50",
        },
        {
          major: "Technical Mentor",
          institution: "Village 2 Nation",
          duration: "2021-2022",
          color: "bg-[#FFE3BF]/50",
        },
      ],
    },
  ];
  const skills = [
    {
      category: "Work Skills",
      icon: <FontAwesomeIcon className="text-[#f7c142]" icon={faTrophy} />,
      list: [
        "NEXT.js",
        "React.js",
        "HTML 5",
        "CSS 3",
        "Tailwind CSS",
        "Figma",
        "JavaScript",
        "Mongo DB",
        "SQL",
        "Angular",
        "Android",
        "Git",
      ],
    },
    {
      category: "Soft Skills",
      icon: <FontAwesomeIcon className="text-[#f7c142]" icon={faTrophy} />,
      list: [
        "Time Management",
        "Mentorship",
        "Impeccable Communication",
        "Flexibility",
        "Research",
        "Writing",
      ],
    },
  ];

  return (
    <div className="transition-all">
      <ShareHeader pageTitle={"Resume"} />
      <div className="resume-page-area py-5">
        <div className="education-section flex flex-col lg:flex-row gap-2 justify-stretch ">
          {educationAndExperience.map((item, index) => (
            <EducationExperience key={index} data={item} />
          ))}
        </div>
        <div className="skill-section">
          <div className="education-section flex flex-col lg:flex-row gap-2 justify-around bg-[#F8FBFB] rounded-md py-5 ">
            {skills.map((item, index) => (
              <SkillServices key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
