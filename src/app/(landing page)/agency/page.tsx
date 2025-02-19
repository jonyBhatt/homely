import { type Agency } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import prisma from "~/server/db";

interface AgencyProps extends Agency {
  landlord: {
    name: string | null;
    image: string | null;
  };
}

// AgencyCard Component
const AgencyCard: React.FC<{ agency: AgencyProps }> = ({ agency }) => {
  return (
    <section className=" min-w-md w-full transition-all duration-300 hover:scale-110">
      <Link
        href={`/agency/${agency.id}`}
        className="h-full min-h-min w-full space-y-4 rounded-lg bg-secondary p-6 text-center shadow-lg"
      >
        <img
          src={agency.image!}
          alt={`${agency.name} logo`}
          className="mx-auto h-16 w-16 rounded-full"
        />
        <h3 className="text-xl font-semibold">{agency.name}</h3>
        <p className="text-sm text-gray-500">{agency.address}</p>
        <p className="text-sm text-gray-600">{agency.phone}</p>
        <p className="text-sm text-blue-500">{agency.email}</p>
        <div className="flex items-center justify-center space-x-2">
          <Avatar>
            <AvatarImage src={agency.landlord.image ?? ""} />
            <AvatarFallback>
              {agency.landlord.name ? agency.landlord.name.slice(0, 1) : ""}
            </AvatarFallback>
          </Avatar>
          <p className="text-sm font-medium text-gray-700">
            {agency.landlord.name ? agency.landlord.name : ""}
          </p>
        </div>
      </Link>
    </section>
  );
};

// Main Component to render Agency Cards
const AgencyList: React.FC = async () => {
  const agencies = await prisma.agency.findMany({
    include: {
      landlord: {
        select: {
          image: true,
          name: true,
        },
      },
    },
  });
  // console.log(agencies);

  if (!agencies) {
    return <div>No Agencies Found</div>;
  }
  return (
    <div className="container mx-auto px-4 py-48">
      <div className=" grid gap-8 transition-all duration-300 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {agencies.map((agency, index) => (
          <AgencyCard key={index} agency={agency} />
        ))}
      </div>
    </div>
  );
};

export default AgencyList;
