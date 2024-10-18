"use client";
import { AgentSideBarContents } from "~/constants/sidebar-navigation";
import { signOut } from "next-auth/react";
import { Button } from "../ui/button";
import { CiLogout } from "react-icons/ci";
import Link from "next/link";
import { cn } from "~/lib/utils";
import { usePathname } from "next/navigation";
interface SideBarProps {
  role: "Admin" | "Landlord" | "User" | "Agent";
  className?: string;
}

const logOut = async () => {
  await signOut();
};

export const SideBar = ({ role, className }: SideBarProps) => {
  const pathname = usePathname();
  return (
    <aside
      className={cn(
        ` flex h-full w-full flex-col  items-center gap-4 bg-[#405189]  py-4 text-white  sm:pt-4`,
        className,
      )}
    >
      {role === "Landlord" &&
        AgentSideBarContents.map((ctx) => (
          <Link
            href={ctx.path}
            key={ctx.title}
            className={`group mb-6 flex w-full items-start rounded-lg px-4 py-4 transition-colors duration-100 ease-in-out hover:bg-muted ${ctx.path === pathname ? "bg-primary text-white" : ""}`}
          >
            <span className="text-2xl group-hover:text-primary">
              {ctx.icon}
            </span>
            <span className="ml-3 hidden group-hover:text-primary lg:inline-block">
              {ctx.title}
            </span>
          </Link>
        ))}
      <div
        className="group mt-6 flex w-full cursor-pointer items-center rounded-lg px-4 py-4 transition-colors duration-100 ease-in-out hover:bg-muted"
        onClick={logOut}
      >
        <span className="text-2xl group-hover:text-primary">
          <CiLogout />
        </span>
        <span className="ml-3 hidden group-hover:text-primary lg:inline-block">
          Log out
        </span>
      </div>
    </aside>
  );
};
