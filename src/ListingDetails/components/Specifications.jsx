import IconField from "@/AddListing/components/IconField";
import CarSpecification from "@/Shared/CarSpecification";
import React from "react";

const Specifications = ({ carDetails }) => {
  return (
    <div className="p-10 rounded-xl border shadow-md mt-7">
      <h2 className="font-medium text-xl">Specifications</h2>
      {CarSpecification.map((item, index) => (
        <div className="mt-5 flex items-center justify-between">
          <h2 className="flex gap-2">
            <IconField icon={item?.icon} />
            {item.label}
          </h2>
          <h2 className="font-semibold">
            {carDetails?.[item?.name] ? carDetails?.[item?.name] : "-"}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Specifications;
