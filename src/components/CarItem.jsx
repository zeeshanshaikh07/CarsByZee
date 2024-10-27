import React from "react";
import { Separator } from "./ui/separator";
import { LuFuel } from "react-icons/lu";
import { TbBrandSpeedtest } from "react-icons/tb";
import { GiGearStickPattern } from "react-icons/gi";
import { MdOpenInNew } from "react-icons/md";

const CarItem = ({ car }) => {
  return (
    <div className="rounded-xl bg-white border hover:shadow-md cursor-pointer">
      <img
        src={car?.image}
        alt=""
        width={"100%"}
        height={250}
        className="rounded-t-xl h-[180px] object-cover"
      />
      <div className="p-4">
        <h2 className="font-bold text-black text-lg mb-2">{car?.name}</h2>
        <Separator />
        <div className="grid md:grid-cols-3 mt-5">
          <div className="flex flex-col items-center">
            <LuFuel className="text-lg mb-2" />
            <h2>{car.fuelType}</h2>
          </div>
          <div className="flex flex-col items-center">
            <TbBrandSpeedtest className="text-lg mb-2" />
            <h2>{car.kms} Kms</h2>
          </div>
          <div className="flex flex-col items-center">
            <GiGearStickPattern className="text-lg mb-2" />
            <h2>{car.transmission}</h2>
          </div>
        </div>
        {/* </div> */}
        <Separator className="my-2" />
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-xl">{car.price}</h2>
          <h2 className="text-primary text-sm flex gap-2 items-center">
            View Details
            <MdOpenInNew />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CarItem;
