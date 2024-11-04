import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const SpecificationsSkeleton = () => {
  return (
    <div className="p-10 rounded-xl border shadow-md mt-7">
      <Skeleton className="h-6 w-1/4 mb-4 rounded" />{" "}
      {/* "Specifications" title */}
      {/* Map over a dummy array to generate skeletons for each specification */}
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="mt-5 flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <Skeleton className="h-6 w-6 rounded-full" />{" "}
            {/* Icon skeleton */}
            <Skeleton className="h-6 w-24 rounded" /> {/* Label skeleton */}
          </div>
          <Skeleton className="h-6 w-12 rounded" /> {/* Value skeleton */}
        </div>
      ))}
    </div>
  );
};

export default SpecificationsSkeleton;
