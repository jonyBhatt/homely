"use client";

import { useState } from "react";
import { BRSSearch } from "./search";
import { SlidersHorizontal } from "lucide-react";

export const SearchFilter = () => {
  const [active, setActive] = useState("buy");
  return (
    <div className=" mt-0 py-4 lg:mt-16">
      <div className="w-2/3  rounded-tl-2xl rounded-tr-2xl bg-white p-4 lg:w-1/4">
        <div className="flex w-full items-center gap-10">
          <p
            className={`w-1/2 cursor-pointer ${active === "buy" ? "border-b-2" : ""}  border-b-black pb-4 font-medium`}
            onClick={() => setActive("buy")}
          >
            Buy
          </p>
          <p
            className={` ${active === "rent" ? "border-b-2" : ""}  w-1/2 cursor-pointer  border-b-black pb-4 font-medium`}
            onClick={() => setActive("rent")}
          >
            Rent
          </p>
          <p
            className={` ${active === "sell" ? "border-b-2" : ""}  w-1/2 cursor-pointer  border-b-black pb-4 font-medium`}
            onClick={() => setActive("sell")}
          >
            Sell
          </p>
        </div>
      </div>
      <div className="flex w-full  items-center justify-between rounded-bl-2xl rounded-br-2xl rounded-tr-2xl bg-white p-8">
        {active === "buy" && (
          <div className="md:w-5/6 w-full">
            <BRSSearch text="buy" />
          </div>
        )}
        {active === "rent" && (
          <div className="w-full">
            <BRSSearch text="rent" />
          </div>
        )}
        {active === "sell" && (
          <div className="w-full">
            <BRSSearch text="sell" />
          </div>
        )}
        <div className="flex cursor-pointer items-center gap-4">
          <SlidersHorizontal className="h-4 w-4" />
          <p className="font-medium">Advanced</p>
        </div>
      </div>
    </div>
  );
};
