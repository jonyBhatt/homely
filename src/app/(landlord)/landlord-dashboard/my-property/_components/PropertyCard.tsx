"use client";

import { Property } from "@prisma/client";
import Image from "next/image";
import { Button, buttonVariants } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { ScrollArea } from "~/components/ui/scroll-area";
import { UpdateProperty } from "./UpdatePropertyFrom";
import { toast } from "sonner";
import { deleteProperty } from "~/server/action/property";
import { useRouter } from "next/navigation";

interface PropertyCardProps {
  property: Property;
}
export const PropertyCard = ({ property }: PropertyCardProps) => {
  const router = useRouter();

  const handleDelete = () => {
    console.log("Delete property");
    toast.promise(deleteProperty(property.id), {
      loading: "Loading....",
      success: (data) => {
        router.refresh();
        return `${data?.message}`;
      },
      error: "Error deleting property",
    });
  };

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
        <Dialog>
          <DialogTrigger
            className={`${buttonVariants({
              size: "lg",
              className: "!text-lg",
            })} `}
          >
            Update
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Update Agency</DialogTitle>
            </DialogHeader>
            <ScrollArea className="h-[500px] w-full rounded">
              <UpdateProperty property={property} />
            </ScrollArea>
          </DialogContent>
        </Dialog>
        <Button
          size={"lg"}
          className="text-lg"
          variant={"destructive"}
          onClick={handleDelete}
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};
