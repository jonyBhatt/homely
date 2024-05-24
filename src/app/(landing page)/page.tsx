import { CityProperty } from "./_components/city-property";
import { ExploreApartments } from "./_components/explore";
import { FeaturedList } from "./_components/featured-list";
import { HelpSection } from "./_components/help";
import { Hero } from "./_components/hero";
import { Testimonial } from "./_components/testimonial";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ExploreApartments />
      <HelpSection />
      <FeaturedList />
      <CityProperty />
      <Testimonial />
    </main>
  );
}
