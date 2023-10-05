/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShareHeader } from "../../components/ShareHeader";
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";
import {
  faEnvelope,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
  const contactInfo = [
    {
      contactIcon: (
        <FontAwesomeIcon
          className="text-[#1BBAD6]"
          icon={faMobileScreenButton}
        />
      ),
      iconText: "Phone:",
      contactText: "+8801715422885",
      bgColor:"from-[#E6E6E6]/50 to-[#FF9C1B]/50"
    },
    {
      contactIcon: (
        <FontAwesomeIcon className="text-[#FF9C1B]" icon={faEnvelope} />
        ),
        iconText: "Email:",
        contactText: "dev1tanvir@gmail.com",
        bgColor:"from-[#FF9C1B]/50 to-[#E6E6E6]/50"
    },
  ];

  return (
    <div className="transition-all">
      <ShareHeader pageTitle={"Contact"} />
      <div className="flex flex-col gap-4 lg:flex-row my-6">
       {contactInfo.map((item,index)=><ContactInfo key={index} contacts = {item}/>)}
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
};
