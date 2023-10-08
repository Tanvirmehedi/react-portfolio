/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./Button";
import { InfoDetails } from "./InfoDetails";
import {
  faEnvelope,
  faFileExport,
  faLocationDot,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";

export function InfoCard() {
  const infoDetailsData = [
    {
      infoName: "Phone",
      infoData: "+8801715422885",
      icon: (
        <FontAwesomeIcon
          className="text-[#1BBAD6]"
          icon={faMobileScreenButton}
        />
      ),
    },
    {
      infoName: "Email",
      infoData: "dev1tanvir@gmail.com",
      icon: <FontAwesomeIcon className="text-[#FF9C1B]" icon={faEnvelope} />,
    },
    {
      infoName: "Location",
      infoData: "Dhaka, Bangladesh",
      icon: <FontAwesomeIcon className="text-[#1BBAD6]" icon={faLocationDot} />,
    },
  ];

  return (
    <div className="info-card bg-[#F2F5F9] rounded-md my-7 px-10 py-6">
      {infoDetailsData.map((item, index) => (
        <InfoDetails
          key={index}
          infoName={item.infoName}
          infoData={item.infoData}
          icon={item.icon}
        />
      ))}
      <Button
        href={
          "https://drive.google.com/file/d/1yv_knrAdhpCxB6C9kcb7dbgiGk5f17fC/view"
        }
        icon={<FontAwesomeIcon className="text-sm" icon={faFileExport} />}
        text={"Download Resume"}
      />
    </div>
  );
}
