import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { Separator } from "~/components/ui/separator";
import { cData } from "~/utils/mock/carousel-data";

export const Testimonial = () => {
  return (
    <div className="bg-[#FEF7F6] py-16">
      <div className="container mx-auto">
        {/* <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-center md:gap-0">
          <div className="flex flex-col items-center gap-4 md:items-start md:gap-1 ">
            <h2 className="text-center text-3xl font-medium">
              People Love Living with Homely
            </h2>
            <p className="text-center text-sm">
              Aliquam lacinia diam quis lacus euismod
            </p>
          </div>
        </div> */}
        <Carousel className="">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center gap-4 md:items-start md:gap-1 ">
              <h2 className="text-center text-3xl font-medium">
                People Love Living with Homely
              </h2>
              <p className="text-center text-sm">
                Aliquam lacinia diam quis lacus euismod
              </p>
            </div>
            <div>
              <CarouselPrevious className="!relative !-left-0 mr-4 !-translate-y-0" />
              <CarouselNext className=" !relative !-right-0   !-translate-y-0" />
            </div>
          </div>

          <CarouselContent className="showslides my-8 max-w-sm gap-16  lg:w-full ">
            {cData.map((data) => (
              <CarouselItem key={data.id}>
                <div className="flex flex-col gap-4 overflow-hidden rounded bg-white px-4 pb-3 pt-7 shadow-md sm:px-7">
                  <h6 className="text-sm font-semibold sm:text-base">
                    Great Work
                  </h6>
                  <span className="mb-2 break-words text-xs font-semibold sm:text-sm md:text-base">
                    Amazing design, easy to customize and a design quality
                    superlative account on its cloud platform for the optimized
                    performance. And we didn’t on our original designs.
                  </span>

                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <div key={index}>
                        <Star className="h-3 w-3 fill-[#E59819] text-[#E59819]" />
                      </div>
                    ))}
                  </div>
                  <Separator />
                  <div className="flex items-center gap-4">
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
                      alt=""
                      className="h-16 w-16 rounded-full object-cover "
                    />
                    <div className="flex flex-col items-start gap-1">
                      <h6 className="text-sm font-semibold">Alexander</h6>
                      <span className="text-xs text-gray-500">Nintendo</span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};
