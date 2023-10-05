/** @format */

export const ContactInfo = ({ contacts }) => {
  return (
    <div
      className={`contact-info-box flex rounded-md pt-6 pb-10 px-6 bg-gradient-to-tr ${contacts.bgColor} text-start md:w-full lg:w-2/4`}
    >
      <div className="icon">
        <span className="pr-3 text-lg">{contacts.contactIcon}</span>
      </div>
      <div className="contactText flex flex-col text-lg lg:text-base">
        <span>{contacts.iconText}</span>
        <span>{contacts.contactText}</span>
      </div>
    </div>
  );
};
