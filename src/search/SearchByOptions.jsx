import Service from "@/Shared/Service";
import { db } from "../../configs";
import { CarImages, CarListing } from "../../configs/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Search from "@/components/Search";
import CarItemSkeleton from "@/AddListing/components/CarItemSkeleton";
import CarItem from "@/components/CarItem";
import Footer from "@/components/Footer";

const SearchByOptions = () => {
  const [searchParams] = useSearchParams();
  const [carList, setCarList] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state for skeleton

  const condition = searchParams.get("cars");
  const make = searchParams.get("make");
  const price = searchParams.get("price");

  console.log(condition, make, price);

  useEffect(() => {
    getCarList();
  }, []);

  const getCarList = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .where(condition != undefined && eq(CarListing.condition, condition))
      .where(make != undefined && eq(CarListing.make, make));

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
        <h2 className="font-bold text-4xl ">Search Result</h2>

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
      <Footer />
    </div>
  );
};

export default SearchByOptions;
