import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

const CarItemSkeleton = () => {
  return (
    <div className="rounded-xl bg-white border hover:shadow-md cursor-pointer">
      {/* Image Skeleton */}
      {/* <div className="flex flex-col space-y-3"> */}
      <Skeleton className="w-full h-[180px] rounded-t-xl" />
      <div className="p-4">
        {/* Title Skeleton */}
        <Skeleton className="h-6 w-3/4 mb-2 rounded" />
        <Separator />
        <div className="grid md:grid-cols-3 mt-5">
          {/* Icon and Text Skeletons for Fuel, Mileage, Transmission */}
          <div className="flex flex-col items-center">
            <Skeleton className="h-5 w-5 mb-2 rounded-full" />
            <Skeleton className="h-4 w-12 rounded" />
          </div>
          <div className="flex flex-col items-center">
            <Skeleton className="h-5 w-5 mb-2 rounded-full" />
            <Skeleton className="h-4 w-16 rounded" />
          </div>
          <div className="flex flex-col items-center">
            <Skeleton className="h-5 w-5 mb-2 rounded-full" />
            <Skeleton className="h-4 w-14 rounded" />
          </div>
        </div>
        <Separator className="my-2" />
        <div className="flex items-center justify-between">
          {/* Price Skeleton */}
          <Skeleton className="h-6 w-1/2 rounded" />
          {/* View Details Skeleton */}
          <Skeleton className="h-4 w-1/4 rounded" />
        </div>
      </div>
    </div>
  );
};

export default CarItemSkeleton;
