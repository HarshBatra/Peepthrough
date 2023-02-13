import React, { useState } from "react";
import { Star, BookmarkBorderOutlined, Bookmark } from "@mui/icons-material";
import StoreIcon from "@mui/icons-material/Store";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function CardOfTrendingBusiness({ business }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      key={business.key}
      className="w-72 flex flex-col border tracking-wider rounded-t-[20px] rounded-b-[30px] bg-white drop-shadow-[5px_5px_10px_rgba(0,0,0,0.25)]"
    >
      <div className="rounded-t-[20px]">
        <img src={business.img} className="rounded-t-[20px]" alt="" />
      </div>
      <div className="p-4 rounded-b-[30px]">
        <div className="flex justify-between my-2">
          <span className="text-xxs text-light-gray">
            {business.availability}
          </span>
          <span className="text-xxs text-light-gray">{business.location}</span>
        </div>
        <div>
          <h1 className="text-base text-primary-blue font-semibold mb-2">
            {business.name}
          </h1>
          <div className="flex flex-col">
            <div className="flex items-start my-1">
              <StoreIcon className="text-primary-blue mx-2" />
              <span className="text-light-gray text-xxs mr-4">
                {business.desc.substr(0, 80)}...
              </span>
            </div>
            <div className="flex items-start my-1">
              <ShoppingCartIcon className="text-primary-blue mx-2" />
              <span className="text-light-gray text-xxs mr-4">
                {business.category.substr(0, 80)}...
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center align-bottom">
          <div className="text-primary-blue text-sm font-bold">
            4.6
            <Star className="text-primary-blue ml-1" fontSize="small" />
            <span className="text-light-gray text-xxs font-medium ml-2">
              ({business.reviews} reviews)
            </span>
          </div>
          <div onClick={() => setIsActive(!isActive)}>
            {isActive ? (
              <div className="rounded-full shadow-lg bg-primary-blue">
                <Bookmark className="text-white m-2" />
              </div>
            ) : (
              <div className="rounded-full shadow-lg bg-white">
                <BookmarkBorderOutlined className="text-primary-blue m-2" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardOfTrendingBusiness;