import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import DetailHeader from "../components/DetailHeader";
import { useParams } from "react-router-dom";
import { db } from "../../../configs";
import { CarImages, CarListing } from "../../../configs/schema";
import { eq } from "drizzle-orm";
import Service from "@/Shared/Service";
import ImageGallery from "../components/ImageGallery";
import Description from "../components/Description";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Specifications from "../components/Specifications";
import OwnerDetails from "../components/OwnerDetails";
import Footer from "@/components/Footer";
import FinancialCalculator from "../components/FinancialCalculator";
import MostSearchedCar from "@/components/MostSearchedCar";
import DetailHeaderSkeleton from "../SkeletonComponent/DetailHeaderSkeleton";
import ImageGalleySkeleton from "../SkeletonComponent/ImageGalleySkeleton";
import DescriptionSkeleton from "../SkeletonComponent/DescriptionSkeleton";
import FeaturesSkeleton from "../SkeletonComponent/FeaturesSkeleton";
import FinancialCalculatorSkeleton from "../SkeletonComponent/FinancialCalculatorSkeleton";
import PricingSkeleton from "../SkeletonComponent/PricingSkeleton";
import SpecificationsSkeleton from "../SkeletonComponent/SpecificationsSkeleton";
import OwnerDetailsSkeleton from "../SkeletonComponent/OwnerDetailsSkeleton";

const ListingDetails = () => {
  const { id } = useParams();
  const [carDetails, setCarDetails] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCarDetails();
  }, []);

  const getCarDetails = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .where(eq(CarListing.id, id));

    const resp = Service.formatResult(result);
    setCarDetails(resp[0]);
    setLoading(false); // Set loading to false once data is fetched
  };

  return (
    <div>
      <Header />

      {/* Header details */}
      <div className="p-10 md:px-20">
        {loading ? (
          <DetailHeaderSkeleton />
        ) : (
          <DetailHeader carDetails={carDetails} />
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 w-full mt-10 gap-5">
          {/* left */}
          <div className="md:col-span-2">
            {/* Images */}
            {loading ? (
              <ImageGalleySkeleton />
            ) : (
              <ImageGallery carDetails={carDetails} />
            )}

            {/* Desc */}
            {loading ? (
              <DescriptionSkeleton />
            ) : (
              <Description carDetails={carDetails} />
            )}

            {/* features */}
            {loading ? (
              <FeaturesSkeleton />
            ) : (
              <Features features={carDetails?.features} />
            )}

            {loading ? (
              <FinancialCalculatorSkeleton />
            ) : (
              <FinancialCalculator carDetails={carDetails} />
            )}
          </div>
          {/* right */}
          <div>
            {/* price */}
            {loading ? (
              <PricingSkeleton />
            ) : (
              <Pricing carDetails={carDetails} />
            )}

            {/* details */}
            {loading ? (
              <SpecificationsSkeleton />
            ) : (
              <Specifications carDetails={carDetails} />
            )}

            {/* owner details */}
            {loading ? (
              <OwnerDetailsSkeleton />
            ) : (
              <OwnerDetails carDetails={carDetails} />
            )}
            
          </div>
        </div>
        {/* <MostSearchedCar /> */}
      </div>
      <Footer />
    </div>
  );
};

export default ListingDetails;
