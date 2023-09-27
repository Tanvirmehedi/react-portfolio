/** @format */

import { ResumeServices } from "./ResumeServices";

export const EducationExperience = ({ data }) => {
  const { category, Data, icon } = data;
  return (
    <div className="lg:w-5/12">
      <h2 className="font-bold text-2xl text-start">
        <span className="pr-2">{icon}</span>
        {category}
      </h2>
      {Data.map((item, index) => (
        <ResumeServices key={index} data={item} />
      ))}
    </div>
  );
};
