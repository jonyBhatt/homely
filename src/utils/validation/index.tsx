import * as z from "zod";

export const signInSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(4, "Password must be more than 4 characters")
    .max(32, "Password must be less than 32 characters"),
});

export const signUpSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(4, "Password must be more than 4 characters")
    .max(32, "Password must be less than 32 characters"),
  fullName: z.string().min(1, {
    message: "Full name required!.",
  }),
});

export const propertySchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  price: z.number().min(1, { message: "Price is required" }),
  category: z.string().min(1, { message: "Category is required" }),

  rooms: z.number().min(1, { message: "Bedrooms is required" }),
  bedrooms: z.number().min(1, { message: "Bedrooms is required" }),
  bathrooms: z.number().min(1, { message: "Bathrooms is required" }),
  garage: z.number().min(1, { message: "Bathrooms is required" }),
  size: z.number().min(1, { message: "Size is required" }),

  image: z.string().optional(),

  address: z.string().min(1, { message: "Address is required" }),
  city: z.string().min(1, { message: "City is required" }),
  zip: z.string().min(1, { message: "Zip is required" }),
  state: z.string().optional(),
  country: z.string().optional(),
});
