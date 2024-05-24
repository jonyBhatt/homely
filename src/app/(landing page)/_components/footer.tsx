import Image from "next/image";
import { MdFacebook } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Button } from "~/components/ui/button";
import Link from "next/link";
export const Footer = () => {
  return (
    <footer className="bg-[#181A20] px-4 py-16 lg:px-16">
      <div className="grid grid-cols-1 gap-x-4 gap-y-7 lg:grid-cols-2">
        {/** grid 1 */}
        <div className="flex w-full flex-col gap-7">
          <div className="">
            <Image src="/logo.svg" alt="logo" width={100} height={100} />
          </div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-sm text-muted-foreground">
                Total Free Customer Care
              </span>
              <p className="font-semibold text-white">+(0) 123 050 945 02</p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm text-muted-foreground">
                Need Live Support?
              </span>
              <p className="font-semibold text-white">info@homely.com</p>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <p className="text-sm font-semibold text-white">
              Follow us on social media
            </p>
            <div className="flex items-center gap-2">
              {/** Facebook */}
              <div className="group flex h-10  w-10 cursor-pointer items-center justify-center rounded-full bg-transparent transition-colors duration-150 ease-in-out hover:bg-gray-800 ">
                <MdFacebook className="h-6 w-6 text-gray-400 transition-colors duration-150 ease-in-out group-hover:text-white " />
              </div>
              {/** Twitter */}
              <div className="group flex h-10  w-10 cursor-pointer items-center justify-center rounded-full bg-transparent transition-colors duration-150 ease-in-out hover:bg-gray-800 ">
                <FaXTwitter className="h-6 w-6 text-gray-400 transition-colors duration-150 ease-in-out group-hover:text-white " />
              </div>
              {/** Instagram */}
              <div className="group flex h-10  w-10 cursor-pointer items-center justify-center rounded-full bg-transparent transition-colors duration-150 ease-in-out hover:bg-gray-800 ">
                <FaInstagram className="h-6 w-6 text-gray-400 transition-colors duration-150 ease-in-out group-hover:text-white " />
              </div>
              {/** Linkedin */}
              <div className="group flex h-10  w-10 cursor-pointer items-center justify-center rounded-full bg-transparent transition-colors duration-150 ease-in-out hover:bg-gray-800 ">
                <FaLinkedin className="h-6 w-6 text-gray-400 transition-colors duration-150 ease-in-out group-hover:text-white " />
              </div>
            </div>
          </div>
        </div>
        {/** grid 2 */}
        <div className="flex w-full flex-col gap-4">
          <p className="text-sm font-semibold text-white">
            Keep Yourself Up to Date
          </p>
          <div className="flex max-w-lg items-center justify-between rounded-2xl bg-[#212329] p-6">
            <input
              type="email"
              placeholder="your email"
              className="border-0 bg-transparent text-white outline-none"
            />
            <Button className="bg-transparent hover:bg-transparent">
              Subscribe
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {/** Popular Search */}
            <div className="flex flex-col ">
              <h2 className="text-base font-bold text-white">Popular Search</h2>
              <div className="mt-6 flex w-full flex-col gap-2">
                <Link
                  href="#"
                  className="text-sm text-gray-400 transition-colors duration-150 ease-in-out hover:text-white hover:underline"
                >
                  Apartment for Rent
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-400 transition-colors duration-150 ease-in-out hover:text-white hover:underline"
                >
                  Apartment Low to Hide
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-400 transition-colors duration-150 ease-in-out hover:text-white hover:underline"
                >
                  Offices for Buy
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-400 transition-colors duration-150 ease-in-out hover:text-white hover:underline"
                >
                  Offices for Rent
                </Link>
              </div>
            </div>
            {/**Quick Links*/}
            <div className="flex flex-col ">
              <h2 className="text-base font-bold text-white">Quick Links</h2>
              <div className="mt-6 flex w-full flex-col gap-2">
                <Link
                  href="#"
                  className="text-sm text-gray-400 transition-colors duration-150 ease-in-out hover:text-white hover:underline"
                >
                  Terms of Use
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-400 transition-colors duration-150 ease-in-out hover:text-white hover:underline"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-400 transition-colors duration-150 ease-in-out hover:text-white hover:underline"
                >
                  Pricing Plans
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-400 transition-colors duration-150 ease-in-out hover:text-white hover:underline"
                >
                  Our Services
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-400 transition-colors duration-150 ease-in-out hover:text-white hover:underline"
                >
                  Contact Support
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-400 transition-colors duration-150 ease-in-out hover:text-white hover:underline"
                >
                  Careers
                </Link>
              </div>
            </div>
            {/** Discover */}
            <div className="flex flex-col ">
              <h2 className="text-base font-bold text-white">Discover</h2>
              <div className="mt-6 flex w-full flex-col gap-2">
                <Link
                  href="#"
                  className="text-sm text-gray-400 transition-colors duration-150 ease-in-out hover:text-white hover:underline"
                >
                  Miami
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-400 transition-colors duration-150 ease-in-out hover:text-white hover:underline"
                >
                  Los Angeles
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-400 transition-colors duration-150 ease-in-out hover:text-white hover:underline"
                >
                  Chicago
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-400 transition-colors duration-150 ease-in-out hover:text-white hover:underline"
                >
                  New York
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
