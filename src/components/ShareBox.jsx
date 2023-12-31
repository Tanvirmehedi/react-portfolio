/** @format */

import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Resume } from "../pages/Resume/Resume";
import { Work } from "../pages/Work/Work";
import { Contact } from "../pages/Contact/Contact";


export function ShareBox() {
  return (
    <div className="my-3 md:my-0 bg-white rounded-md py-6 px-3 md:px-20 h-fit">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
