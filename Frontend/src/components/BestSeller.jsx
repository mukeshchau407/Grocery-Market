import React from "react";
import ProductCard from "./ProductCard";

const BestSeller = () => {
  return (
    <div className="mt-16">
      <p className="text-2xl md:text-3xl font-medium text-center">
        Best Seller
        <div className="">
          <ProductCard />
        </div>
      </p>
    </div>
  );
};

export default BestSeller;
