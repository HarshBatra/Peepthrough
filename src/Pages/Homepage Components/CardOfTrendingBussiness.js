import React from "react";
import { Star, BookmarkBorderOutlined } from "@mui/icons-material";

function CardOfTrendingBusiness({ business }) {
  return (
    <div
      key={business.key}
      className="w-72 flex flex-col border tracking-wider rounded-t-[20px] rounded-b-[30px] bg-white drop-shadow-[5px_5px_10px_rgba(0,0,0,0.25)]"
    >
      <div className="basis-3/5 rounded-t-[20px]">
        <img src={business.img} className="rounded-t-[20px]" alt="" />
      </div>
      <div className="basis-2/5 p-4  rounded-b-[30px]">
        <div className="flex justify-between my-2">
          <span className="text-xxs text-light-gray">{business.type}</span>
          <span className="text-xxs text-light-gray">{business.location}</span>
        </div>
        <div>
          <h1 className="text-xl text-primary-blue font-semibold mb-2">
            {business.name}
          </h1>
          <span className="text-primary-light-blue text-sm">
            Rs. {business.price}
          </span>
        </div>
        <div className="flex justify-between items-end">
          <div className="text-primary-blue text-sm font-bold">
            4.6
            <Star className="text-primary-blue ml-1" fontSize="small" />
            <span className="text-light-gray text-xxs font-medium ml-2">
              ({business.reviews} reviews)
            </span>
          </div>
          <div className="rounded-full shadow-lg bg-white">
            <BookmarkBorderOutlined className="text-primary-blue m-3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardOfTrendingBusiness;
