/** @format */

import { motion } from "framer-motion";
import profileImage from "../assets/IMG-20210116-WA002fgggggggggggggggggggggggggg6.png.jpg";
export function NameCard() {
  return (
    <div className="name-card flex flex-col justify-center items-center gap-2">
      <div className="profile-image rounded-lg w-32 h-32 overflow-hidden -mt-16 md:-mt-24">
        <motion.img
          animate={{ x: [-100, 0, 0] }}
          transition={{ ease: "easeInOut", duration: 1.5 }}
          className="max-h-fit"
          src="https://tanvirmehedi.github.io/react-portfolio-live/main.jpg"
          alt="profile-img"
        />
      </div>
      <div className="profile-name text-2xl font-semibold">
        H M Tanvir Mehedi
      </div>
      <div className="profile-designation font-thin text-sm text-gray-400">
        FullStack Developer
      </div>
    </div>
  );
}
