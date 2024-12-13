"use client";
import { CircleUser } from "lucide-react";
import { type Session } from "next-auth";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button, buttonVariants } from "~/components/ui/button";

export const AdminHeader = ({ session }: { session: Session | null }) => {
  const pathname = usePathname();
  const [isScroll, setIsScroll] = useState(false);
  const handleScroll = () => {
    if (window.scrollY >= 20) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      className={` container flex w-full items-center  justify-between border-b-2 border-b-gray-500/25 py-4 shadow  `}
    >
      <div>
        {isScroll ? (
          <>
            <Image src="/logo.svg" alt="Logo" width={80} height={80} />
          </>
        ) : (
          <>
            <Image src="/logo.svg" alt="logo" width={80} height={80} />
          </>
        )}
      </div>
      {/* <div className="flex items-center gap-5">
        <Link
          href={"/"}
          className={` border-2 border-transparent px-4 font-medium  transition-colors  duration-300 ease-in-out hover:border-b-transparent hover:border-l-indigo-500 hover:border-r-indigo-500 hover:border-t-transparent hover:bg-gray-50 hover:delay-100`}
        >
          Home
        </Link>
        <Link
          href={"/listing"}
          className={`px-4 font-medium transition-all duration-100 ease-in-out`}
        >
          Listing
        </Link>
        <Link
          href={"/agency"}
          className={` px-4 font-medium transition-all duration-100 ease-in-out `}
        >
          Agency
        </Link>
        <Link
          href={"/"}
          className={` px-4 font-medium transition-all duration-100 ease-in-out`}
        >
          Pricing
        </Link>
      </div> */}
      <div className="flex items-center gap-7">
        {session?.user ? (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src={session.user.image!} />
                  <AvatarFallback className="bg-gray-600">
                    {session.user.name?.slice(0, 1)}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href={"/me"}>Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/">My Properties</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/wishlist">My Wishlist</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                {session.user.role === "Admin" && (
                  <DropdownMenuItem>
                    <Link href="/a-dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                )}
                {session.user.role === "Landlord" && (
                  <DropdownMenuItem>
                    <Link href="/landlord-dashboard">My Dashboard</Link>
                  </DropdownMenuItem>
                )}
                {session.user.role === "Agent" && (
                  <DropdownMenuItem>
                    <Link href="/agent-dashboard">My Dashboard</Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem>
                  <Button onClick={() => signOut()}>Sign Out</Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* <Button onClick={() => signOut()}>Sign Out</Button> */}
          </>
        ) : (
          <>
            <Link
              href={"/login"}
              className={`flex items-center gap-1  ${buttonVariants({
                size: "lg",
                className: "text-white",
              })}`}
            >
              <CircleUser className={`h-6 w-6 text-white `} />
              {/* <Link href={"/login"}>Login</Link> */}
              <p className="">Login</p>
            </Link>
          </>
        )}

        {/* <Button
          size={"lg"}
          className={`${pathname!== '/'?"text-black !border-black":""} flex items-center gap-2.5 rounded-full border border-primary-foreground bg-transparent px-6 py-2`}
        >
          Add Property
          <ArrowUpRight className="h-6 w-6" />
        </Button> */}
      </div>
    </div>
  );
};
