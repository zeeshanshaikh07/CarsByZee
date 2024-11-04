import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ImageGalleySkeleton = () => {
  return (
    <div>
      <Skeleton className="w-full h-[500px] rounded-xl" />
    </div>
  );
};

export default ImageGalleySkeleton;
