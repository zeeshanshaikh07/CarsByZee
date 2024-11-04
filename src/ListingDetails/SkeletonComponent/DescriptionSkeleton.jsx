import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const DescriptionSkeleton = () => {
  return (
    <div className="p-10 bg-white shadow-md rounded-xl mt-6 border">
      {/* Title Skeleton */}
      <Skeleton className="h-6 w-1/4 mb-4 rounded" />
      {/* Paragraph Skeleton */}
      <Skeleton className="h-4 w-full mb-2 rounded" />
      <Skeleton className="h-4 w-5/6 mb-2 rounded" />
      <Skeleton className="h-4 w-3/4 mb-2 rounded" />
      <Skeleton className="h-4 w-2/3 rounded" />
    </div>
  );
};

export default DescriptionSkeleton;
