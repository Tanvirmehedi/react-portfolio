import { Navbar } from "./Navbar";
import { ShareBox } from "./ShareBox";

export function AboutSection() {
    return (
      <section className="about rounded-md p-3 w-full text-center md:col-span-3 md:m-0 flex flex-col relative">
        <Navbar />
        <ShareBox />
      </section>
    );
  }