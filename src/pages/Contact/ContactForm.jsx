/** @format */

import { motion } from "framer-motion";
import { useState } from "react";

export const ContactForm = () => {
  const [show, setShow] = useState(null);

  const submitHndler = (e) => {
    e.preventDefault();
    setShow(!show);
    setTimeout(() => {
      setShow(show);
    }, 3000);
  };

  return (
    <div className="bg-[#F8FBFB] rounded-md pt-6 pb-1 px-6 text-start">
      {show ? (
        <motion.div
          className="text-lg text-red-400 border border-red-500 rounded-lg px-2 font-bold my-3 opacity-0 "
          animate={{ opacity: 1 }}
          transition={{ ease: "anticipate", duration: 1 }}
        >
          We Are Working On This!
        </motion.div>
      ) : (
        ""
      )}
      <p className=" text-base">
        I am always open to discussing new projects,{" "}
        <span className="font-bold">
          opportunities in tech world, partnerships
        </span>{" "}
        and more so <span className="font-bold">mentorship</span>.
      </p>
      <form className="my-5" onSubmit={submitHndler}>
        <div className="name border-b pb-2 mt-5">
          <label className="font-semibold" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="userName"
            className="bg-transparent border-0 outline-none w-11/12 pl-2"
          />
        </div>
        <div className="email border-b pb-2 mt-5">
          <label className="font-semibold" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-transparent border-0 outline-none w-11/12 pl-2"
          />
        </div>
        <div className="message border-b pb-2 mt-5">
          <label className="font-semibold" htmlFor="message">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            className="bg-transparent border-0 outline-none w-11/12 "
          />
        </div>
        <div className="btn mt-5 text-center md:text-start">
          <button
            type="submit"
            className="border-2 border-t-[#1BBAD6]/70 border-b-[#FFCE42]/70 px-6 py-2 rounded-full text-lg shadow-lg bg-transparent font-semibold"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
