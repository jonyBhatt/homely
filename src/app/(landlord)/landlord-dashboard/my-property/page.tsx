import { Button } from "~/components/ui/button";
import { CurrentUser } from "~/lib/current-user";
import prisma from "~/server/db";
import { PropertyList } from "./_components/PropertyList";
export default async function LandlordProperty() {
  const { user } = await CurrentUser();
  const existProperty = await prisma.agency.findMany({
    where: {
      landlordId: user?.id,
    },
    include: {
      properties: true,
    },
  });
  return (
    <div className="flex min-h-dvh flex-col gap-4">
      <div className="flex items-center justify-between border-b pb-1">
        <h2 className="text-2xl font-bold">My Property</h2>
        <Button>Add Property</Button>
      </div>
      <div className="mt-4">
        {existProperty ? (
          <>
            {existProperty.map((property, i) => (
              <PropertyList key={i} properties={property.properties}/>
            ))}
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
