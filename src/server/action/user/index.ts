/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use server";
import { auth } from "~/auth";
import { CurrentUser } from "~/lib/current-user";
import prisma from "~/server/db";
import { LandlordApplicationData } from "~/types/lanlord-interface";

export const getCurrentUser = async () => {
  const getUser = await auth();
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: getUser?.user?.id,
      },
    });
    return user;
  } catch (error) {
    return null;
  }
};

/**
 * Get User by email
 */
export const getUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  } catch (error) {
    return null;
  }
};

/**
 * Get User by id
 */
export const getUserById = async (id: string) => {
  if (!id) return { error: "User does not exists! " };
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    return { user };
  } catch (error) {
    return null;
  }
};

/**
 * Get all users
 */
export const getUsers = async () => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });
    return {
      message: "Fetching users successfully",
      users,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};

/**
 * Landlord application
 */

export const applyLandlord = async (values: LandlordApplicationData) => {
  const user = await CurrentUser();
  try {
    await prisma.user.update({
      where: {
        id: user.user?.id,
      },
      data: {
        LandlordApplication: {
          create: {
            ...values,
          },
        },
      },
    });
    return {
      message: "Application submitted successfully",
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};

/**
 * Get Landlord
 */
export const getLandlord = async (id: string) => {
  try {
    const landlord = await prisma.landlordApplication.findUnique({
      where: {
        id,
      },
    });
    return {
      message: "Fetching landlord successfully",
      landlord,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};
/**
 * Update role as  Landlord
 */
export const updateRoleAsLandlord = async (id: string) => {
  try {
    const user = await prisma.landlordApplication.update({
      where: {
        id,
      },
      data: {
        user: {
          update: {
            role: "Landlord",
          },
        },
      },
    });
    return {
      message: "Role updated successfully",
      user,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};
