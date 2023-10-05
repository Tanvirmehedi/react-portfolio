import { InfoCard } from "./InfoCard";
import { NameCard } from "./NameCard";

export function ProfileDetails() {
    return (
      <section className="profileDetails bg-white rounded-md p-3 md:px-6 m-auto w-full text-center md:col-span-2 mt-16 md:mt-24">
        <NameCard />
        <InfoCard />
      </section>
    );
  }