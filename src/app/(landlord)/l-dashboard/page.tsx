import { FaCog, FaHome } from "react-icons/fa";
import { FaChartBar, FaUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineDashboard,MdOutlineAddToPhotos,MdOutlineRateReview } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { RiHome3Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import DCard from "~/components/dashboard/d-card";

export default async function LandlordDashboard() {
  const cards = [
    { icon: <RiHome3Line />, title: "All Properties", description: "583" },
    {
      icon: <CgProfile/>,
      title: "Total Views",
      description: "192",
    },
    {
      icon: <MdOutlineRateReview/>,
      title: "Total Visitor Reviews",
      description: "438",
    },
    {
      icon: <FaRegHeart/>,
      title: "Total Favorites",
      description: "67",
    },
  ];
  return (
    <div className="container mx-auto py-16 ">
      <div className="flex flex-col gap-0.5">
        <span className="text-2xl font-semibold">Howdy, John</span>
        <p className="text-sm tracking-tight text-muted-foreground">
          We are glad to see you again!
        </p>
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, index) => (
          <DCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}
