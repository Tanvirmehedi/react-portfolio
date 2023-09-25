import { NavButton } from "./NavButton";

export function Navbar() {
    const navButtonData = [
      {
        text: "Home",
        icon: <i className="fa-solid fa-house text-[#1A1003]/50"></i>,
        to: "/",
      },
      {
        text: "Resume",
        icon: <i className="fa-solid fa-file"></i>,
        to: "/resume",
      },
      {
        text: "Work",
        icon: <i className="fa-solid fa-briefcase"></i>,
        to: "/work",
      },
      {
        text: "Contact",
        icon: <i className="fa-solid fa-file-contract"></i>,
        to: "/contact",
      },
    ];

    return (
      <div className="flex justify-evenly lg:justify-end mb-3">
        <div className="bg-[#F2F7FC] rounded-md border shadow-inner flex flex-wrap justify-between gap-1 lg:gap-1 lg:w-1/2 px-5">
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