"use server";
import { revalidatePath } from "next/cache";
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

export const DeleteAgency = async (id: string) => {
  try {
    await prisma.agency.delete({
      where: {
        id,
      },
    });

    revalidatePath("landlord-dashboard/agency");
    return {
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      error: error,
      success: false,
    };
  }
};

export const ReviewAgency = async (
  rating: number,
  comment: string,
  id: string,
) => {
  const { user } = await CurrentUser();
  if (!user) return null;

  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    await prisma.review.create({
      data: {
        rating: Number(rating),
        comment: comment,
        user: {
          connect: {
            id: user.id,
          },
        },
        agency: {
          connect: {
            id,
          },
        },
      },
    });

    return {
      success: true,
      message: "Thanks for reviewed agency",
    };
  } catch (error) {
    console.log(error);
    return {
      error: error,
    };
  }
};
