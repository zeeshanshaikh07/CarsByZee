import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const DetailHeaderSkeleton = () => {
  return (
    <div>
      {/* Title Skeleton */}
      <Skeleton className="h-8 w-1/2 mb-2 rounded" />

      {/* Tagline Skeleton */}
      <Skeleton className="h-4 w-1/3 mb-3 rounded" />

      <div className="flex gap-2 mt-3">
        {/* Icon and Text Skeletons */}
        <div className="flex gap-2 items-center bg-blue-50 rounded-full p-2 px-3">
          <Skeleton className="h-7 w-7 rounded-full" />
          <Skeleton className="h-4 w-10 rounded" />
        </div>
        <div className="flex gap-2 items-center bg-blue-50 rounded-full p-2 px-3">
          <Skeleton className="h-7 w-7 rounded-full" />
          <Skeleton className="h-4 w-14 rounded" />
        </div>
        <div className="flex gap-2 items-center bg-blue-50 rounded-full p-2 px-3">
          <Skeleton className="h-7 w-7 rounded-full" />
          <Skeleton className="h-4 w-16 rounded" />
        </div>
        <div className="flex gap-2 items-center bg-blue-50 rounded-full p-2 px-3">
          <Skeleton className="h-7 w-7 rounded-full" />
          <Skeleton className="h-4 w-12 rounded" />
        </div>
      </div>
    </div>
  );
};

export default DetailHeaderSkeleton;
