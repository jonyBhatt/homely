import { Bath, Bed } from "lucide-react";
import { Separator } from "../../../../../components/ui/separator";
import { Button } from "../../../../../components/ui/button";

type PropertyCardProps = {
  property: {
    id: number;
    title: string;
    description: string;
    image: string;
    bedrooms: string;
    bathrooms: string;
    location: string;
  };
};

export const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <div className="mb-8 w-full px-4 sm:w-1/2 lg:w-1/3">
      <div className="overflow-hidden rounded-lg bg-white shadow-lg">
        <img
          className="h-64 w-full object-cover"
          src={property.image}
          alt={property.title}
        />
        <div className="p-4">
          <h2 className="mb-2 text-lg font-semibold">{property.title}</h2>
          <span className="mb-4 text-sm text-muted-foreground">
            {property.location}
          </span>
          <div className="mb-4 flex items-center gap-4 text-sm text-gray-700">
            <div className="flex flex-col gap-1 sm:flex-row">
              <Bed className="h-5 w-5 text-muted-foreground" />
              <span className="text-balance text-muted-foreground">
                {property.bedrooms} Bedrooms
              </span>
            </div>
            <div className="flex flex-col gap-1 sm:flex-row">
              <Bath className="h-5 w-5 text-muted-foreground" />
              <span className="text-balance text-muted-foreground">
                {property.bedrooms} Bathrooms
              </span>
            </div>
          </div>
          <Separator />
          <div className="flex flex-col justify-start gap-5 space-x-4 py-4 sm:flex-row  sm:justify-end">
            <Button size={"lg"} className="text-lg font-medium">
              Edit
            </Button>
            <Button
              size={"lg"}
              variant={"destructive"}
              className="text-lg font-medium"
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
