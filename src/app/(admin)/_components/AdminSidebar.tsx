import Link from "next/link";
import { FaFileAlt, FaUsers } from "react-icons/fa";

export const AdminSidebar = () => {
  return (
    <div className="flex w-48 flex-col items-center bg-gray-800 p-6 text-white md:w-80 md:items-start">
      <h1 className="mb-6  text-2xl font-bold">Admin Dashboard</h1>
      <nav className="w-full">
        <ul className="w-full">
          <li className="mb-4 flex items-center justify-start md:justify-start">
            <Link
              href="/manage-users"
              className="flex items-center space-x-2 hover:text-gray-300"
            >
              <FaUsers className="text-4xl md:text-xl" />
              <span className="hidden md:block">Manage Users</span>
            </Link>
          </li>
          <li className="flex items-center justify-start md:justify-start">
            <Link
              href="/view-applications"
              className="flex items-center space-x-2 hover:text-gray-300"
            >
              <FaFileAlt className="text-4xl md:text-xl" />
              <span className="hidden md:block">View Agent Applications</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
