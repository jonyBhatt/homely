"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

import { Button } from "~/components/ui/button";
import { Form } from "~/components/ui/form";

import { propertySchema } from "~/utils/validation";
import DescriptionForm from "./description-form";
import LocationForm from "./location-form";
import DetailsForm from "./details-form";
import MediaUploadForm from "./media";
import { addProperty } from "~/server/action/property";

interface ActiveForm {
  activeForm: string;
}

export const PropertyForm = ({ activeForm }: ActiveForm) => {
  const form = useForm<z.infer<typeof propertySchema>>({
    resolver: zodResolver(propertySchema),
    defaultValues: {
      title: "",
      description: "",
      price: "",
      category: "",
      bedrooms: "",
      bathrooms: "",
      image: "",
      address: "",
      city: "",
      country: "Bangladesh",
      garage: "",
      rooms: "",
      size: "",
      state: "",
      // zip: "",
    },
  });

  async function onSubmit(values: z.infer<typeof propertySchema>) {
    console.log(values);
    try {
      const res = await addProperty(values);
      if (res?.error) {
        toast.error("Something went wrong!");
      } else {
        toast.success("Property added successfully");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {activeForm === "description" && <DescriptionForm form={form} />}
        {activeForm === "location" && <LocationForm form={form} />}
        {activeForm === "detail" && <DetailsForm form={form} />}
        {activeForm === "media" && <MediaUploadForm form={form} />}
        {activeForm === "detail" && (
          <Button type="submit" className="w-full">
            Add Property
          </Button>
        )}
      </form>
    </Form>
  );
};
