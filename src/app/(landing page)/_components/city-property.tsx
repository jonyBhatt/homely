import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "~/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { cities } from "~/utils/mock/city-data";
export const CityProperty = () => {
  return (
    <div className="my-16  flex flex-col gap-4 py-24 sm:py-16 ">
      <div className="container mx-auto">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center md:gap-0">
          <div className="flex flex-col items-center gap-4 md:items-start md:gap-1 ">
            <h2 className="text-center text-3xl font-medium">
              Properties by Cities
            </h2>
            <p className="text-center text-sm">
              Aliquam lacinia diam quis lacus euismod
            </p>
          </div>
          <Link
            href="#"
            className="flex items-center gap-2.5 transition-colors duration-100 ease-in-out hover:text-primary/50"
          >
            See all Cities
            <ArrowUpRight className="h-4 w-4 transition-colors duration-100 ease-in-out hover:text-primary/50" />
          </Link>
        </div>
        <div className="my-4 flex flex-col justify-center px-0 sm:flex-row  sm:px-16 md:block lg:px-4 xl:px-0">
          <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-7xl ">
            <CarouselContent className="-ml-1 ">
              {cities.map((city, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/1 group basis-full cursor-pointer pl-1 lg:basis-1/4"
                >
                  <div className="p-1">
                    <Card className="border-0">
                      <CardContent className="relative flex h-full items-center justify-center border-0 p-0">
                        <div className="relative h-full">
                          <img
                            src={city.image}
                            alt="home"
                            className="h-full w-full rounded-lg object-cover"
                          />
                          <div className="absolute inset-0 rounded-lg bg-black bg-opacity-40 text-white duration-150 ease-in-out group-hover:bg-opacity-70">
                            <div className="flex flex-col gap-2 p-4">
                              <h2 className="font-semibold">{city.place}</h2>
                              <span>{city.property} properties</span>
                            </div>
                            <div className="absolute  -bottom-4 left-4 flex items-center gap-2   duration-150 ease-linear group-hover:bottom-4">
                              <span className="text-sm">Show City</span>
                              <ArrowUpRight className="h-5 w-5" />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};
