import { getAllPropertiesByAgencyAndOwner } from "~/server/action/property";
import { ReportForm } from "./_components/ReportForm";

export default async function Report() {
  const data = await getAllPropertiesByAgencyAndOwner();

  if (!data?.property) {
    return null;
  }
  // console.log(data?.property);
  return (
    <div className="h-dvh py-16">
      <div className="container mx-auto mt-16">
        <h2 className="border-b-2 border-b-gray-500/40 pb-1.5 text-3xl font-semibold">
          Submit your Report
        </h2>
        <div className="mt-4">
          <ReportForm property={data.property}/>
        </div>
      </div>
    </div>
  );
}
