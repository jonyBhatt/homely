import { PropertyCard } from "~/app/(landlord)/l-dashboard/my-property/_components/PropertyCard";
import { properties } from "~/utils/mock/property-data";

function MyProperty() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="my-8  text-3xl font-semibold">My Properties</h1>
      <div className="flex flex-wrap justify-center">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}
export default MyProperty;
