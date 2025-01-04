"use client";

import { UserRole } from "@prisma/client";
import { useEffect, useState } from "react";
import { FaEye, FaTrash, FaUserEdit } from "react-icons/fa";
import { toast } from "sonner";
import { getUsers } from "~/server/action/user";

const mockApplications = [
  {
    id: 1,
    agentName: "Alice Johnson",
    status: "Pending",
    email: "alice@example.com",
  },
  {
    id: 2,
    agentName: "Bob Williams",
    status: "Approved",
    email: "bob@example.com",
  },
  {
    id: 3,
    agentName: "Charlie Adams",
    status: "Rejected",
    email: "charlie@example.com",
  },
];

interface IUsers {
  id: string;
  name: string | null;
  email: string | null;
  role: UserRole;
}

export default function Admin() {
  const [users, setUsers] = useState<IUsers[]>([]);
  const [applications, setApplications] = useState(mockApplications);
  const [userSearch, setUserSearch] = useState("");
  const [applicationSearch, setApplicationSearch] = useState("");

  useEffect(() => {
    toast.promise(getUsers, {
      loading: "Loading...",
      success: (data) => {
        setUsers(data?.users ?? []);
        return `${data?.message}`;
      },
      error: "Error",
    });
  }, []);

  const handleDeleteUser = (id: string) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleViewApplication = (id: number) => {
    const application = applications.find((app) => app.id === id);
    if (application) {
      alert(
        `Agent Name: ${application.agentName}\nStatus: ${application.status}\nEmail: ${application.email}`,
      );
    }
  };
  const filteredUsers = users.filter(
    (user) =>
      (user.name?.toLowerCase().includes(userSearch.toLowerCase()) ?? false) ||
      user.email?.toLowerCase().includes(userSearch.toLowerCase()),
  );

  const filteredApplications = applications.filter(
    (application) =>
      application.agentName
        .toLowerCase()
        .includes(applicationSearch.toLowerCase()) ||
      application.email.toLowerCase().includes(applicationSearch.toLowerCase()),
  );
  return (
    <>
      <div
        id="manage-users"
        className="mb-8 overflow-auto rounded-lg bg-white p-6 shadow"
      >
        <h2 className="mb-4 text-xl font-semibold">Manage Users</h2>
        <input
          type="text"
          placeholder="Search users..."
          className="mb-4 w-full rounded-lg border border-gray-300 p-2"
          value={userSearch}
          onChange={(e) => setUserSearch(e.target.value)}
        />
        <table className="w-full  border-collapse overflow-x-auto border border-gray-200">
          <thead className="w-full">
            <tr className="flex w-full justify-between bg-gray-100">
              <th className="w-[5%] border  border-gray-200 p-2 text-center ">
                ID
              </th>
              <th className="w-[15%] border border-gray-200 p-2 text-center ">
                Name
              </th>
              <th className=" w-[30%] border border-gray-200 p-2 text-center">
                Email
              </th>
              <th className=" w-[10%] border border-gray-200 p-2 text-center">
                Role
              </th>
              <th className=" border border-gray-200 p-2 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="w-full">
            {filteredUsers.map((user) => (
              <tr
                key={user.id}
                className="flex w-full items-center justify-between hover:bg-gray-50"
              >
                <td className="w-[5%] border border-gray-200 p-2 text-center text-xs">
                  {user.id.slice(0, 3)}...
                </td>
                <td className="w-[15%] border border-gray-200 p-2 text-center">
                  {user.name}
                </td>
                <td className="w-[30%] border border-gray-200 p-2 text-center">
                  {user.email}
                </td>
                <td className="w-[10%] border border-gray-200 p-2 text-center">
                  {user.role}
                </td>
                <td className="w-[7%] border border-gray-200 p-2 text-center">
                  <button
                    className="mx-1 text-red-500 hover:text-red-700"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    <FaTrash />
                  </button>
                  <button className="mx-1 text-blue-500 hover:text-blue-700">
                    <FaUserEdit />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* View Agent Applications Section */}
      <div
        id="view-applications"
        className="overflow-auto rounded-lg bg-white p-6 shadow"
      >
        <h2 className="mb-4 text-xl font-semibold">View Agent Applications</h2>
        <input
          type="text"
          placeholder="Search applications..."
          className="mb-4 w-full rounded-lg border border-gray-300 p-2"
          value={applicationSearch}
          onChange={(e) => setApplicationSearch(e.target.value)}
        />
        <table className="w-full table-auto border-collapse border border-gray-200">
          <thead className="w-full">
            <tr className="flex w-full justify-between bg-gray-100">
              <th className="w-[5%] border  border-gray-200 p-2 text-center ">
                ID
              </th>
              <th className="w-[30%] border border-gray-200 p-2 text-center">
                Agent Name
              </th>
              <th className="w-[15%] border border-gray-200 p-2 text-center">
                Status
              </th>
              <th className="w-[30%] border border-gray-200 p-2 text-center">
                Email
              </th>
              <th className="border border-gray-200 p-2 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="w-full">
            {filteredApplications.map((application) => (
              <tr
                key={application.id}
                className="flex w-full justify-between hover:bg-gray-50"
              >
                <td className="w-[5%] border border-gray-200 p-2 text-center">
                  {application.id}
                </td>
                <td className="w-[30%] border border-gray-200 p-2 text-center">
                  {application.agentName}
                </td>
                <td className="w-[15%] border border-gray-200 p-2 text-center">
                  {application.status}
                </td>
                <td className="w-[30%] border border-gray-200 p-2 text-center">
                  {application.email}
                </td>
                <td className="w-[7%]  border border-gray-200 p-2 text-center">
                  <button
                    className="mx-1 text-blue-500 hover:text-blue-700"
                    onClick={() => handleViewApplication(application.id)}
                  >
                    <FaEye />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

{
  /**
  <div
        id="manage-users"
        className="mb-8 overflow-auto rounded-lg bg-white p-6 shadow"
      >
        <h2 className="mb-4 text-xl font-semibold">Manage Users</h2>
        <input
          type="text"
          placeholder="Search users..."
          className="mb-4 w-full rounded-lg border border-gray-300 p-2"
          value={userSearch}
          onChange={(e) => setUserSearch(e.target.value)}
        />
        <table className="w-full table-auto border-collapse border border-gray-200">
          <thead className="w-full">
            <tr className="flex w-full items-center justify-between gap-5">
              <th className="border border-gray-200 p-2 text-left">ID</th>
              <th className="border border-gray-200 p-2 text-left">Name</th>
              <th className="border border-gray-200 p-2 text-left">Email</th>
              <th className="border border-gray-200 p-2 text-left">Role</th>
              <th className="border border-gray-200 p-2 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="mt-4 flex flex-col gap-5">
            {filteredUsers.map((user) => (
              <tr
                key={user.id}
                className="flex w-full items-center justify-between gap-5 hover:bg-gray-50"
              >
                <td className="border border-gray-200 p-2">{user.id}</td>
                <td className="border border-gray-200 p-2">{user.name}</td>
                <td className="border border-gray-200 p-2">{user.email}</td>
                <td className="border border-gray-200 p-2">{user.role}</td>
                <td className="border border-gray-200 p-2 text-center">
                  <button
                    className="mx-1 text-red-500 hover:text-red-700"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    <FaTrash />
                  </button>
                  <button className="mx-1 text-blue-500 hover:text-blue-700">
                    <FaUserEdit />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  */
}
