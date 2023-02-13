import React from "react";
import CardOfTrendingBusiness from "./Homepage Components/CardOfTrendingBussiness";
import TrendingBusinessData from "../constants/TrendingBusinessData";

function Shop() {
  var businesses = TrendingBusinessData;
  return (
    <div className="md:my-16 md:mx-14 mx-12 md:px-10 md:py-4">
      <div className="flex flex-col justify-center items-center my-8 md:my-0">
        <h1 className="text-2xl md:text-4xl text-primary-blue tracking-wide text-center">
          Trending Market Places in <span className="font-bold">Delhi</span>
        </h1>
        <span className="w-44 h-0.5 m-6 md:mb-10 mb-4 bg-gradient-to-r from-white to-white via-teal-500"></span>
      </div>
      <div className="md:grid md:grid-cols-3 lg:grid-cols-4 gap-y-10 md:gap-y-20 md:gap-x-10 flex flex-col items-center">
        {businesses.map((business) => {
          return <CardOfTrendingBusiness business={business} />;
        })}
      </div>
    </div>
  );
}

export default Shop;
