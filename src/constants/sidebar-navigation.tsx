import { FaRegHeart } from "react-icons/fa";
import {
  MdOutlineDashboard,
  MdOutlineAddToPhotos,
  MdOutlineRateReview,
  MdOutlineHomeWork,
} from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { RiHome3Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { TbBrandBooking } from "react-icons/tb";

export const AgentSideBarContents = [
  {
    title: "Dashboard",
    path: "/agent-dashboard",
    icon: <MdOutlineDashboard />,
  },
  {
    title: "Bookings",
    path: "/agent-dashboard/message",
    icon: <TbBrandBooking />,
  },
  {
    title: "My Property",
    path: "/agent-dashboard/my-property",
    icon: <RiHome3Line />,
  },
  {
    title: "Add Property",
    path: "/agent-dashboard/add-property",
    icon: <MdOutlineAddToPhotos />,
  },
  {
    title: "My Favorites",
    path: "/agent-dashboard/my-fav",
    icon: <FaRegHeart />,
  },
  {
    title: "Profile",
    path: "/agent-dashboard/profile",
    icon: <CgProfile />,
  },
  {
    title: "Review",
    path: "/agent-dashboard/review",
    icon: <MdOutlineRateReview />,
  },
];

export const LandlordSideBarContents = [
  {
    title: "Dashboard",
    path: "/landlord-dashboard",
    icon: <MdOutlineDashboard />,
  },
  {
    title: "Bookings",
    path: "/landlord-dashboard/message",
    icon: <TbBrandBooking />,
  },
  {
    title: "My Property",
    path: "/landlord-dashboard/my-property",
    icon: <RiHome3Line />,
  },
  {
    title: "My Agency",
    path: "/landlord-dashboard/agency",
    icon: <MdOutlineHomeWork />,
  },
  // {
  //   title: "Add Property",
  //   path: "/landlord-dashboard/add-property",
  //   icon: <MdOutlineAddToPhotos />,
  // },
  // {
  //   title: "My Favorites",
  //   path: "/landlord-dashboard/my-fav",
  //   icon: <FaRegHeart />,
  // },
  {
    title: "Profile",
    path: "/landlord-dashboard/profile",
    icon: <CgProfile />,
  },
  {
    title: "Review",
    path: "/landlord-dashboard/review",
    icon: <MdOutlineRateReview />,
  },
];
