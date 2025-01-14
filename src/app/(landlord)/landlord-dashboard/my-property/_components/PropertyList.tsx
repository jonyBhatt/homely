import { Property } from "@prisma/client";
import { PropertyCard } from "./PropertyCard";

interface PropertyListProps {
  properties: Property[];
}
export const PropertyList = ({ properties }: PropertyListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {properties.map((property, i) => (
        <PropertyCard key={i} property={property} />
      ))}
    </div>
  );
};
