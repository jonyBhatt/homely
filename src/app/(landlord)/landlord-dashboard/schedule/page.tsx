"use client";
import { useQuery } from "@tanstack/react-query";
import { Button } from "~/components/ui/button";
import { getSchedule } from "~/server/action/property";

import { sampleSchedule } from "~/utils/mock/schedule";

export default function Schedule() {
  const { data, isLoading } = useQuery({
    queryKey: ["getSchedule"],
    queryFn: async () => await getSchedule(),
  });
  if (isLoading) return <div>Loading...</div>;
  console.log("Data", data);
  if (data?.schedule.length === 0) {
    return <div className="text-center">No schedule for your agency</div>;
  }
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <h1 className="mb-8 text-center text-3xl font-bold">Schedules</h1>

        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2  md:grid-cols-3">
          {sampleSchedule.map((schedule) => (
            <div
              key={schedule.id}
              className="max-w-lg rounded-lg bg-white p-6 shadow-md"
            >
              <h2 className="mb-4 text-xl font-semibold">
                Scheduled by: {schedule.username}
              </h2>
              <p className="text-gray-600">Email: {schedule.email}</p>
              <p className="text-gray-600">Date: {schedule.date}</p>
              {/* Add more details as needed */}
              <div className="mt-4 flex items-center gap-2">
                <Button>Approve</Button>
                <Button variant={"destructive"}>Cancel</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
