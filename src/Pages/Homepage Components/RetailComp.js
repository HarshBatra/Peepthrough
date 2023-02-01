import React from "react";

function RetailComp() {
  return (
    <>
      <div
        className="py-20 my-16"
        style={{
          background:
            "radial-gradient(rgba(19, 168, 158, 0.5) 0%, rgba(19, 168, 158, 0.25) 0.01%, rgba(19, 168, 158, 0) 100%)",
        }}
      >
        <div className="mx-10 items-center flex-col flex">
          <h1 className="text-center md:mb-16 mb-10">
            <span className="text-3xl md:text-4xl text-primary-blue font-bold tracking-wider">
              Retail Shopping{" "}
            </span>{" "}
            <span className="text-2xl md:text-4xl text-black tracking-wide">
              {" "}
              made easy
            </span>
          </h1>
          <div className="flex md:justify-around w-full md:flex-row flex-col">
            <div className="h-auto w-80 relative flex flex-col justify-center items-center">
              <img
                src="./Assets/Images/data-searching.png"
                className="w-28 h-28 md:w-44 md:h-44"
                alt=""
              />
              <h1 className="max-w-full mx-10 h-auto break-words text-center mt-4 md:text-lg text-sm font-medium tracking-widest mb-6">
                <span className="text-primary-blue md:text-xl text-base font-extrabold tracking-widest">
                  Explore
                </span>{" "}
                our market database & plan in advance your shopping schedule.
              </h1>
            </div>
            <div className="h-auto w-80 relative flex flex-col justify-center items-center">
              <img
                src="./Assets/Images/location.png"
                className="w-28 h-28 md:w-44 md:h-44"
                alt=""
              />
              <h1 className="max-w-full mx-10 h-auto break-words text-center mt-4 md:text-lg text-sm font-medium tracking-widest mb-6">
                <span className="text-primary-blue md:text-xl text-base font-extrabold tracking-widest">
                  Search
                </span>{" "}
                the product you need, before you begin your shopping streak.
              </h1>
            </div>
            <div className="h-auto w-80 relative flex flex-col justify-center items-center">
              <img
                src="./Assets/Images/sale.png"
                className="w-28 h-28 md:w-44 md:h-44"
                alt=""
              />
              <h1 className="max-w-full mx-10 h-auto break-words text-center mt-4 md:text-lg text-sm font-medium tracking-widest">
                <span className="text-primary-blue md:text-xl text-base font-extrabold tracking-widest">
                  Learn
                </span>{" "}
                about sales & discounts being offered before you step out.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RetailComp;
