import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

import { Property } from "@prisma/client";
import Image from "next/image";
import { Button } from "~/components/ui/button";

interface IPropertyList {
  properties: Property[];
}
export const PropertyList = ({ properties }: IPropertyList) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="mb-4 text-3xl font-semibold">Agency property</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {properties.map((property, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle>{property.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src={property.image!}
                alt={property.title}
                width={300}
                height={300}
                objectFit="cover"
                className="rounded-2xl"
              />
            </CardContent>
            <CardFooter className="flex items-center gap-4">
              <Button>Update</Button>
              <Button variant={"destructive"}>Delete </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
