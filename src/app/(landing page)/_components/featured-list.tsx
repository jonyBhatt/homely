import { ArrowUpRight, Bed, ExternalLink, Heart, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MdShower, MdOutlineSpaceDashboard } from "react-icons/md";
import { Separator } from "~/components/ui/separator";
import { LuCopyPlus } from "react-icons/lu";
import { featured } from "~/utils/mock/featured-list";

export const FeaturedList = () => {
  return (
    <div className="my-16 bg-muted">
      <div className="container mx-auto py-24">
        <div className="flex flex-col  justify-between gap-8 md:flex-row items-center md:gap-0">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <h2 className="text-center text-3xl font-semibold tracking-tight md:text-left">
              Discover Our Featured Listings
            </h2>
            <p className="text-sm text-muted-foreground">
              Aliquam lacinia diam quis lacus euismod
            </p>
          </div>
          <Link
            href="#"
            className="flex items-center  gap-2.5 transition-colors duration-100 ease-in-out hover:text-primary/50"
          >
            See all Properties
            <ArrowUpRight className="h-4 w-4 transition-colors duration-100 ease-in-out hover:text-primary/50" />
          </Link>
        </div>
        <div className="my-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center ">
          {/** Items */}
          {featured.map((data) => (
            <div key={data.id} className="w-full">
              <div className="relative rounded-tl-xl rounded-tr-xl">
                <Image
                  src={data.image}
                  alt={data.name}
                  width={300}
                  height={300}
                  className=" w-full rounded-tl-xl rounded-tr-xl object-cover md:w-auto"
                />
                <div className="absolute left-0 top-4 ml-4 flex items-center gap-2.5 rounded bg-destructive px-4 py-2 text-white">
                  <Zap className="h-4 w-4 text-white" />
                  <span className="text-sm uppercase">Featured</span>
                </div>
                <div className="absolute bottom-4 left-0 ml-4 flex items-center gap-2.5 rounded bg-primary px-4 py-2 text-white">
                  <span>
                    <b>${data.price} /</b> month
                  </span>
                </div>
              </div>
              <div className="rounded-bl-2xl rounded-br-2xl bg-white p-4">
                <h4 className="font-medium">{data.name}</h4>
                <span className="text-sm font-normal text-muted-foreground">
                  {data.place}
                </span>
                <div className="my-4 flex flex-wrap justify-between">
                  <div className="flex items-center gap-1">
                    <Bed className="h-4 w-4" />
                    <span className="text-sm text-muted-foreground">
                      {data.bed} bed
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MdShower className="h-4 w-4" />
                    <span className="text-sm text-muted-foreground">
                      {data.bath} bath
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MdOutlineSpaceDashboard className="h-4 w-4" />
                    <span className="text-sm text-muted-foreground">
                      {data.space} sqft
                    </span>
                  </div>
                </div>
                <Separator />
                <div className=" my-4 flex items-center justify-between">
                  <span className="text-sm">For Rent</span>
                  <div className="flex items-center gap-4">
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    <LuCopyPlus className="h-4 w-4 text-muted-foreground" />
                    <Heart className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
