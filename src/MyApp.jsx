import { AboutSection } from "./components/AboutSection";
import { ProfileDetails } from "./components/ProfileDetails";

export function MyApp() {
    return (
      <div>
        <main className="portfolio-main pt-6 mx-auto bg-[#F2F5F9] flex flex-col gap-4 font-[railway] lg:min-h-screen lg:grid lg:grid-cols-5 lg:gap-1 lg:content-start ">
          <ProfileDetails />
          <AboutSection />
        </main>
      </div>
    );
  }