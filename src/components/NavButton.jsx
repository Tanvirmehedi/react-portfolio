/** @format */

import { Link, NavLink } from "react-router-dom";

export function NavButton({ icon, text, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? "active text-white first:text-white text-sm font-semibold bg-gradient-to-r from-[#FFCE42] to-[#04A9C6] w-14 h-14 flex flex-col justify-center items-center cursor-pointer border rounded-2xl my-2 p-2"
          : "w-14 h-14 text-sm text-[#1A1003]/90 font-semibold bg-[#E1E8EF] flex flex-col justify-center items-center cursor-pointer rounded-2xl border my-2 p-2"
      }
    >
      <div className="icon">{icon}</div>
      <div className="text">{text}</div>
    </NavLink>
  );
}
