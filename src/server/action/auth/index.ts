"use server";
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import prisma from "~/server/db";
import type * as z from "zod";
import bcrypt from "bcryptjs";
import { signUpSchema } from "~/utils/validation";

export const Register = async (values: z.infer<typeof signUpSchema>) => {
  const validateFields = signUpSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields" };
  }

  const { fullName, email, password } = validateFields.data;

  const genSalt = await bcrypt.genSalt(10);
  const hashPass = await bcrypt.hash(password, genSalt);

  /**
   * Find Existing User
   */
  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) return { error: "User already exists!" };

  try {
    await prisma.user.create({
      data: {
        name: fullName,
        email,
        password: hashPass,
      },
    });
    return {
      message: "User Created",
    };
  } catch (error) {
    return null;
  }
};
