import Link from "next/link";
import { Button } from "~/components/ui/button";
import { CurrentUser } from "~/lib/current-user";
import prisma from "~/server/db";
import { AgencyPage } from "../_components/AgencyPage";
async function Agency() {
  const { user } = await CurrentUser();
  const existAgency = await prisma.agency.findFirst({
    where: {
      landlordId: user?.id,
    },
  });
  return (
    <div>
      {existAgency ? (
        <div className="relative">
          <AgencyPage />
        </div>
      ) : (
        <div>
          <h2 className="border-b border-b-[#405189] pb-2  text-3xl font-semibold">
            Agency
          </h2>
          <div className="flex min-h-dvh w-full flex-col justify-center gap-8">
            <h2 className="text-3xl font-semibold">
              You don&apos;t owned any agency
            </h2>
            <Link href="/landlord-dashboard/agency/create">
              <Button className="w-full text-lg font-medium" size="lg">
                Create Agency
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
export default Agency;
