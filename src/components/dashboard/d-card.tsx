interface CardProps {
  title: string;
  description: string;
  icon: React.ReactElement;
}

export default function DCard({ title, description, icon }: CardProps) {
  return (
    <div className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-md">
      <div className="mb-4 text-4xl text-gray-700">{icon}</div>
      <h2 className="mb-2 text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
