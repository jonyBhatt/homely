/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import type { Property } from "@prisma/client";
import prisma from "~/server/db";
import { propertySchema } from "~/utils/validation";
import * as z from "zod";
import { getCurrentUser } from "../user";
import { revalidatePath } from "next/cache";

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
export const addProperty = async (values: z.infer<typeof propertySchema>) => {
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
    category,
    city,
    description,
    garage,
    price,
    rooms,
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
        description,
        garage,
        price,
        rooms,
        size,
        title,
        country,
        image,
        state,
        userId: user.id,
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
        description: fieldValues.data.description,
        garage: fieldValues.data.garage,
        price: fieldValues.data.price,
        rooms: fieldValues.data.rooms,
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
    };
  } catch (error) {
    return null;
  }
};
