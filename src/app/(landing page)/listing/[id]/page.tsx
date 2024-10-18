import { SizeIcon } from "@radix-ui/react-icons";
import { Bath, Bed, Calendar, Home } from "lucide-react";
import Image from "next/image";
import { MdGarage } from "react-icons/md";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { getPropById } from "~/server/action/property";
import { ScheduleForm } from "./components/schedule-form";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import Link from "next/link";

async function SingleProperty({ params }: { params: { id: string } }) {
  const property = await getPropById(params.id);
  // console.log(property);

  return (
    <div className="py-16">
      <div className="container mx-auto mt-16 p-4">
        <div className="lg:flex lg:space-x-6">
          {/* Left Section */}
          <div className="lg:w-2/3">
            <div className="mb-4 flex flex-col items-start gap-1">
              <h1 className=" text-3xl font-semibold">
                {property?.property?.title}
              </h1>
              <div className="flex items-center gap-2">
                <span className="text-sm font-light text-muted-foreground">
                  {property?.property?.address}, {property?.property?.state},{" "}
                  {property?.property?.country}
                </span>
                <Separator
                  orientation="vertical"
                  className="h-6  text-primary"
                />
                <span className="text-sm text-orange-500">For Rent</span>
              </div>
            </div>
            <Image
              src={
                property?.property?.image
                  ? property.property.image
                  : "/mock-image/1.jpg"
              }
              alt="Property"
              className="mb-4 max-h-svh rounded-2xl object-cover"
              width={800}
              height={50}
            />
            {/** Overview */}
            <div className="mb-4 max-w-3xl rounded-lg bg-gray-100 p-8">
              <h2 className="mb-5 text-2xl font-semibold">Overview</h2>
              <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded  p-2 ">
                  <div className="flex items-center gap-4">
                    <div className="rounded-xl border border-gray-300 p-3">
                      <Bed className="h-4 w-4" />
                    </div>
                    <div>
                      <h2 className="text-base font-semibold">Bedroom</h2>
                      <span>{property?.property?.bedrooms}</span>
                    </div>
                  </div>
                </div>

                <div className="rounded  p-2 ">
                  <div className="flex items-center gap-4">
                    <div className="rounded-xl border border-gray-300 p-3">
                      <Bath className="h-4 w-4" />
                    </div>
                    <div>
                      <h2 className="text-base font-semibold">Bath</h2>
                      <span>{property?.property?.bathrooms}</span>
                    </div>
                  </div>
                </div>

                <div className="rounded  p-2 ">
                  <div className="flex items-center gap-4">
                    <div className="rounded-xl border border-gray-300 p-3">
                      <Calendar className="h-4 w-4" />
                    </div>
                    <div>
                      <h2 className="text-base font-semibold">Year Build</h2>
                      <span>2020</span>
                    </div>
                  </div>
                </div>

                <div className="rounded  p-2 ">
                  <div className="flex items-center gap-4">
                    <div className="rounded-xl border border-gray-300 p-3">
                      <MdGarage className="h-4 w-4" />
                    </div>
                    <div>
                      <h2 className="text-base font-semibold">Garage</h2>
                      <span>{property?.property?.garage}</span>
                    </div>
                  </div>
                </div>

                <div className="rounded  p-2 ">
                  <div className="flex items-center gap-4">
                    <div className="rounded-xl border border-gray-300 p-3">
                      <SizeIcon className="h-4 w-4" />
                    </div>
                    <div>
                      <h2 className="text-base font-semibold">Sqft</h2>
                      <span>{property?.property?.size}</span>
                    </div>
                  </div>
                </div>

                <div className="rounded  p-2 ">
                  <div className="flex items-center gap-4">
                    <div className="rounded-xl border border-gray-300 p-3">
                      <Home className="h-4 w-4" />
                    </div>
                    <div>
                      <h2 className="text-base font-semibold">Property Type</h2>
                      <span>{property?.property?.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/** Description */}
            <div className="mb-4 max-w-3xl bg-gray-100 p-8">
              <h2 className="mb-4 text-2xl font-semibold">Description</h2>
              <p className="mt-2 text-sm">{property?.property?.description}</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="mt-6 flex flex-col gap-16 lg:mt-0 lg:w-1/3">
            <div className="rounded-lg bg-white p-4 shadow">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold">Price</h2>
                <p className="text-2xl font-bold">
                  ${property?.property?.price}
                </p>
              </div>
              <div>
                <h2 className="mb-4 text-xl font-semibold">Schedule a Tour</h2>
                <ScheduleForm id={property?.property?.id} />
              </div>
            </div>
            <div className="my-4 w-full">
              <div className="flex flex-col items-center justify-center rounded-lg bg-secondary p-4 shadow-md">
                <h2 className="text-lg font-semibold">Landlord Details</h2>
                <div className="my-4 flex flex-col items-center justify-center gap-4">
                  <Avatar>
                    <AvatarImage src={property?.property?.user?.image ?? ""} />
                    <AvatarFallback>
                      {property?.property?.user?.name?.slice(0, 1)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-center justify-center">
                    <h2 className="text-xl font-semibold">
                      {property?.property?.user?.name}
                    </h2>
                    <span className="text-center text-base text-muted-foreground">
                      Role
                    </span>
                  </div>
                  <Link href={`/profile/${property?.property?.user?.id}`}>
                    <Button
                      size={"lg"}
                      className="w-full rounded font-semibold"
                    >
                      View Profile
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SingleProperty;
