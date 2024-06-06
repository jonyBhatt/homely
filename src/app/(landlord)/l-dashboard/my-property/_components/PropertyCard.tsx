"use client";
import { Bath, Bed } from "lucide-react";
import { Button } from "../../../../../components/ui/button";
import { Separator } from "../../../../../components/ui/separator";
import { deleteProperty } from "~/server/action/property";
import { toast } from "sonner";
import { PropertyCardProps } from "~/types/property-types";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { UpdateProperty } from "./UpdateProperty";
import { ScrollArea } from "~/components/ui/scroll-area";

export const PropertyCard = ({
  id,
  title,
  price,
  description,
  image,
  bedrooms,
  bathrooms,
  state,
  address,
  country,
}: PropertyCardProps) => {
  const propertyDelete = async () => {
    const res = await deleteProperty(id);
    if (res?.success) {
      toast.success("Delete property");
    }
  };

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
            <Dialog>
              <DialogTrigger asChild>
                <Button size={"lg"} className="text-lg font-medium">
                  Edit
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Update your property</DialogTitle>
                </DialogHeader>
                <ScrollArea className="max-h-80 w-full rounded-md">
                  <UpdateProperty
                    id={id}
                    title={title}
                    description={description}
                    image={image ?? ""} // Assuming image can be null, so we use the empty string as a fallback
                    bedrooms={bedrooms}
                    bathrooms={bathrooms}
                    state={state ?? ""} // Assuming state can be null, so we use the empty string as a fallback
                    address={address}
                    country={country ?? ""}
                    price={price}
                  />
                </ScrollArea>
              </DialogContent>
            </Dialog>

            <Button
              size={"lg"}
              variant={"destructive"}
              className="text-lg font-medium"
              onClick={propertyDelete}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
