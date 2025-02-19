/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { getLandlords } from "~/server/action/user";
import LandlordApplications from "./_components/LandlordApplication";

export default async function LandlordsPage() {
  const applications = await getLandlords();
  console.log(applications);
  return (
    <div>
      <h1 className="text-3xl font-semibold">Landlords Management</h1>
      {/* Additional content and functionality for managing landlords will go here */}
      <div className="my-8">
        {applications && (
          <LandlordApplications landlords={applications.landlords} />
        )}
      </div>
    </div>
  );
}
