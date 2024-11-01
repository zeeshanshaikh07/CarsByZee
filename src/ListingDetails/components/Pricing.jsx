import { Button } from "@/components/ui/button";
import React from "react";
import { MdOutlineLocalOffer } from "react-icons/md";

const Pricing = ({ carDetails }) => {
  return (
    <div className="p-10 rounded-xl border shadow-md">
      <h2>Our Price</h2>
      <h2 className="font-bold text-4xl md:text-2xl">
        {new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "INR",
          maximumFractionDigits: 0,
        }).format(carDetails?.sellingPrice)}
      </h2>

      <Button className="w-full mt-7" size="lg">
        <MdOutlineLocalOffer />
        Make an Offer
      </Button>
    </div>
  );
};

export default Pricing;
