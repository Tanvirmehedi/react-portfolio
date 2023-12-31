/** @format */

export const HomeService = ({ title, text, icon, servicesBg,iconColor }) => {
  return (
    <div className={`${servicesBg} px-5 py-2 rounded-lg`}>
      <h3 className="text-xl font-bold flex flex-row justify-start items-center flex-wrap">
      <span className={`${iconColor} pr-2`} >{icon}</span>
      <span className="text-[#272626dd]">{title}</span>
      </h3>
      <p className="text-justify pt-3 text-sm">{text}</p>
    </div>
  );
};
