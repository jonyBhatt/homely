import { SearchFilter } from "./search-filter";

export const Hero = () => {
  return (
    <div className="hero-bg">
      <div className="flex h-dvh w-full items-center">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-2 text-white">
            <h6 className="uppercase">The Best way to</h6>
            <h2 className="text-center text-5xl font-bold capitalize tracking-wide">
              Find your dream home
            </h2>
            <p>We’ve more than 745,000 apartments, place & plot.</p>
          </div>
          <div className="my-4 px-36">
            <SearchFilter />
          </div>
        </div>
      </div>
    </div>
  );
};
