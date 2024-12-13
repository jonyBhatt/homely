import { ReactNode } from "react";
import { AdminHeader } from "./_components/AdminHeader";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className=" mx-auto flex min-h-dvh flex-col ">
      {/** Header */}
      <AdminHeader />
      {/** Mobile First */}
      <div className="flex lg:hidden"></div>
    </div>
  );
}
