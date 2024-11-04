import React from "react";
import { Skeleton } from "@/components/ui/skeleton";


const OwnerDetailsSkeleton = () => {
  return (
    <div className="p-10 border rounded-xl shadow-md mt-7">
      <Skeleton className="h-8 w-1/4 mb-3" /> {/* Owner Details title */}
      <Skeleton className="w-[70px] h-[70px] rounded-full mb-2" />{" "}
      {/* User image skeleton */}
      <Skeleton className="h-6 w-1/3 mb-2" /> {/* User name skeleton */}
      <Skeleton className="h-4 w-1/2 text-gray-500 mb-4" />{" "}
      {/* Created by skeleton */}
      <Skeleton className="h-10 w-full rounded" />{" "}
      {/* Message button skeleton */}
    </div>
  );
};

export default OwnerDetailsSkeleton;
