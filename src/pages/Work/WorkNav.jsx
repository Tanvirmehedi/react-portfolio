/** @format */

import { faL } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const WorkNav = ({ data }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handler = (e) => {
    const category = e;

    if (activeCategory === category) {
      setActiveCategory(null);
    } else {
      setActiveCategory(category);
    }

    console.log(category);
  };

  const isActive = activeCategory === data.category;

  return (
    <>
      <li
        className={isActive ? "text-[#FFCE42] font-medium tracking-wide" : "text-[#57657A] text-base font-medium cursor-pointer tracking-wide "}
        onClick={() => handler(data.category)}
      >
        {data.category}
      </li>
    </>
  );
};
