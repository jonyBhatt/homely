"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { getAllScheduleByUser } from "~/server/action/property";
import { Property, Schedule as PrismaSchedule } from "@prisma/client";



interface Schedule extends Omit<PrismaSchedule, "userId" | "propertyId"> {
  property: Pick<Property, "title" | "image">;
}

const SchedulerTable = () => {
  const [schedules, setSchedules] = useState<Schedule[]>([]);

  useEffect(() => {
    toast.promise(getAllScheduleByUser, {
      loading: "Loading...",
      success: (data) => {
        console.log(data?.schedule);
        setSchedules(data?.schedule ?? []);
        return `${data?.message}`;
      },
      error: "Error",
    });
  },[]);
  // useEffect(() => {
  //   setSchedules(mockSchedules);
  // }, []);

  return (
    <div className=" max-w-4xl ">
      {schedules.length === 0 ? (
        <p className="text-gray-500">No scheduled properties found.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {schedules.map((schedule) => (
            <div
              key={schedule.id}
              className="w-full max-w-md rounded-lg border bg-white p-4 shadow-lg"
            >
              <Image
                src={schedule.property.image  ??  "/images/home1.jpg"}
                alt={schedule.property.title}
                width={300}
                height={200}
                className="h-40 w-full rounded-md object-cover"
              />
              <h3 className="mt-2 text-lg font-medium">
                {schedule.property.title}
              </h3>
              <p className="text-sm text-gray-600">
                Scheduled for: {schedule.date}
              </p>
              <span
                className={`mt-2 inline-block rounded-md px-3 py-1 text-sm font-semibold ${schedule.approved ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"}`}
              >
                {schedule.approved ? "Approved" : "Pending"}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SchedulerTable;
