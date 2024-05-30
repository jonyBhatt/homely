import { type ReactNode } from "react";
import LandLordSideBar from "./_components/land-side-bar";

export default function LandlordDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex h-screen ">
      <div className="w-16 text-white lg:w-64">
        <LandLordSideBar />
        {/* <p>Side bar</p> */}
      </div>
      <div className=" flex-1 overflow-hidden overflow-y-scroll p-6">
        {children}
      </div>
    </div>
  );
}
