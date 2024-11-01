import Header from "@/components/Header";
import Search from "@/components/Search";
import { db } from "../../../configs";
import { CarImages, CarListing } from "../../../configs/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Service from "@/Shared/Service";
import CarItem from "@/components/CarItem";
import CarItemSkeleton from "@/AddListing/components/CarItemSkeleton";

const SearchByCategory = () => {
  const { category } = useParams();
  const [carList, setCarList] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state for skeleton

  useEffect(() => {
    getCarList();
  }, []);

  const getCarList = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .where(eq(CarListing.category, category));

    const resp = Service.formatResult(result);

    setCarList(resp);
    setLoading(false); // Data has loaded, set loading to false
  };
  return (
    <div>
      <Header />
      <div className="p-10 bg-black flex justify-center">
        <Search />
      </div>
      <div className="p-10 md:px-20">
        <h2 className="font-bold text-4xl ">{category}</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-7">
          {loading ? (
            Array.from({ length: 8 }).map((_, index) => (
              <CarItemSkeleton key={index} />
            ))
          ) : carList.length > 0 ? (
            carList.map((item, index) => (
              <div key={index}>
                <CarItem car={item} />
              </div>
            ))
          ) : (
            <div className="col-span-full flex items-center justify-center h-64">
              <p className="text-gray-500 text-lg">
                No cars available in this category.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchByCategory;
