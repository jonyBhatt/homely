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
  price: z.string(),
  category: z.string(),

  rooms: z.string(),
  bedrooms: z.string(),
  bathrooms: z.string(),
  garage: z.string(),
  size: z.string(),

  image: z.string().optional(),

  address: z.string().min(1, { message: "Address is required" }),
  city: z.string().min(1, { message: "City is required" }),
  // zip: z.string().min(1, { message: "Zip is required" }),
  state: z.string().optional(),
  country: z.string().optional(),
});

export const scheduleSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  date: z.string(),
});

export const agencySchema = z.object({
  agencyname: z
    .string()
    .min(2, {
      message: "Agency name must be at least 2 characters.",
    })
    .max(50, { message: "Agency name should not exit 50 character" }),

  address: z.string().min(1, { message: "Address required" }),
  email: z
    .string()
    .email({ message: "Give a valid email!" })
    .refine(
      (email) => {
        return email.endsWith("@company.com");
      },
      {
        message: "Email must be from the domain @company.com",
      },
    ),

  image: z.string().optional(),
  phone: z.string().regex(/^(\+8801(7|6)\d{8})$/, {
    message:
      "Phone number must start with +880 and contain 11 digits with 017 or 016 after +880",
  }),
});
