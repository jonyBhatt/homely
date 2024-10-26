"use server";
import { z } from "zod";
import { CurrentUser } from "~/lib/current-user";
import prisma from "~/server/db";
import { agencySchema } from "~/utils/validation";

export const createAgency = async (values: z.infer<typeof agencySchema>) => {
  const { user } = await CurrentUser();
  if (!user) return null;
  const fieldValues = agencySchema.safeParse(values);
  if (fieldValues.error) {
    return {
      error: fieldValues.error.message,
    };
  }
  try {
    await prisma.agency.create({
      data: {
        name: fieldValues.data.agencyname,
        email: fieldValues.data.email,
        phone: fieldValues.data.phone,
        address: fieldValues.data.address,
        image: fieldValues.data.image,
        landlord: {
          connect: {
            id: user.id,
          },
        },
      },
    });
    return {
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      error: error,
    };
  }
};
