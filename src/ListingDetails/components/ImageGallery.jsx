import React from "react";

const ImageGallery = ({ carDetails }) => {
  return (
    <div>
      <img
        src={carDetails?.images[0].imageUrl}
        alt=""
        className="w-full h-[500px] object-cover rounded-xl"
      />
    </div>
  );
};

export default ImageGallery;
