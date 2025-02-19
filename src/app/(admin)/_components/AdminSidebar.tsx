"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { CiLogout } from "react-icons/ci";
import { FaFileAlt, FaUsers } from "react-icons/fa";


export const AdminSidebar = () => {
  const logOut = async () => {
    await signOut();
  };
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
              href="/admin/landlords"
              className="flex items-center space-x-2 hover:text-gray-300"
            >
              <FaFileAlt className="text-4xl md:text-xl" />
              <span className="hidden md:block">Landlords</span>
            </Link>
          </li>
          <li
            className="group my-4 flex w-full cursor-pointer items-center rounded-lg py-2 transition-colors duration-100 ease-in-out hover:bg-muted"
            onClick={logOut}
          >
            <span className="text-2xl group-hover:text-primary">
              <CiLogout />
            </span>
            <span className="ml-3 hidden group-hover:text-primary lg:inline-block">
              Log out
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};
