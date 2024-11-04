import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const PricingSkeleton = () => {
  return (
    <div className="p-10 rounded-xl border shadow-md">
      <Skeleton className="h-6 w-1/4 mb-4 rounded" /> {/* "Our Price" title */}
      <Skeleton className="h-10 w-1/2 mb-6 rounded" /> {/* Price skeleton */}
      <Skeleton className="h-12 w-full mt-7 rounded" /> {/* Button skeleton */}
    </div>
  );
};

export default PricingSkeleton;
