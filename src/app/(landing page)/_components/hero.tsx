import { SearchFilter } from "./search-filter";

export const Hero = () => {
  return (
    <div className="hero-bg">
      <div className="flex h-dvh w-full items-center">
        <div className="container mx-auto mt-16">
          <div className="flex flex-col items-center gap-8 text-white md:gap-2">
            <h6 className="uppercase">The Best way to</h6>
            <h2 className="text-center text-5xl font-semibold capitalize tracking-wide">
              Find your dream home
            </h2>
            <p className="text-center">
              We’ve more than 745,000 apartments, place & plot.
            </p>
          </div>
          <div className="my-4 hidden px-36 md:flex">
            <SearchFilter />
          </div>
        </div>
      </div>
    </div>
  );
};
