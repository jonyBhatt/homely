import Link from "next/link";
import { redirect } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { buttonVariants } from "~/components/ui/button";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Separator } from "~/components/ui/separator";
import prisma from "~/server/db";
import { agents, properties } from "~/utils/mock/agency";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { AgentForm } from "../_components/AgentForm";

type Property = {
  title: string;
  description: string;
  price: string;
  category: string;
  rooms: string;
  bedrooms: string;
  bathrooms: string;
  garage: string;
  size: string;
  address: string;
  city: string;
  image?: string;
  state?: string;
  country?: string;
};
// interface SingleAgencyProps extends Agency {
//   landlord: {
//     name: string | null;
//     image: string | null;
//   };
// }

export default async function SingleAgency({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const agency = await prisma.agency.findUnique({
    where: { id },
    include: { landlord: { select: { name: true, image: true } } },
  });

  if (!agency) {
    redirect("/agency");
  }

  return (
    <div className="container mx-auto py-24">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {/** Agency details */}
        <div className="space-y-4 rounded-lg  p-6 text-center ">
          <div className="flex items-start gap-3">
            <img
              src={agency.image!}
              alt={`${agency.name} logo`}
              className=" h-28 w-28"
            />
            <div className="mt-4 flex flex-col items-start gap-4">
              <h2 className="text-2xl font-semibold">{agency.name}</h2>
              <p className="text-gray-500">{agency.address}</p>
              <p className="text-gray-600">{agency.phone}</p>
              <a href={`mailto:${agency.email}`} className="text-blue-500">
                {agency.email}
              </a>
              <div className="flex items-center space-x-2 ">
                <Avatar>
                  <AvatarImage src={agency.landlord.image ?? ""} />
                  <AvatarFallback>
                    {agency.landlord.name
                      ? agency.landlord.name.slice(0, 1)
                      : ""}
                  </AvatarFallback>
                </Avatar>
                <p className="text-sm font-medium text-gray-700">
                  {agency.landlord.name ? agency.landlord.name : ""}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/** Agents  */}
        <div className="flex w-full flex-col">
          <h2 className="mb-4 border-b pb-1 text-2xl font-bold">Agents</h2>
          <ScrollArea className="h-[300px] ">
            <div className="space-y-3 rounded-lg bg-accent p-4  shadow-md ">
              {agents.map((agent, i) => (
                <div className=" flex w-full items-start gap-4 pb-8" key={i}>
                  <div>
                    <Avatar>
                      <AvatarImage src={agent.photo} />
                      <AvatarFallback>Agent Name</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex flex-col items-start gap-4">
                    <p className="text-gray-600">{agent.name}</p>
                    <p className="text-gray-600">{agent.email}</p>
                    <p className="text-gray-600">{agent.phone}</p>
                  </div>
                  <Separator className="my-2 h-4 bg-violet-500/50" />
                </div>
              ))}
            </div>
          </ScrollArea>
          <Dialog>
            <DialogTrigger
              className={buttonVariants({
                size: "lg",
              })}
            >
              Apply for agent
            </DialogTrigger>
            <DialogContent>
              <DialogHeader className="container mx-auto">
                <DialogTitle className="border-b border-b-gray-400 pb-1.5 text-left">
                  Apply for become an agent
                </DialogTitle>
              </DialogHeader>
              <div className=" mt-2">
                <ScrollArea className="container h-[350px] w-[500px]">
                  <AgentForm id={agency.id} />
                </ScrollArea>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      {/** Property */}
      <div className="mt-16">
        <h2 className="mb-6 border-b pb-1 text-2xl font-semibold">
          Properties
        </h2>
        <div className="col-span-12 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {properties.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
}

const PropertyCard: React.FC<{ property: Property }> = ({ property }) => (
  <div className=" w-full space-y-3 rounded-lg bg-white p-4 shadow-md">
    {property.image && (
      <img
        src={property.image}
        alt={property.title}
        className="h-48 w-full rounded-md object-cover"
      />
    )}
    <h3 className="text-lg font-medium">{property.title}</h3>
    <p className="text-gray-500">{property.description}</p>
    <p className="font-semibold text-gray-700">{property.price}</p>
    <div className="space-y-1 text-sm text-gray-600">
      <p>
        <strong>Category:</strong> {property.category}
      </p>
      <p>
        <strong>Rooms:</strong> {property.rooms}
      </p>
      <p>
        <strong>Bedrooms:</strong> {property.bedrooms}
      </p>
      <p>
        <strong>Bathrooms:</strong> {property.bathrooms}
      </p>
      <p>
        <strong>Garage:</strong> {property.garage}
      </p>
      <p>
        <strong>Size:</strong> {property.size}
      </p>
      <p>
        <strong>Address:</strong> {property.address}, {property.city}
      </p>
      {property.state && (
        <p>
          <strong>State:</strong> {property.state}
        </p>
      )}
      {property.country && (
        <p>
          <strong>Country:</strong> {property.country}
        </p>
      )}
    </div>
  </div>
);
