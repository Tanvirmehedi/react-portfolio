import { Button } from "./Button";
import { InfoDetails } from "./InfoDetails";

export  function InfoCard() {
    const infoDetailsData = [
      {
        infoName: "Phone",
        infoData: "+8801715422885",
        icon: (
          <i className="fa-solid fa-mobile-screen-button text-[#1BBAD6]"></i>
        ),
      },
      {
        infoName: "Email",
        infoData: "dev1tanvir@gmail.com",
        icon: <i className="fa-solid fa-envelope text-[#FF9C1B]"></i>,
      },
      {
        infoName: "Location",
        infoData: "Dhaka, Bangladesh",
        icon: <i className="fa-solid fa-location-dot text-[#1BBAD6]"></i>,
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
          icon={<i className="fa-solid fa-download text-sm "></i>}
          text={"Download Resume"}
        />
      </div>
    );
  }