import { storage } from "../../../configs/firebaseConfig";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { CarImages } from "../../../configs/schema";

const UploadImages = ({ triggerUploadImage, setLoader }) => {
  const [selectedFile, setSelectedFile] = useState([]);

  useEffect(() => {
    if (triggerUploadImage) {
      uploadImageToServer();
    }
  }, [triggerUploadImage]);

  const onFileSelected = (event) => {
    const files = event.target.files;

    for (let i = 0; i < files?.length; i++) {
      const file = files[i];
      setSelectedFile((prev) => [...prev, file]);
    }
  };

  const onImageRemove = (image, index) => {
    const result = selectedFile.filter((item) => item != image);
    setSelectedFile(result);
  };

  const uploadImageToServer = () => {
    setLoader(true);
    selectedFile.forEach(async (file) => {
      const fileName = Date.now() + ".jpeg";
      const storageRef = ref(storage, "CarsByZee/" + fileName);
      const metaData = {
        contentType: "image/jpeg",
      };
      await uploadBytes(storageRef, file, metaData)
        .then((snapShot) => {
          console.log("File uploaded");
        })
        .then((resp) => {
          getDownloadURL(storageRef).then(async (downloadURL) => {
            console.log(downloadURL);
            await db.insert(CarImages).values({
              imageUrl: downloadURL,
              carListingId: triggerUploadImage,
            });
          });
        });
      setLoader(false);
    });
  };

  return (
    <div>
      <h2 className="font-medium text-xl my-3">Upload Car Images</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {selectedFile.map((image, index) => (
          <div key={index}>
            <h2>
              <IoCloseCircle
                className="absolute m-2 text-lg text-white cursor-pointer"
                onClick={() => onImageRemove(image, index)}
              />
            </h2>
            <img
              src={URL.createObjectURL(image)}
              className="w-full h-[130px] object-cover rounded-xl"
              alt=""
            />
          </div>
        ))}

        <label htmlFor="upload-image">
          <div className="border rounded-xl border-dotted border-primary bg-blue-100 p-10 cursor-pointer hover:shadow-md">
            <h2 className="text-lg text-center text-primary">+</h2>
          </div>
        </label>
        <input
          type="file"
          name="upload-image"
          id="upload-image"
          multiple={true}
          className="opacity-0"
          onChange={onFileSelected}
        />
      </div>
    </div>
  );
};

export default UploadImages;
