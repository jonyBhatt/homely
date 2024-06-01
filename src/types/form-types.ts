/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, UseFormReturn } from "react-hook-form";

type FormValues = {
  title: string;
  description: string;
  price: number;
  category: string;
  rooms: number;
  bedrooms: number;
  bathrooms: number;
  garage: number;
  size: number;
  address: string;
  city: string;
  zip: string;
  image?: string | undefined;
  state?: string | undefined;
  country?: string | undefined;
};

export type FormPropsTypes = UseFormReturn<FormValues, any, undefined>;

//   T,
//   any,
//   undefined
// >;

// export type FormPropsTypes = UseFormReturnType<FormType>;
