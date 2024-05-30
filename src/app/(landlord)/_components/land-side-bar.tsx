import Image from "next/image";
import Link from "next/link";
import { FaHome, FaUser, FaCog } from "react-icons/fa";
import { auth } from "~/auth";
import { SideBar } from "~/components/dashboard/sidebar";
const LandLordSideBar = async () => {
  const session = await auth();
  if (!session) return null;
  return (
    <div className="flex flex-col items-start bg-[#405189] px-0 md:px-4 ">
      <Link href="/" className="mt-4">
        <Image src="/logo.svg" alt="logo" width={80} height={80} />
      </Link>
      <SideBar role={session?.user.role} />
    </div>
  );
};

export default LandLordSideBar;
