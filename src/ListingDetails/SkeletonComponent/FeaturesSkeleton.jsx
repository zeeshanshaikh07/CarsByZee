import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const FeaturesSkeleton = () => {
  return (
    <div className="p-10 border shadow-md rounded-xl my-7">
      <Skeleton className="h-6 w-1/4 mb-4 rounded" /> {/* Title skeleton */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-3">
        {/* Simulating multiple features with skeleton items */}
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="flex gap-2 items-center">
            <Skeleton className="h-6 w-6 rounded-full" /> {/* Icon skeleton */}
            <Skeleton className="h-4 w-2/3 rounded" /> {/* Text skeleton */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSkeleton;
