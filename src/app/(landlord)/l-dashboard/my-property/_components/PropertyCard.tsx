import { Bath, Bed } from "lucide-react";
import { Separator } from "../../../../../components/ui/separator";
import { Button } from "../../../../../components/ui/button";

type PropertyCardProps = {
  title: string;
  description: string;
  image: string;
  bedrooms: string;
  bathrooms: string;
  state: string;
  address: string;
  country: string;
};

export const PropertyCard = ({
  title,
  description,
  image,
  bedrooms,
  bathrooms,
  state,
  address,
  country,
}: PropertyCardProps) => {
  return (
    <div className="mb-8 w-full px-4 sm:w-1/2 lg:w-1/3">
      <div className="overflow-hidden rounded-lg bg-white shadow-lg">
        <img className="h-64 w-full object-cover" src={image} alt={title} />
        <div className="p-4">
          <h2 className="mb-2 text-lg font-semibold">{title}</h2>
          <span className="mb-4 text-sm text-muted-foreground">
            {address}, {state}, {country}
          </span>
          <div className="mb-4 flex items-center gap-4 text-sm text-gray-700">
            <div className="flex flex-col gap-1 sm:flex-row">
              <Bed className="h-5 w-5 text-muted-foreground" />
              <span className="text-balance text-muted-foreground">
                {bedrooms} Bedrooms
              </span>
            </div>
            <div className="flex flex-col gap-1 sm:flex-row">
              <Bath className="h-5 w-5 text-muted-foreground" />
              <span className="text-balance text-muted-foreground">
                {bathrooms} Bathrooms
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
