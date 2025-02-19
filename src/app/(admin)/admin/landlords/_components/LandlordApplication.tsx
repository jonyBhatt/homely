/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client";

import { LandlordApplication } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import { updateRoleAsLandlord } from "~/server/action/user";

interface LandlordApplicationsProps {
  landlords: LandlordApplication[];
}

export default function LandlordApplications({
  landlords,
}: LandlordApplicationsProps) {
  const router = useRouter();
  const [applications, setApplications] =
    useState<LandlordApplication[]>(landlords);

  const handleApprove = (id: string) => {
    toast.promise(updateRoleAsLandlord(id), {
      loading: "Updating role....",
      success: (data) => {
        router.push("/admin");
        return `${data?.message}`;
      },
      error: "Failed to update role",
    });
  };

  const handleDisapprove = (id: string) => {
    setApplications(applications.filter((app) => app.id !== id));
    // Here you would typically make an API call to update the application status
    console.log(`Disapproved application ${id}`);
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white shadow-sm">
        <thead>
          <tr className="bg-gray-50">
            <th className="border-b p-4 text-left font-semibold text-gray-600">
              ID
            </th>
            <th className="border-b p-4 text-left font-semibold text-gray-600">
              Name
            </th>
            <th className="border-b p-4 text-left font-semibold text-gray-600">
              NID
            </th>
            <th className="border-b p-4 text-left font-semibold text-gray-600">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {landlords.map((application) => (
            <tr key={application.id} className="hover:bg-gray-50">
              <td className="border-b p-4">{application.id.slice(0, 4)}</td>
              <td className="border-b p-4">{application.firstName}</td>
              <td className="border-b p-4">{application.nid}</td>
              <td className="border-b p-4">
                <div className="space-x-2">
                  <Button
                    onClick={() => handleApprove(application.id as string)}
                    className=""
                  >
                    Approve
                  </Button>
                  <Button
                    onClick={() => handleDisapprove(application.id as string)}
                    className=""
                    variant={"destructive"}
                  >
                    Disapprove
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
