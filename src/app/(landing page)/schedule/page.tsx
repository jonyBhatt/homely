import ScheduleTable from "./_components/ScheduleTable";
export interface Schedule {
  id: string;
  property: {
    id: string;
    name: string;
    image: string;
  };
  date: string;
  approved: boolean;
}
export default function MySchedule() {
  return (
    <div className="container my-16 p-6">
      <h1 className="mb-4 pt-8 text-2xl font-semibold">Schedule List</h1>
      <ScheduleTable />
    </div>
  );
}
