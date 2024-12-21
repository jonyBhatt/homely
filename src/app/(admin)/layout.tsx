import { ReactNode } from "react";
import { auth } from "~/auth";
import { AdminHeader } from "./_components/AdminHeader";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();
  if (!session) return null;
  return (
    <div className=" mx-auto flex min-h-dvh flex-col ">
      {/** Header */}
      <AdminHeader session={session} />
      {/** Mobile First */}
      <div className="flex lg:hidden"></div>
    </div>
  );
}
