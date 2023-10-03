import { InfoCard } from "./InfoCard";
import { NameCard } from "./NameCard";

export function ProfileDetails() {
    return (
      <section className="profileDetails bg-white rounded-md p-3 lg:px-6 m-auto w-full text-center lg:col-span-2 mt-16 lg:mt-24">
        <NameCard />
        <InfoCard />
      </section>
    );
  }