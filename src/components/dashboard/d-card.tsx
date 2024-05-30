import { cn } from "~/lib/utils";

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactElement;
  className?: string;
}

export default function DCard({
  title,
  description,
  icon,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        ` flex flex-col items-center gap-4 rounded-lg bg-white p-6 shadow-md md:flex-row `,
        className,
      )}
    >
      <div className="mb-4 text-4xl text-gray-700">{icon}</div>
      <div className="flex flex-col items-center md:items-start">
        <span className=" text-sm font-light">{title}</span>
        <p className="text-center text-3xl font-bold text-gray-800 md:text-start">
          {description}
        </p>
      </div>
    </div>
  );
}
