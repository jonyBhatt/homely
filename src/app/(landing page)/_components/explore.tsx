import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { cData } from "~/utils/mock/carousel-data";

export const ExploreApartments = () => {
  return (
    <div className="container mx-auto my-16 px-16">
      <Carousel className="">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center gap-4 md:items-start md:gap-1 ">
            <h2 className="text-center text-3xl font-medium">
              Explore our apartments types
            </h2>
            <p className="text-center text-sm">
              Get some Inspirations from 1800+ skills
            </p>
          </div>
          <div>
            <CarouselPrevious className="!relative !-left-0 mr-4 hidden !-translate-y-0 sm:block" />
            <CarouselNext className=" !-translate-y- !relative   !-right-0 hidden sm:block" />
          </div>
        </div>

        <CarouselContent className="showslides my-8 gap-16 ">
          {cData.map((data) => (
            <CarouselItem
              className=" group cursor-pointer   md:basis-1/2 lg:basis-1/4"
              key={data.id}
            >
              <div className=" flex flex-col gap-8 rounded bg-secondary px-4 py-8 transition-colors duration-150  ease-linear group-hover:bg-gray-800">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white transition-colors duration-300 ease-linear group-hover:bg-slate-700">
                  {data.icon}
                </div>
                <div className="ml-2 mt-8">
                  <h2 className="text-lg font-semibold transition-colors  duration-150 ease-linear  group-hover:text-white">
                    {data.title}
                  </h2>
                  <span className="text-sm font-light transition-colors  duration-150 ease-linear  group-hover:text-white">
                    {data.subtitle}
                  </span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
