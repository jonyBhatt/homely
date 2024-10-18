import { redirect } from "next/navigation";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { RiHome3Line } from "react-icons/ri";
import { auth } from "~/auth";
import DCard from "~/components/dashboard/d-card";

export default async function AgentDashboard() {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }
  const cards = [
    { icon: <RiHome3Line />, title: "All Properties", description: "583" },
    {
      icon: <CgProfile />,
      title: "Total Views",
      description: "192",
    },
    {
      icon: <MdOutlineRateReview />,
      title: "Total Visitor Reviews",
      description: "438",
    },
    {
      icon: <FaRegHeart />,
      title: "Total Favorites",
      description: "67",
    },
  ];
  return (
    <div className="container mx-auto py-16 ">
      <div className="flex flex-col gap-0.5">
        <span className="text-2xl font-semibold">
          Howdy, {session.user.name}
        </span>
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
