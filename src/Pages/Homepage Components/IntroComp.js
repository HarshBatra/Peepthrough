import React from "react";
import { CSSComponents } from "../../Components/CSSComponents";
import SearchIcon from "@mui/icons-material/Search";

function IntroComp() {
  return (
    <div className="ml-16 tracking-wider py-16">
      <div className="flex items-center">
        <div className="flex flex-col w-[606px] ">
          <h1 className="text-[100px] font-bold text-[#393E46]">WELCOME</h1>
          <h3 className="text-3xl font-bold text-primary-blue mb-6">
            TO A WHOLE NEW EXPERIENCE OF WINDOW SHOPPING
          </h3>
          <p className="text-base text-[#000000] mb-6">
            Why roam around for hours if you can window shop in the luxury of
            your home...
          </p>
          <p className="text-base text-[#000000]">
            Peepthrough brings to you famous markets in your city with Selected,
            Sorted & Categorized outlets, all finely picked to serve your
            shopping requirements !
          </p>
        </div>
        <div className="relative z-10">
          <img
            src="./Assets/Images/welcome.png"
            alt=""
            className="h-[587px] w-auto z-10"
          />
          <div
            className="ellipse-2 absolute w-[700px] h-[700px] top-0 right-0 left-0 bottom-0 m-auto rounded-full -z-50"
            style={{
              background:
                "linear-gradient(147.22deg, #13A89E -31.1%, rgba(19, 168, 158, 0) 77.92%)",
            }}
          ></div>
        </div>
      </div>
      <div
        className="relative w-2/3 block mx-auto tracking-wider z-10 rounded-2xl"
        style={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        }}
      >
        <input
          type="text"
          placeholder="Search by Name, City, or Category"
          className="border w-full rounded-2xl h-10 placeholder:text-xs placeholder:tracking-wider pl-4 outline-none pr-[155px]"
        />
        <button
          className={`${CSSComponents.roundButtonBlue} px-8 py-[4px] text-sm font-medium absolute right-2 
         top-1/2 -translate-y-1/2 tracking-wider`}
          style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
        >
          <SearchIcon />
          Search
        </button>
      </div>
    </div>
  );
}

export default IntroComp;
