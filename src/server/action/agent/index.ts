"use server";

import { z } from "zod";
import { CurrentUser } from "~/lib/current-user";
import { agentFormSchema } from "~/utils/validation";

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
    await prisma?.agentApplication.create({
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
