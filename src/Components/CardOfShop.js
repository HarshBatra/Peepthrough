import React from "react";
import { Star, BookmarkBorderOutlined, Phone, LocationOn } from "@mui/icons-material";

function CardOfShop({ data }) {
  return (
    <div
      key={data.key}
      className="w-72 flex flex-col border tracking-wider rounded-t-[20px] rounded-b-[30px] bg-white drop-shadow-[5px_5px_10px_rgba(0,0,0,0.25)]"
    >
      <div className="basis-3/5 rounded-t-[20px]">
        <img src={data.img} className="rounded-t-[20px]" alt="" />
      </div>
      <div className="basis-2/5 p-4  rounded-b-[30px]">
        <div className="flex justify-between my-2">
          <span className="text-xxs text-light-gray">{data.availability}</span>
          <span className="text-xxs text-light-gray">{data.city}</span>
        </div>
        <div>
          <h1 className="text-xl text-primary-blue font-semibold mb-4">
            {data.name}
          </h1>
          <div className="text-light-gray text-xs flex ml-2 mr-4">
            <Phone className="text-primary-blue" /> 
            <p className="ml-1 my-auto">{data.contact[0]}</p>
          </div>
          <div className="text-light-gray text-xs mt-2 flex mb-4 ml-2 mr-4">
            <LocationOn className="text-primary-blue" /> 
            <p className="ml-1">{data.location.substr(0,Math.min(50,data.location.length))}...</p>
          </div>
        </div>
        <div className="flex justify-between items-end">
          <div className="text-primary-blue text-sm font-bold">
            4.6
            <Star className="text-primary-blue ml-1" fontSize="small" />
            <span className="text-light-gray text-xxs font-medium ml-2">
              ({data.reviews} reviews)
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

export default CardOfShop;
