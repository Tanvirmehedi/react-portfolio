/** @format */
import { motion } from "framer-motion";
export function Button({ href, icon, text }) {
  return (
    <div className="resume mt-6 m-auto flex flex-row justify-center items-center">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <motion.button
          className="resume-btn hover:animate-pulse rounded-full cursor-pointer p-3 text-xl flex flex-row gap-x-2 justify-center items-center bg-gradient-to-r from-[#1BBAD6] to-[#FFCE42] text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="icon -mt-1">{icon}</div>
          <div className="btn-text text-sm md:text-base font-semibold">
            {text}
          </div>
        </motion.button>
      </a>
    </div>
  );
}
