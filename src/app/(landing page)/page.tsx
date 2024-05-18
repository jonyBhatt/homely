import { ExploreApartments } from "./_components/explore";
import { HelpSection } from "./_components/help";
import { Hero } from "./_components/hero";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ExploreApartments />
      <HelpSection />
    </main>
  );
}
