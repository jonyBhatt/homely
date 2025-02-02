/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, UseFormReturn } from "react-hook-form";

type FormValues = {
  title: string;
  price: string;
  category: string;
  bedrooms: string;
  bathrooms: string;
  garage: string;
  dining: string;
  kitchen: string;
  size: string;
  address: string;
  city: string;
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
