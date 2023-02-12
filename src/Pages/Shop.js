import React from "react";
import CardOfTrendingBusiness from "./Homepage Components/CardOfTrendingBussiness";
import TrendingBusinessData from "../constants/TrendingBusinessData";

function Shop() {
  var businesses = TrendingBusinessData;
  return (
    <div className="md:my-16 md:mx-14 mx-12 md:px-10 md:py-4">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl md:text-4xl text-primary-blue tracking-wide text-center md:mb-2">
          Trending Market Places in <span className="font-bold">Delhi</span>
        </h1>
        <span className="w-44 h-0.5 m-6 md:mb-10 mb-4 bg-gradient-to-r from-white to-white via-teal-500"></span>
      </div>
      <div className="grid grid-cols-4 gap-y-20 gap-x-10">
        {businesses.map((business) => {
          return <CardOfTrendingBusiness business={business} />;
        })}
      </div>
    </div>
  );
}

export default Shop;
