/** @format */

export const SkillServices = ({ data }) => {
  const { icon, category, list } = data;
  return (
    <div className="text-center">
      <h2 className="font-bold text-2xl text-start pl-2">
        <span className="pr-2">{icon}</span>
        {category}
      </h2>
      <div className="grid grid-flow-row-dense grid-cols-2 grid-rows-2 gap-2 mt-3 px-2">
        {list.map((item, index) => (
          <span className="bg-[#E1E8EF] text-slate-700 font-thin rounded-md p-2 flex items-center justify-center shadow-sm shadow-gray-400">{item}</span>
        ))}
      </div>
    </div>
  );
};
