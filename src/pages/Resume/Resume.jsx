/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShareHeader } from "../../components/ShareHeader";
import { EducationExperience } from "./EducationExperience";
import { faBolt, faGraduationCap, faNetworkWired, faTrophy } from "@fortawesome/free-solid-svg-icons";
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
          institution: "Creative IT Institute",
          duration: "2018-2019",
          major: "Diploma in (CMPG)",
          color: "bg-[#FFE3BF]/50",
        },
        {
          institution: "Stamford University Bangladesh",
          duration: "2012-2016",
          major: "Bachelor degree",
          color: "bg-[#FFEED9]/50",
        },
      ],
    },
    {
      category: "Experience",
      icon: <FontAwesomeIcon className="text-[#f7c142]" icon={faTrophy} />,
      Data: [
        {
          major: "Frontend Developer",
          institution: "Fresh Home Ltd",
          duration: "2021 - Present",
          color: "bg-[#FFEED9]/50",
        },
        {
          major: "Web Application Maintenance",
          institution: "GetWay Solution",
          duration: "2019-2020",
          color: "bg-[#FFE3BF]/50",
        },
      ],
    },
  ];
  const skills = [
    {
      category: "Work Skills",
      icon: <FontAwesomeIcon className="text-[#f7c142]" icon={faNetworkWired} />,
      list: [
        "Node.js",
        "Mongo DB",
        "NEXT.js",
        "React.js",
        "Tailwind CSS",
        "Figma",
        "JavaScript",
        "Git & GitHub",
      ],
    },
    {
      category: "Soft Skills",
      icon: <FontAwesomeIcon className="text-[#f79342]" icon={faBolt} />,
      list: [
        "Time Management",
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
