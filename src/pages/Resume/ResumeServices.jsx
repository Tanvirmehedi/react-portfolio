/** @format */

export const ResumeServices = ({ data }) => {
  return (
    <div
      className={`${data.color} my-3 rounded-md py-4 text-start px-3 flex flex-col gap-2`}
    >
      <p className="text-xs text-[#1A1003]/50">{data.duration}</p>
      <p className="font-semibold">{data.major}</p>
      <p className="font-medium">{data.institution}</p>
    </div>
  );
};
