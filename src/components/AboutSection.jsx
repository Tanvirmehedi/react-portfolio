import { Navbar } from "./Navbar";
import { ShareBox } from "./ShareBox";

export function AboutSection() {
    return (
      <section className="about rounded-md p-3 w-full text-center lg:col-span-3 lg:m-0 flex flex-col">
        <Navbar />
        <ShareBox />
      </section>
    );
  }