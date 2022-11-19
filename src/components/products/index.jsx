import React from "react";
import MultiRangeSlider from "../multiRangeSlider/MultiRangeSlider";
import { ProductBox, ProductsWraper, SideBar } from "./products.styles";

const Products = () => {
  return (
    <ProductsWraper>
      <SideBar>
        <MultiRangeSlider
          min={0}
          max={500}
          onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
        />
      </SideBar>
      <ProductBox>main</ProductBox>
    </ProductsWraper>
  );
};

export default Products;

const Filter = () => {
  return <div>Products</div>;
};

const Brands = () => {
  return <div>Products</div>;
};
