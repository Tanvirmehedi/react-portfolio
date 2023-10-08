/** @format */

import { motion } from "framer-motion";

export function InfoDetails({ infoName, infoData, icon }) {
  return (
    <div className="phone border-b-2 text-start flex items-center gap-4 py-3">
      <motion.div
        className="icon rounded-md"
        animate={{ x: [-100, 0, 2] }}
        transition={{ ease: "backIn", duration: 1.5, delay: 2 }}
      >
        {icon}
      </motion.div>
      <div className="phone-text text-sm font-thin">
        <p className="-mb-1 text-gray-400">{infoName}</p>
        {infoData}
      </div>
    </div>
  );
}
