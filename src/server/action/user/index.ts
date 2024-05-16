"use server";
import { auth } from "~/auth";
import prisma from "~/server/db";

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
 * Get User by email
 */
export const getUserById = async (id: string) => {
  if (!id) return { error: "User does not exists! " };
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  } catch (error) {
    return null;
  }
};
