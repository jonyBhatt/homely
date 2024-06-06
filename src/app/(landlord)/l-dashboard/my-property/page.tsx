import { PropertyCard } from "~/app/(landlord)/l-dashboard/my-property/_components/PropertyCard";
// import { properties } from "~/utils/mock/property-data";
import prisma from "~/server/db";

async function MyProperty() {
  const properties = await prisma.property.findMany();
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
          />
        ))}
      </div>
    </div>
  );
}
export default MyProperty;
