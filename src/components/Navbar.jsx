/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavButton } from "./NavButton";
import { faAddressBook, faBriefcase, faFile, faHouse } from "@fortawesome/free-solid-svg-icons";

export function Navbar() {
  const navButtonData = [
    {
      text: "Home",
      icon: <FontAwesomeIcon icon={faHouse} />,
      to: "/",
    },
    {
      text: "Resume",
      icon: <FontAwesomeIcon icon={faFile} />,
      to: "/resume",
    },
    {
      text: "Work",
      icon: <FontAwesomeIcon icon={faBriefcase} />,
      to: "/work",
    },
    {
      text: "Contact",
      icon: <FontAwesomeIcon icon={faAddressBook} />,
      to: "/contact",
    },
  ];

  return (
    <div className="flex justify-evenly md:justify-end mb-3">
      <div className="bg-[#F2F7FC] rounded-md border shadow-inner flex flex-wrap justify-evenly gap-2 px-5 lg:gap-1 lg:w-1/2 ">
        {navButtonData.map((item, index) => (
          <NavButton
            key={index}
            text={item.text}
            icon={item.icon}
            to={item.to}
          />
        ))}
      </div>
    </div>
  );
}
