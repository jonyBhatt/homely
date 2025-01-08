import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button, buttonVariants } from "~/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { DeleteAgencyConfirmation } from "./DeleteAgencyConfirmation";
import Link from "next/link";

interface AgencyProps {
  agency: {
    id: string;
    name: string;
    address: string;
    phone: string;
    email: string;
    image: string | null;
    landlordId: string;
    publish: boolean;
    createdAt: Date;
    updatedAt: Date;
  };
}

export const AgencyPage = async ({ agency }: AgencyProps) => {
  return (
    <div>
      <div className="agency-bg">
        <div className="flex items-center justify-center">
          <h2 className="text-3xl font-semibold text-white">My Agency</h2>
        </div>
      </div>
      <div className="container mx-auto my-8">
        <div className="flex flex-col items-start justify-between gap-1.5 border-b pb-2 md:flex-row md:items-center">
          <Image
            src={agency.image ? agency.image : "/images/a-logo.jpg"}
            alt="agency logo"
            className="rounded-full object-cover"
            width={80}
            height={80}
          />
          {/* <h3 className="text-lg font-medium text-gray-800">{agency.name}</h3> */}
          <div className="flex items-center gap-2">
            <Button size="lg" className="text-lg">
              Update
            </Button>
            <Dialog>
              <DialogTrigger>
                <Button size="lg" variant={"destructive"} className="text-lg">
                  Delete
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete
                    your agency account and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <DeleteAgencyConfirmation
                    agencyId={agency.id}
                    agencyname={agency.name}
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="my-8 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          {/** Agency Details */}
          <div className="flex w-full max-w-md flex-col items-start gap-6 rounded bg-gray-100 p-8">
            <div className="w-full">
              <h2 className=" pb-2 text-3xl font-semibold">Agency Details</h2>
              <hr className="h-1 w-full bg-primary " />
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="flex flex-col items-start gap-1.5 md:flex-row md:items-center">
                <p className="text-base font-medium">Agency Name:</p>
                <h2 className="text-base font-semibold">{agency.name}</h2>
              </div>
              <div className="flex flex-col items-start gap-1.5 md:flex-row md:items-center">
                <p className="text-base font-medium ">Agency Address:</p>
                <h2 className="text-sm font-semibold">{agency.address}</h2>
              </div>
              <div className="flex flex-col items-start gap-1.5 md:flex-row md:items-center">
                <p className="text-base font-medium ">Agency Email:</p>
                <h2 className="text-base font-semibold">{agency.email}</h2>
              </div>
              <div className="flex flex-col items-start gap-1.5 md:flex-row md:items-center">
                <p className="text-base font-medium">Agency Number:</p>
                <h2 className="text-base font-semibold">{agency.phone}</h2>
              </div>
            </div>
          </div>
          <div className="flex w-full max-w-md flex-col items-start gap-6 rounded bg-gray-100 p-8">
            {/** Agent */}
            <div className="w-full">
              <h2 className=" pb-2 text-3xl font-semibold">Agents</h2>
              <hr className="h-1 w-full bg-primary " />
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="flex flex-col items-start gap-1.5 md:flex-row md:items-center">
                <div>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex flex-col items-start  ">
                  <div className="flex flex-col md:flex-row md:items-center md:gap-1">
                    <p className="text-base font-medium md:text-lg">
                      Agent Name:
                    </p>
                    <h2 className="text-lg font-semibold">Shadman</h2>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center md:gap-1">
                    <h2 className="text-base text-muted-foreground">
                      myagent@example.com
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/** Add property link */}
        <Link
          href={`/landlord-dashboard/agency/${agency.id}/add-property`}
          className={`${buttonVariants()} mt-8 w-full`}
        >
          Add property
        </Link>
      </div>
    </div>
  );
};
