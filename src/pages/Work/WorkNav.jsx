/** @format */

import { faL } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const WorkNav = ({ data}) => {
  let [active, setActive] = useState(null);

  const handler =(e)=>{
    
    console.log(e.category)
  }

  return (
    <>
      <li onClick={()=>handler(data)}>{data.category}</li>
    </>
  );
};
