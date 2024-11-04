import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const FinancialCalculatorSkeleton = () => {
  return (
    <div className="p-10 border rounded-xl shadow-md mt-7">
      <Skeleton className="h-6 w-1/3 mb-4 rounded" /> {/* Title skeleton */}
      <div className="flex gap-5 mt-5">
        <div className="w-full">
          <Skeleton className="h-4 w-1/2 mb-2 rounded" /> {/* Label skeleton */}
          <Skeleton className="h-10 w-full rounded" /> {/* Input skeleton */}
        </div>
        <div className="w-full">
          <Skeleton className="h-4 w-1/2 mb-2 rounded" /> {/* Label skeleton */}
          <Skeleton className="h-10 w-full rounded" /> {/* Input skeleton */}
        </div>
      </div>
      <div className="flex gap-5 mt-5">
        <div className="w-full">
          <Skeleton className="h-4 w-1/2 mb-2 rounded" /> {/* Label skeleton */}
          <Skeleton className="h-10 w-full rounded" /> {/* Input skeleton */}
        </div>
        <div className="w-full">
          <Skeleton className="h-4 w-1/2 mb-2 rounded" /> {/* Label skeleton */}
          <Skeleton className="h-10 w-full rounded" /> {/* Input skeleton */}
        </div>
      </div>
      <Skeleton className="h-12 w-full mt-5 rounded" /> {/* Button skeleton */}
    </div>
  );
};

export default FinancialCalculatorSkeleton;
