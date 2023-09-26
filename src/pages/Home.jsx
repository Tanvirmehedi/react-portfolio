/** @format */

import { HomeService } from "../components/HomeService";

export const Home = () => {
  const servicesData = [
    {
      title: "Web Development",
      text: `As a developer, I find myself most captivated by the power and flexibility of NEXT.js. I'm always eager to dive into new projects that leverage NEXT.js and discover innovative ways to create fast, scalable, and user-friendly applications.`,
      icon: 'fa-solid fa-code',
      bgColor: "bg-[#FFEBD1]/50",
      iconColor:"text-[#04A9C6]"
    },
    {
      title: "Blog Writing",
      text: `Our blog writing team specializes in creating engaging and informative content for your website. We craft well-researched articles that resonate with your target audience and drive traffic to your platform.`,
      icon: 'fa-solid fa-blog',
      bgColor: "bg-[#B2DFFC]/50",
      iconColor:"text-[#FFCE42]"
    },
    {
      title: "Backend Development",
      text: `Our backend developers build robust and scalable server-side solutions using Node.js, Python, and other technologies. We focus on performance, security, and efficient data handling to support your application's functionality.`,
      icon: 'fa-solid fa-chalkboard-user',
      bgColor: "bg-[#C8E6C9]/50",
      iconColor:"text-[#FFCE42]"
    },
    {
      title: "Database Management",
      text: `Effective database management is crucial for your application's performance. Our experts are skilled in SQL and NoSQL databases, ensuring your data is well-organized, easily accessible, and secure.`,
      icon: 'fa-solid fa-server',
      bgColor: "bg-[#FFCDD2]/50",
      iconColor:"text-[#04A9C6]"
    },
  ];
  return (
    <>
      <h1 className="text-start text-2xl font-semibold before:inline-block before:end-10 before:top-3.5 before:absolute before:w-1/3 before:h-0.5 before:bg-gradient-to-r from-[#FFCE42] to-[#1BBAD6] relative">
        About Me
      </h1>
      <p className="text-justify py-5 first-letter:font-bold first-letter:text-lg first-letter:text-black/70">
        Hello there! I'm thrilled to welcome you to my portfolio. I am a
        passionate and versatile full-stack developer with a keen interest in
        exploring the latest cutting-edge technologies. My journey in the world
        of web development has been nothing short of exhilarating, and I
        constantly strive to enhance my skills and embrace emerging trends in
        the industry.
      </p>
      <h2 className="text-start font-bold text-lg pb-5">What I Do!</h2>

      <div className="services-box grid lg:grid-cols-2 gap-3">
        {servicesData.map((item,index)=><HomeService title={item.title} key={index} text={item.text} icon={item.icon} servicesBg={item.bgColor} iconColor={item.iconColor}/>)}
      </div>
    </>
  );
};
