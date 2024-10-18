"use client";

import { useState } from "react";

import { PropertyForm } from "./add-property-form/form";

export const FormSection = () => {
  const [activeFrom, setActiveFrom] = useState("description");

  return (
    <div className="">
      <div className="rounded-lg bg-gray-100 p-5 ">
        <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3  md:grid-cols-4">
          <div onClick={() => setActiveFrom("description")}>
            <span
              className={`cursor-pointer text-sm font-semibold text-muted-foreground ${activeFrom === "description" ? "border-b-2 border-b-primary pb-2 text-primary" : ""}`}
            >
              1.Description
            </span>
          </div>
          <div onClick={() => setActiveFrom("media")}>
            <span
              className={`cursor-pointer text-sm font-semibold text-muted-foreground ${activeFrom === "media" ? "border-b-2 border-b-primary pb-2 text-primary" : ""}`}
            >
              2.Media
            </span>
          </div>
          <div onClick={() => setActiveFrom("location")}>
            <span
              className={`cursor-pointer text-sm font-semibold text-muted-foreground ${activeFrom === "location" ? "border-b-2 border-b-primary pb-2 text-primary" : ""}`}
            >
              3.Location
            </span>
          </div>
          <div onClick={() => setActiveFrom("detail")}>
            <span
              className={`cursor-pointer text-sm font-semibold text-muted-foreground ${activeFrom === "detail" ? "border-b-2 border-b-primary pb-2 text-primary" : ""}`}
            >
              4.Details
            </span>
          </div>
        </div>
      </div>
      <div className="px-2 py-6 md:px-8 ">
        <PropertyForm activeForm={activeFrom} />

        {/* {activeFrom === "description" && <Description />}
        {activeFrom === "media" && <Media />}
        {activeFrom === "location" && <Location />}
        {activeFrom === "detail" && <Detail />} */}
        {/* {activeFrom === "description" && <p>Description</p>} */}
      </div>
    </div>
  );
};

/**
 * 
 * field: ControllerRenderProps<{
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
    state: string;
    zip: string;
    country: string;
    image?: string | undefined;
}, "title">

 */
