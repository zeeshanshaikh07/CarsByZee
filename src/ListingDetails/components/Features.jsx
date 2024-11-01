import React from "react";
import { FaCheck } from "react-icons/fa6";

const Features = ({ features }) => {
  const formatCamelCase = (text) =>
    text.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase());
  return (
    // <div className="mt-6">
    <div className="p-10 border shadow-md rounded-xl my-7">
      <h2 className="font-medium text-2xl">Features</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 mt-3 lg:grid-cols-4 gap-7">
        {features &&
          Object.entries(features).map(([featureKey, value]) => (
            <div className="flex gap-2 items-center">
              <FaCheck className="text-lg p-1 rounded-full bg-blue-100 text-primary" />
              <h2>{formatCamelCase(featureKey)}</h2>
            </div>
          ))}
      </div>
    </div>
    // </div>
  );
};

export default Features;
