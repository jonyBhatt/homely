import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

function Profile({ params }: { params: { id: string } }) {
  const { id } = params;
  console.log(id);
  return (
    <div className="container mx-auto py-32">
      <div className="mb-6 flex flex-col items-center justify-between rounded-xl bg-gray-800 p-6 text-white lg:flex-row lg:items-start lg:p-8">
        <div className="flex items-center">
          {/* Logo */}
          <div className="mr-4  flex-shrink-0 ">
            <Avatar>
              <AvatarImage />
              <AvatarFallback className="text-black">RJ</AvatarFallback>
            </Avatar>
          </div>
          {/* Name and Member info */}
          <div>
            <h2 className="text-3xl font-bold">RealAr</h2>
            <p className="text-gray-300">Member since 6 months ago</p>
          </div>
        </div>
        {/* Ratings and Reviews */}
        <div className="mt-4 flex items-center space-x-4 lg:mt-0 lg:flex-col lg:items-end lg:space-x-0 lg:text-right">
          <div className="flex items-center">
            <span className="text-xl font-semibold">4.3</span>
            <span className="ml-1 text-yellow-500">★</span>
          </div>
          <div className="text-gray-300">
            <p>3 Reviews</p>
            <p>4 Listings</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* About Section */}
        <div className="rounded-xl bg-gray-800 p-6 text-white lg:p-8">
          <h3 className="mb-4 flex items-center text-2xl font-semibold">
            <span className="mr-2">👤</span> About
          </h3>
          <p className="leading-relaxed text-gray-300">
            Welcome to our stylish and spacious property. This gem offers a
            modern and comfortable retreat for up to four guests. Upon entering,
            you&apos;ll be greeted by a tastefully furnished living room,
            featuring a cozy sofa, a large TV, and a dining area with seating
            for four.
            <br />
            <br />
            At REALAR, we believe in more than just building houses; we
            construct dreams. With a legacy of excellence spanning over [number]
            years, we have proudly served the [location/region] community,
            turning aspirations into concrete realities.
            <br />
            <br />
            Founded on the principles of integrity, innovation, and dedication,
            REALAR emerged from humble beginnings.
          </p>
        </div>

        {/* Contact Info Section */}
        <div className="rounded-xl bg-gray-800 p-6 text-white lg:p-8">
          <h3 className="mb-4 flex items-center text-2xl font-semibold">
            <span className="mr-2">📞</span> Contact Info
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <span className="font-semibold">Location:</span> Brooklyn, New
              York 11233, United States
            </li>
            <li>
              <span className="font-semibold">Phone:</span> 0123456789
            </li>
            <li>
              <span className="font-semibold">Email:</span> themeholy@gmail.com
            </li>
            <li>
              <span className="font-semibold">Website:</span>
              <a
                href="https://wordpress.themeholy.com/realar"
                className="text-blue-400 underline"
              >
                https://wordpress.themeholy.com/realar
              </a>
            </li>
          </ul>

          {/* Social Links */}
          <div className="mt-6 flex space-x-4">
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-600"
            >
              <span className="text-white">F</span>
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-600"
            >
              <span className="text-white">X</span>
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-600"
            >
              <span className="text-white">L</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
