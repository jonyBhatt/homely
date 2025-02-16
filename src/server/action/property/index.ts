/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import type { Property } from "@prisma/client";
import { revalidatePath } from "next/cache";
import * as z from "zod";
import prisma from "~/server/db";
import { propertySchema, scheduleSchema } from "~/utils/validation";
import { getCurrentUser } from "../user";
import { auth } from "~/auth";
import { CurrentUser } from "~/lib/current-user";
import { connect } from "http2";

export const getProperties = async (): Promise<Property[] | { error: any }> => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const properties = await prisma.property.findMany();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return properties;
  } catch (error) {
    console.log(error);
    return {
      error: error,
    };
  }
};

// Add property to database
export const addProperty = async (
  values: z.infer<typeof propertySchema>,
  id?: string,
) => {
  const user = await getCurrentUser();
  if (!user?.id) {
    return null;
  }
  const fieldValues = propertySchema.safeParse(values);

  if (fieldValues.error) {
    return {
      error: fieldValues.error.message,
    };
  }
  const {
    address,
    bathrooms,
    bedrooms,
    dining,
    kitchen,
    category,
    city,
    garage,
    price,
    size,
    title,
    country,
    image,
    state,
  } = fieldValues.data;

  try {
    await prisma.property.create({
      data: {
        address,
        bathrooms,
        bedrooms,
        category,
        city,
        dining,
        kitchen,
        garage,
        price,
        size,
        title,
        country,
        image,
        state,
        ...(id ? { agency: { connect: { id } } } : {}),
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
    null;
  }
};

// Delete properties form database

export const deleteProperty = async (id: string) => {
  try {
    await prisma.property.delete({
      where: {
        id,
      },
    });
    return {
      success: true,
      message: "Delete",
    };
  } catch (error) {
    console.log(error);
    null;
  }
};

// Update property
export const updateProperty = async (
  id: string,
  values: z.infer<typeof propertySchema>,
) => {
  const fieldValues = propertySchema.safeParse(values);

  if (fieldValues.error) {
    return {
      error: fieldValues.error.message,
    };
  }

  try {
    await prisma.property.update({
      where: {
        id,
      },
      data: {
        address: fieldValues.data.address,
        bathrooms: fieldValues.data.bathrooms,
        bedrooms: fieldValues.data.bedrooms,
        category: fieldValues.data.category,
        city: fieldValues.data.city,
        dining: fieldValues.data.dining,
        kitchen: fieldValues.data.kitchen,
        garage: fieldValues.data.garage,
        price: fieldValues.data.price,
        size: fieldValues.data.size,
        title: fieldValues.data.title,
        country: fieldValues.data.country,
        image: fieldValues.data.image,
        state: fieldValues.data.state,
      },
    });
    revalidatePath("/l-dashboard/my-property");
    return {
      success: true,
      message: "Update successful!",
    };
  } catch (error) {
    return null;
  }
};

// get properties by id
export const getPropById = async (id: string) => {
  if (!id) return { error: "Property does not exists! " };
  try {
    const property = await prisma.property.findUnique({
      where: {
        id,
      },
      include: {
        agency: true,
      },
    });
    return { property };
  } catch (error) {
    return null;
  }
};

// Schedule
export const makeSchedule = async (
  id: string,
  values: z.infer<typeof scheduleSchema>,
) => {
  const fieldValues = scheduleSchema.safeParse(values);
  const { user } = await CurrentUser();
  if (!user) return null;
  if (fieldValues.error) {
    return {
      error: fieldValues.error.message,
    };
  }
  try {
    await prisma.schedule.create({
      data: {
        propertyId: id,
        username: values.username,
        email: values.email,
        date: values.date,
        userId: user.id,
      },
    });
    return {
      success: true,
    };
  } catch (error) {
    return null;
  }
};

/**
 * Get Schedule when approve false
 */
export const getSchedule = async () => {
  try {
    const schedule = await prisma.schedule.findMany({
      where: {
        approved: false,
      },
    });
    return { message: "Fetched Successfully", schedule };
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getAllScheduleByUser = async () => {
  const { user } = await CurrentUser();
  if (!user) return null;

  try {
    const schedule = await prisma.schedule.findMany({
      where: {
        userId: user.id,
      },
      include: {
        property: {
          select: {
            title: true,
            image: true,
          },
        },
      },
    });
    return { message: "Fetched Successfully", schedule };
  } catch (error) {
    console.log(error);
    return null;
  }
};

/**
 *  Get  Schedule By Property Property
 */

/**
 * Approve Schedule
 */
export const approveSchedule = async (scheduleId: string) => {
  try {
    const schedule = await prisma.schedule.update({
      where: {
        id: scheduleId,
      },
      data: {
        approved: true,
      },
    });

    revalidatePath("/landlord-dashboard/schedule");

    return {
      message: "Schedule Approved Successfully",
      schedule,
    };
  } catch (err) {
    console.log(err);
    return null;
  }
};

/**
 * Delete Schedule
 */
export const deleteSchedule = async (scheduleId: string) => {
  try {
    await prisma.schedule.delete({
      where: {
        id: scheduleId,
      },
    });
    revalidatePath("/landlord-dashboard/schedule");
    return {
      message: "Schedule Deleted Successfully",
    };
  } catch (err) {
    console.log(err);
    return null;
  }
};

//Wish List
export const wishList = async (propId: string, userId: string) => {
  try {
    await prisma.wishList.create({
      data: {
        propertyId: propId,
        userId: userId,
      },
    });
    return {
      success: true,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};

// Get Wish List
export const getWishList = async () => {
  const session = await auth();
  if (!session || !session.user) return null;
  try {
    const wishList = await prisma.wishList.findMany({
      where: {
        userId: session.user.id,
      },
      include: {
        property: true,
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return wishList;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getAllPropertiesByAgencyAndOwner = async () => {
  try {
    const property = await prisma.property.findMany({
      select: {
        title: true,
        agency: {
          select: {
            name: true,
            landlord: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
    return {
      message: "Fetched",
      property,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};
