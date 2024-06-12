"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { categoryItems } from "~/constants/category-items";
import { cn } from "~/lib/utils";

export const ListCategory = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.get("filter");

  const createQuery = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );

  return (
    <div className="no-scrollbar mt-5 flex w-full justify-center gap-x-10 overflow-x-scroll">
      {categoryItems.map((cat) => (
        <Link
          key={cat.id}
          href={pathname + "?" + createQuery("filter", cat.name)}
          className={cn(
            search === cat.name
              ? "flex-shrink-0 border-b-2 border-black pb-2"
              : "flex-shrink-0 opacity-70",
            "flex flex-col items-center gap-y-4",
          )}
        >
          <div className="relative h-6 w-6">
            <Image
              src={cat.imageUrl}
              alt={cat.title}
              className="h-6 w-6"
              width={24}
              height={24}
            />
          </div>
          <p className="text-xs font-medium">{cat.title}</p>
        </Link>
      ))}
    </div>
  );
};
