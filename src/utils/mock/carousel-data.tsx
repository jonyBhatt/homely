import { Building2, Home } from "lucide-react";
import { RiHomeOfficeLine } from "react-icons/ri";
import { MdOutlineVilla, MdOutlineMapsHomeWork } from "react-icons/md";
import { SiBandsintown } from "react-icons/si";
import { TbHome } from "react-icons/tb";
export const cData = [
  {
    id: 1,
    icon: (
      <Home className="transition-colors  duration-150 ease-linear  group-hover:text-white" />
    ),
    title: "Home",
    subtitle: "22 Properties",
  },
  {
    id: 2,
    icon: (
      <Building2 className="transition-colors  duration-150 ease-linear  group-hover:text-white" />
    ),
    title: "Apartments",
    subtitle: "30 Properties",
  },
  {
    id: 3,
    icon: (
      <RiHomeOfficeLine className="h-6 w-6  transition-colors  duration-150 ease-linear  group-hover:text-white" />
    ),
    title: "Office",
    subtitle: "13 Properties",
  },
  {
    id: 4,
    icon: (
      <MdOutlineVilla className="h-6 w-6 transition-colors  duration-150 ease-linear  group-hover:text-white" />
    ),
    title: "Villa",
    subtitle: "10 Properties",
  },
  {
    id: 5,
    icon: (
      <SiBandsintown className="h-6 w-6 transition-colors  duration-150 ease-linear  group-hover:text-white" />
    ),
    title: "Town Home",
    subtitle: "21 Properties",
  },
  {
    id: 6,
    icon: (
      <TbHome className="h-6 w-6 transition-colors  duration-150 ease-linear  group-hover:text-white" />
    ),
    title: "Banglow",
    subtitle: "4 Properties",
  },
  {
    id: 7,
    icon: (
      <MdOutlineMapsHomeWork className="h-6 w-6 transition-colors  duration-150 ease-linear  group-hover:text-white" />
    ),
    title: "Loft",
    subtitle: "4 Properties",
  },
];
