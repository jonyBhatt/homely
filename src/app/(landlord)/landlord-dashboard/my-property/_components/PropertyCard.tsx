import { Property } from "@prisma/client";
import Image from "next/image";
import { FaBath, FaBed, FaCar, FaRulerCombined } from "react-icons/fa";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

interface PropertyCardProps {
  property: Property;
}
export const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <Card>
      <Image
        src={property.image ?? ""}
        alt={property.title}
        width={600}
        height={100}
        className="rounded object-cover"
      />
      <CardHeader>
        <CardTitle>{property.title}</CardTitle>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex items-center gap-4">
        <Button>Update</Button>
        <Button variant={"destructive"}>Delete</Button>
      </CardFooter>
    </Card>
  );
};
