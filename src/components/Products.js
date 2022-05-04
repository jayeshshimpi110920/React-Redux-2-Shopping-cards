import React from "react";
import { Product } from "./Product";
import { useSelector } from "react-redux";

export const Products = () => {
  const products = useSelector((state) => state.products);
  return (
    <div className="products">
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
};
