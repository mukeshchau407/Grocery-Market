import React from "react";
import { assets } from "../assets/assets";

const Categories = () => {
  return (
    <div className="mt-16">
      <p className="text-2xl md:text-3xl text-center font-medium">Categories</p>
      <div className="">
        <img src={assets.box_icon} alt="" />
        <p>fruit</p>
      </div>
    </div>
  );
};

export default Categories;
