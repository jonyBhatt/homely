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
