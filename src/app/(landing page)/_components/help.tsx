import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "~/components/ui/button";

export const HelpSection = () => {
  return (
    <div className="container mx-auto my-16 px-16">
      <div className="mb-4 flex flex-col items-center gap-4 md:gap-1.5">
        <h2 className="text-2xl font-bold md:text-4xl">
          See How Homely Can Help
        </h2>
        <p className="text-sm text-gray-500">
          Aliquam lacinia diam quis lacus euismod
        </p>
      </div>
      <div className="my-8 flex items-center justify-center">
        <div className="my-4 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
          <div className="flex flex-col items-center gap-4 py-8 px-4 transition-all w-[340px] duration-100 ease-in-out hover:shadow-md">
            <Image
              src="/property-buy.svg"
              alt="buy-property"
              width={100}
              height={100}
            />
            <h4 className="font-medium">Buy a Property</h4>
            <span className="text-wrap text-center font-normal">
              Nullam sollicitudin blandit eros eu pretium. Nullam maximus
              ultricies auctor.
            </span>
            <Button
              variant={"outline"}
              size={"lg"}
              className="flex items-center gap-2.5 rounded-2xl"
            >
              Find a home
              <ArrowUpRight />
            </Button>
          </div>

          <div className="flex flex-col items-center gap-4 py-8 px-4 transition-all w-[340px] duration-100 ease-in-out hover:shadow-md">
            <Image
              src="/property-sell.svg"
              alt="buy-property"
              width={100}
              height={100}
            />
            <h4 className="font-medium">Sell a Property</h4>
            <span className="text-wrap text-center font-normal">
              Nullam sollicitudin blandit eros eu pretium. Nullam maximus
              ultricies auctor.
            </span>
            <Button
              variant={"outline"}
              size={"lg"}
              className="flex items-center gap-2.5 rounded-2xl"
            >
              Place an ad
              <ArrowUpRight />
            </Button>
          </div>

          <div className="flex flex-col items-center gap-4 py-8 px-4 transition-all w-[340px] duration-100 ease-in-out hover:shadow-md">
            <Image
              src="/property-rent.svg"
              alt="buy-property"
              width={100}
              height={100}
            />
            <h4 className="font-medium">Rent a Property</h4>
            <span className="text-wrap text-center font-normal">
              Nullam sollicitudin blandit eros eu pretium. Nullam maximus
              ultricies auctor.
            </span>
            <Button
              variant={"outline"}
              size={"lg"}
              className="flex items-center gap-2.5 rounded-2xl"
            >
              Find a rental
              <ArrowUpRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
