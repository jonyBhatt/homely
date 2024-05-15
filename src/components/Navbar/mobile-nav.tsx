import { TextAlignLeftIcon } from "@radix-ui/react-icons";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { X, CircleUser } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
//#FDF4F3
export const MobileNav = () => {
  return (
    <div className="flex w-full items-center justify-between ">
      <Sheet>
        <SheetTrigger>
          <TextAlignLeftIcon className="h-8 w-8" />
        </SheetTrigger>
        <SheetContent side="left" className="p-0 ">
          <SheetHeader className="flex flex-row-reverse items-center justify-between border-b bg-[#FDF4F3] px-5 pb-8 pt-8">
            <SheetClose className="rounded-full  bg-destructive p-2">
              <X className="h-5 w-5 font-bold text-white" />
            </SheetClose>
            <SheetTitle className="text-2xl font-bold">
              Welcome to Homely
            </SheetTitle>
          </SheetHeader>
          <div className="my-8 flex flex-col gap-8 ">
            <Link
              href={"/"}
              className="px-8 py-4 font-medium transition-all duration-100 ease-in-out hover:bg-secondary"
            >
              Home
            </Link>
            <Link
              href={"/"}
              className="px-8 py-4 font-medium transition-all duration-100 ease-in-out hover:bg-secondary"
            >
              Listing
            </Link>
            <Link
              href={"/"}
              className="px-8 py-4 font-medium transition-all duration-100 ease-in-out hover:bg-secondary"
            >
              Property
            </Link>
            <Link
              href={"/"}
              className="px-8 py-4 font-medium transition-all duration-100 ease-in-out hover:bg-secondary"
            >
              Pricing
            </Link>
            <hr className="h-0.5 bg-primary/20" />
            <div className="flex items-center justify-between px-8">
              <div className="flex flex-col gap-2">
                <span className="text-sm font-light tracking-wide text-muted-foreground">
                  Total Free Customer Care
                </span>
                <p className="font-semibold">+(0) 123 050 945 02</p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm font-light tracking-wide text-muted-foreground">
                  Need Live Support?
                </span>
                <p className="font-semibold">info@homely.com</p>
              </div>
            </div>
            <hr className="h-0.5 bg-primary/20" />
            <div className="flex items-center gap-4 px-8">
              <h2 className="font-semibold">Follow us</h2>
              <div className="flex items-center gap-4">
                <Link href="/">
                  <Image
                    src="/social/fb.svg"
                    alt="social"
                    width={30}
                    height={30}
                  />
                </Link>
                <Link href="/">
                  <Image
                    src="/social/insta.svg"
                    alt="social"
                    width={30}
                    height={30}
                  />
                </Link>
                <Link href="/">
                  <Image
                    src="/social/x.svg"
                    alt="social"
                    width={30}
                    height={30}
                  />
                </Link>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <div>
        <Image src="/logo.svg" alt="Logo" width={100} height={100} />
      </div>
      <div>
        <Link href="/login">
          <CircleUser className="h-8 w-8" />
        </Link>
      </div>
    </div>
  );
};
