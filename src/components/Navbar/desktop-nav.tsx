"use client";
import { CircleUser } from "lucide-react";
import { type Session } from "next-auth";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

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

export const DesktopNav = ({ session }: { session: Session | null }) => {
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
      className={` flex w-full items-center justify-between ${isScroll ? " sticky top-0 h-full w-full rounded-md border-0 bg-gray-500 bg-opacity-10 bg-clip-padding px-4 py-2 text-white backdrop-blur-sm backdrop-filter " : "bg-transparent text-white"}  `}
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
      <div className="flex items-center gap-5">
        <Link
          href={"/"}
          className={` px-8 font-medium transition-all duration-100 ease-in-out  ${isScroll ? "hover:text-primary" : "hover:text-white/60"} ${pathname !== "/" ? "text-black" : ""}`}
        >
          Home
        </Link>
        <Link
          href={"/listing"}
          className={`px-8 font-medium transition-all duration-100 ease-in-out ${isScroll ? "hover:text-primary" : "hover:text-white/60"} ${pathname !== "/" ? "text-black" : ""}`}
        >
          Listing
        </Link>
        <Link
          href={"/agency"}
          className={` px-8 font-medium transition-all duration-100 ease-in-out  ${isScroll ? "hover:text-primary" : "hover:text-white/60"} ${pathname !== "/" ? "text-black" : ""}`}
        >
          Agency
        </Link>
        <Link
          href={"/"}
          className={` px-8 font-medium transition-all duration-100 ease-in-out ${isScroll ? "hover:text-primary" : "hover:text-white/60"} ${pathname !== "/" ? "text-black" : ""}`}
        >
          Pricing
        </Link>
      </div>
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
            <Link href={"/login"} className="flex items-center gap-1">
              <CircleUser
                className={`h-6 w-6 ${isScroll ? "text-primary" : "text-white"} `}
              />
              {/* <Link href={"/login"}>Login</Link> */}
              <p>Login</p>
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
