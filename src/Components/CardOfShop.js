import React,{useState} from "react";
import { Star, BookmarkBorderOutlined, Phone, LocationOn, Bookmark } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function CardOfShop({ data }) {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      key={data.key}
      className="w-72 flex flex-col border tracking-wider rounded-t-[20px] rounded-b-[30px] bg-white drop-shadow-[5px_5px_10px_rgba(0,0,0,0.25)] cursor-pointer"
    >
      <div className="rounded-t-[20px] cursor-pointer" onClick={()=>navigate("/shop")}>
        <img src={data.img} className="rounded-t-[20px]" alt="" />
      </div>
      <div className="p-4 rounded-b-[30px]">
        <div className="flex justify-between my-2">
          <span className="text-xxs text-light-gray">
            {data.availability}
          </span>
          <span className="text-xxs text-light-gray">{data.city}</span>
        </div>
        <div>
          <h1 className="text-base text-primary-blue font-semibold mb-2 cursor-pointer" onClick={()=>navigate("/shop")}>
            {data.name}
          </h1>
          <div className="flex flex-col">
            <div className="flex items-start my-1">
              <Phone className="text-primary-blue mx-2" />
              <span className="text-light-gray text-xxs mr-4">
                {data.contact[0]}
              </span>
            </div>
            <div className="flex items-start my-1">
              <LocationOn className="text-primary-blue mx-2" />
              <span className="text-light-gray text-xxs mr-4">
                {data.location.substr(0,Math.min(50,data.location.length))}...
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center align-bottom">
          <div className="text-primary-blue text-sm font-bold">
            4.6
            <Star className="text-primary-blue ml-1" fontSize="small" />
            <span className="text-light-gray text-xxs font-medium ml-2">
              ({data.reviews} reviews)
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

export default CardOfShop;