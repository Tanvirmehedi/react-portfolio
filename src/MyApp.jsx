/** @format */

import { AboutSection } from "./components/AboutSection";
import { ProfileDetails } from "./components/ProfileDetails";
import { motion } from "framer-motion";
export function MyApp() {
  return (
    <div>
      <motion.main
        className="portfolio-main pt-6 mx-auto bg-[#F2F5F9] flex flex-col gap-4 font-[railway] md:min-h-screen md:grid md:grid-cols-5 md:gap-1 md:content-start"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ProfileDetails />
        <AboutSection />
      </motion.main>
    </div>
  );
}
