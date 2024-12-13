import prisma from "~/server/db";
export default async function OwnerProfile({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  console.log(id);
  const landlord = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      name:true,
      image:true,
      agency: {
        include: {
          properties: true,
        },
      },
    },
  });
  return (
    <div className="flex min-h-screen items-center justify-center  p-4 mt-16">
      <div className="w-full max-w-3xl overflow-hidden rounded-xl bg-white shadow-lg">
        <div className="h-32 bg-gradient-to-r from-green-500 to-teal-500"></div>
        <div className="-mt-16 flex flex-col items-center">
          <img
            src={landlord?.image ?? ""}
            alt="Profile"
            className="h-32 w-32 rounded-full border-4 border-white shadow-md"
          />
          <h1 className="mt-4 text-xl font-bold text-gray-800">{landlord?.name}</h1>
          <p className="text-gray-500">Property Landlord</p>
        </div>
        <div className="p-6">
          <h2 className="mb-3 text-lg font-semibold text-gray-800">About Me</h2>
          <p className="mb-4 text-gray-600">
            Experienced landlord managing a diverse portfolio of properties.
            Dedicated to providing quality accommodations and excellent service
            to tenants.
          </p>
          <h2 className="mb-3 text-lg font-semibold text-gray-800">
            Properties
          </h2>
          <ul className="mb-4 text-gray-600">
            <li>🏠 3-bedroom apartment in downtown</li>
            <li>🏢 Office space in the business district</li>
            <li>🌴 Vacation home by the beach</li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <a
              href="#"
              className="rounded-lg bg-green-500 py-2 text-center text-white shadow-md hover:bg-green-600"
            >
              View Listings
            </a>
            <a
              href="#"
              className="rounded-lg bg-gray-800 py-2 text-center text-white shadow-md hover:bg-gray-900"
            >
              Contact Me
            </a>
            <a
              href="#"
              className="rounded-lg bg-teal-500 py-2 text-center text-white shadow-md hover:bg-teal-600"
            >
              Testimonials
            </a>
            <a
              href="#"
              className="rounded-lg bg-yellow-500 py-2 text-center text-white shadow-md hover:bg-yellow-600"
            >
              Rental Policies
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
