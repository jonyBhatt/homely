import { ReactNode } from "react";
import { auth } from "~/auth";
import { AdminSidebar } from "./_components/AdminSidebar";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();
  if (!session) return null;
  return (
    <div className=" mx-auto flex min-h-dvh gap-4 ">
      <AdminSidebar />
      <main className="flex-1 py-6">{children}</main>
    </div>
  );
}
