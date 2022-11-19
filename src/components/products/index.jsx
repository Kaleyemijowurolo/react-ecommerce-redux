import React from "react";
import { NavLink, useMatch, useResolvedPath } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../lib/colors";
import CheckInput from "../checkInput";
import Filter from "../filter";
import MultiRangeSlider from "../multiRangeSlider/MultiRangeSlider";
import { Title } from "../multiRangeSlider/multiRangeSlider.styles";
import { ProductBox, ProductsWraper, SideBar } from "./products.styles";

const Products = () => {
  return (
    <ProductsWraper>
      <SideBar>
        <Filter />
        <MultiRangeSlider
          min={0}
          max={500}
          onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
        />
        <Brands />
      </SideBar>
      <ProductBox>main</ProductBox>
    </ProductsWraper>
  );
};

export default Products;

const Brands = () => {
  const brands = [
    "All",
    "Apple",
    "Samsung",
    "Black berry",
    "Sony",
    "Asus",
    "Google",
  ];
  return (
    <>
      <Title>Brands</Title>
      <Ul>
        {brands.map((item, idx) => (
          <li key={idx + item}>
            <CheckInput checkbox />
            <CustomNavLink to={`/${item}`} title={item} />
          </li>
        ))}
      </Ul>
    </>
  );
};

// const CheckBox = () => <CheckBoxWrapper type="checkbox" />;
// const CheckBoxWrapper = styled.input`
//   margin-right: 10px;

//   &[type="checkbox"]:checked {
//     background-color: linear-gradient(107.73deg, #d81f5a 0%, #8438bf 100%);
//     border-radius: 4px;
//   }
//   /* &::-ms-check,
//   :checked {

//   } */
// `;

export const Ul = styled.ul`
  text-align: left;
  max-width: 250px;
  height: max-content;
  /* border: solid red; */
  padding: 0;
  /* margin: 0; */
  div {
    font-size: 20px;
    font-weight: 700;
    line-height: 27px;
    font-style: normal;
    color: ${colors.white};
    font-family: "Manrope";
    padding-bottom: 10px;
  }
  li {
    font-size: 14px;
    list-style: none;
    font-weight: 500;
    line-height: 30px;
    font-style: normal;
    font-family: "Manrope";
    color: ${colors.text};
    display: flex;
    align-items: center;

    a {
      text-decoration: none;
      color: #000000;
      margin-left: 10px;
    }
  }
`;
const CustomNavLink = ({ to, title }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <NavLink to={to} className={` ${match ? "active" : ""}`}>
      {title}
    </NavLink>
  );
};
