"use client";
import { Property } from "@prisma/client";
import { Bath, Bed, Heart, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { Separator } from "~/components/ui/separator";
import { wishList } from "~/server/action/property";
import { Button } from "~/components/ui/button";
import { MdDining, MdKitchen } from "react-icons/md";

interface ListProps {
  properties: Property[];
}

export const List = ({ properties }: ListProps) => {
  const session = useSession();

  if (!session.data?.user.id) return null;

  const addWishList = async (propId: string, userId: string) => {
    try {
      toast.promise(wishList(propId, userId), {
        success: () => toast.success("Property added to wishlist"),
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
        error: (error) => toast.error(error.message),
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to add property to wishlist");
    }
  };
  return (
    <div className="my-16 flex w-full items-center justify-center">
      <div className="grid h-full w-full grid-cols-1  gap-4 pb-4 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <div
            key={property.id}
            className="max-w-md overflow-hidden rounded-lg bg-green-50"
          >
            <Image
              src={property.image!}
              alt={property.title}
              width={1000}
              height={30}
              className="h-64 w-full object-cover"
            />
            <div className="flex flex-col items-start p-4">
              <Link
                href={`/listing/${property.id}`}
                className="mb-2 text-lg font-semibold"
              >
                {property.title}
              </Link>
              <span className="mb-4 text-sm text-muted-foreground">
                {property.address}, {property.city}, {property.state},{" "}
                {property.country}
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
                    {property.bathrooms} Bathrooms
                  </span>
                </div>

                <div className="flex flex-col gap-1 sm:flex-row">
                  <MdDining className="h-5 w-5 text-muted-foreground" />
                  <span className="text-balance text-muted-foreground">
                    {property.dining} Dining
                  </span>
                </div>

                <div className="flex flex-col gap-1 sm:flex-row">
                  <MdKitchen className="h-5 w-5 text-muted-foreground" />
                  <span className="text-balance text-muted-foreground">
                    {property.kitchen} Kitchen
                  </span>
                </div>
              </div>
            </div>
            <Separator />
            <div className="my-4 flex items-center justify-between px-6">
              <span className="text-base font-light text-gray-400">
                For Rent
              </span>
              <div className="flex items-center gap-4">
                <Link href={`/listing/${property.id}`}>
                  <SquareArrowOutUpRight className="h-5 w-5 text-muted-foreground" />
                </Link>
                <Button
                  onClick={() =>
                    session.data &&
                    session.data.user &&
                    session.data.user.id &&
                    addWishList(property.id, session.data.user.id)
                  }
                  className="group bg-transparent hover:bg-transparent"
                >
                  <Heart className="h-5 w-5 text-muted-foreground group-hover:text-pink-600" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
