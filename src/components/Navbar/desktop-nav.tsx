"use client";
import { ArrowUpRight, CircleUser } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

export const DesktopNav = () => {
  const [isScroll, setIsScroll] = useState(false);
  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight) {
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
      className={` flex w-full items-center justify-between ${isScroll ? "fixed top-0 bg-white animate-accordion-down" : "bg-transparent text-white"}`}
    >
      <div>
        {isScroll ? (
          <>
            <Image src="/logo.svg" alt="Logo" width={80} height={80} />
          </>
        ) : (
          <>
            <Image src="/scroll-logo.svg" alt="logo" width={80} height={80} />
          </>
        )}
      </div>
      <div className="flex items-center gap-5">
        <Link
          href={"/"}
          className={` px-8 font-medium transition-all duration-100 ease-in-out  ${isScroll ? "hover:text-primary" : "hover:text-white/60"} `}
        >
          Home
        </Link>
        <Link
          href={"/"}
          className={`px-8 font-medium transition-all duration-100 ease-in-out ${isScroll ? "hover:text-primary" : "hover:text-white/60"}`}
        >
          Listing
        </Link>
        <Link
          href={"/"}
          className={` px-8 font-medium transition-all duration-100 ease-in-out  ${isScroll ? "hover:text-primary" : "hover:text-white/60"} `}
        >
          Property
        </Link>
        <Link
          href={"/"}
          className={` px-8 font-medium transition-all duration-100 ease-in-out ${isScroll ? "hover:text-primary" : "hover:text-white/60"} `}
        >
          Pricing
        </Link>
      </div>
      <div className="flex items-center gap-7">
        <Link href={"/login"} className="flex items-center gap-1">
          <CircleUser
            className={`h-6 w-6 ${isScroll ? "text-primary" : "text-white"} `}
          />
          {/* <Link href={"/login"}>Login</Link> */}
          <p>Login</p>
        </Link>
        <Button
          size={"lg"}
          className="flex items-center gap-2.5 rounded-full border border-primary-foreground bg-transparent px-6 py-2"
        >
          Add Property
          <ArrowUpRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};
