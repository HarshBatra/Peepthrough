import React from "react";
import CategoriesData from "../../constants/CategoriesData";

function Card(props) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="rounded-[50%] bg-white hover:bg-teal-200 cursor-pointer drop-shadow-lg md:h-28 md:w-28 h-16 w-16 mb-4 flex items-center justify-center transition grow">
        <img
          src={props.img}
          alt={props.name}
          className="md:p-4 p-3 relative drop-shadow-md"
        />
      </div>
      <div className="font-light md:font-medium text-xs md:text-sm text-teal-500 mb-8 w-full text-center px-2">
        {props.name}
      </div>
    </div>
  );
}

function CategoriesComp() {
  return (
    <>
      <div className="my-16 md:mx-12">
        <div className="flex flex-col justify-center items-center pb-6 md:pb-10 mx-10">
          <h1 className="text-center text-xl md:text-3xl md:tracking-widest tracking-wider">
            Browse Bussinesses by{" "}
            <span className="text-primary-blue font-bold">Category</span>
          </h1>
          <span className="w-44 h-0.5 m-6 bg-gradient-to-r from-white to-white via-teal-500"></span>
        </div>
        <div className="w-auto h-auto grid md:grid-cols-6 grid-cols-3 mx-6 align-top items-start">
          {CategoriesData.map((icon) => (
            <Card key={icon.key} img={icon.icon} name={icon.category} />
          ))}
        </div>
      </div>
    </>
  );
}

export default CategoriesComp;
