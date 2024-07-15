/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Bath, Bed, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "~/components/ui/separator";
import { getWishList } from "~/server/action/property";

export default async function WishList() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const wishes = await getWishList();
  if (!wishes) return null;
  console.log(wishes);

  return (
    <div className="container mx-auto pt-36">
      <div className="grid h-full w-full grid-cols-1  gap-4 pb-4 sm:grid-cols-2 lg:grid-cols-3">
        {wishes.map((wish) => (
          <div
            key={wish.id}
            className="max-w-md overflow-hidden rounded-lg bg-green-50"
          >
            <Image
              // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
              src={wish.property.image!}
              alt={wish.property.title}
              width={1000}
              height={30}
              className="h-64 w-full object-cover"
            />
            <div className="flex flex-col items-start p-4">
              <Link
                href={`/listing/${wish.property.id}`}
                className="mb-2 text-lg font-semibold"
              >
                {wish.property.title}
              </Link>
              <span className="mb-4 text-sm text-muted-foreground">
                {wish.property.address}, {wish.property.city},{" "}
                {wish.property.state}, {wish.property.country}
              </span>
              <div className="mb-4 flex items-center gap-4 text-sm text-gray-700">
                <div className="flex flex-col gap-1 sm:flex-row">
                  <Bed className="h-5 w-5 text-muted-foreground" />
                  <span className="text-balance text-muted-foreground">
                    {wish.property.bedrooms} Bedrooms
                  </span>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row">
                  <Bath className="h-5 w-5 text-muted-foreground" />
                  <span className="text-balance text-muted-foreground">
                    {wish.property.bathrooms} Bathrooms
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
                <Link href={`/listing/${wish.property.id}`}>
                  <SquareArrowOutUpRight className="h-5 w-5 text-muted-foreground" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
