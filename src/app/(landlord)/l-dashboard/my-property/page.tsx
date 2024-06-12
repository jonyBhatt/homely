import { redirect } from "next/navigation";
import { PropertyCard } from "~/app/(landlord)/l-dashboard/my-property/_components/PropertyCard";
import { auth } from "~/auth";
// import { properties } from "~/utils/mock/property-data";
import prisma from "~/server/db";

async function MyProperty() {
  const session = await auth();
  if (!session?.user.id) {
    redirect("/login");
  }
  const properties = await prisma.property.findMany({
    where: {
      userId: session.user.id,
    },
  });
  if (!properties || properties.length === 0) {
    return <p>No properties available</p>;
  }
  return (
    <div className="container mx-auto px-4">
      <h1 className="my-8  text-3xl font-semibold">My Properties</h1>
      <div className="flex flex-wrap justify-center">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            id={property.id}
            title={property.title}
            description={property.description}
            image={property.image ?? ""} // Assuming image can be null, so we use the empty string as a fallback
            bedrooms={property.bedrooms}
            bathrooms={property.bathrooms}
            state={property.state ?? ""} // Assuming state can be null, so we use the empty string as a fallback
            address={property.address}
            country={property.country ?? ""}
            price={property.price}
            city={property.city}
            garage={property.garage}
            size={property.size}
            rooms={property.rooms}
          />
        ))}
      </div>
    </div>
  );
}
export default MyProperty;
