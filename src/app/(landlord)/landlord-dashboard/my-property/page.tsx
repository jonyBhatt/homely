import { Button } from "~/components/ui/button";
import { CurrentUser } from "~/lib/current-user";
import prisma from "~/server/db";
import { PropertyList } from "./_components/PropertyList";
import Link from "next/link";
export default async function LandlordProperty() {
  const { user } = await CurrentUser();
  const existProperty = await prisma.property.findMany({
    where: {
      landLordId: user?.id,
    },
  });
  return (
    <div className="flex min-h-dvh flex-col gap-4">
      <div className="flex items-center justify-between border-b pb-1">
        <h2 className="text-2xl font-bold">My Property</h2>
        <Link href="/landlord-dashboard/my-property/add-property">
          <Button>Add Property</Button>
        </Link>
      </div>
      <div className="mt-4">
        {existProperty ? (
          <>
            <PropertyList properties={existProperty} />
          </>
        ) : (
          <>
            <p>No property found</p>
          </>
        )}
      </div>
    </div>
  );
}
