"use server";

import { z } from "zod";
import { CurrentUser } from "~/lib/current-user";
import { agentFormSchema } from "~/utils/validation";
import prisma from "~/server/db";
import { revalidatePath } from "next/cache";

export const agentForm = async (values: z.infer<typeof agentFormSchema>) => {
  const { user } = await CurrentUser();
  if (!user) return null;
  const fieldValues = agentFormSchema.safeParse(values);
  if (fieldValues.error) {
    return {
      error: fieldValues.error.message,
    };
  }

  try {
    await prisma.agentApplication.create({
      data: {
        title: fieldValues.data.title,
        description: fieldValues.data.description,
        cv: fieldValues.data.cv,
        user: {
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

// Get agent application

export const getAgentApplications = async () => {
  try {
    const application = await prisma.agentApplication.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });
    return {
      message: "Successfully fetched",
      application,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};

// Get single  agent application'
export const getSingleAgentApplication = async (id: string) => {
  try {
    const application = await prisma.agentApplication.findUnique({
      where: {
        id,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });
    return {
      message: "Successfully fetched",
      application,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};

// Update agent application
export const publishAgentApplication = async (id: string) => {
  try {
    await prisma.agentApplication.update({
      where: {
        id,
      },
      data: {
        published: true,
        status:"APPROVED",
        user: {
          update: {
            role: "Agent",
          },
        },
      },
    });
    revalidatePath('/admin')
    return {
      message: "Successfully published",
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};
