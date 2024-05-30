import { FaRegHeart } from "react-icons/fa";
import { MdOutlineDashboard,MdOutlineAddToPhotos,MdOutlineRateReview } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { RiHome3Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
export const LandLordSideBarContents = [
  {
    title: "Dashboard",
    path: "/l-dashboard",
    icon: <MdOutlineDashboard />,
  },
  {
    title: "Message",
    path: "/l-dashboard/message",
    icon: <TiMessages />,
  },
  {
    title: "My Property",
    path: "/l-dashboard/my-property",
    icon: <RiHome3Line />,
  },
  {
    title: "Add Property",
    path: "/l-dashboard/add-property",
    icon: <MdOutlineAddToPhotos />,
  },
  {
    title: "My Favorites",
    path: "/l-dashboard/my-fav",
    icon: <FaRegHeart />,
  },
  {
    title: "Profile",
    path: "/l-dashboard/profile",
    icon: <CgProfile />,
  },
  {
    title: "Review",
    path: "/l-dashboard/review",
    icon: <MdOutlineRateReview />,
  },
];
