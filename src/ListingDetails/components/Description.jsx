import React from "react";

const Description = ({ carDetails }) => {
  return (
    <div className="p-10 bg-white shadow-md rounded-xl mt-6 border">
        <h2 className="my-2 font-medium text-2xl">Description</h2>
      <p>{carDetails?.listingDescription}</p>
    </div>
  );
};

export default Description;
