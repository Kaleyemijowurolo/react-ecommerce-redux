import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../lib/colors";
import { CustomButton } from "../button";
import CheckInput from "../checkInput";
import Filter from "../filter";
import MultiRangeSlider from "../multiRangeSlider/MultiRangeSlider";
import { Title } from "../multiRangeSlider/multiRangeSlider.styles";
import Slider from "../slider";
//import Slider from "../slider2/Slider";
import {
  Image,
  ProductBox,
  ProductBoxWrapper,
  ProductImageBox,
  ProductsWraper,
  SideBar,
} from "./products.styles";

const products = [
  {
    buttonText: "",
    imgUrl: "",
    productName: "",
    rent: "",
  },
];

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
      <ProductBoxWrapper>
        <ProductBox>
          <ProductImageBox>
            <div className="btn">
              <CustomButton>
                <span>Special Offer</span>
              </CustomButton>
            </div>
            <Image></Image>
          </ProductImageBox>
          <p>Apple iPhone 13 Pro Max </p>
          <h3>Rent for AED 139/month</h3>
        </ProductBox>
      </ProductBoxWrapper>
    </ProductsWraper>
  );
};

export default Products;

const Brands = () => {
  const [checked, setChecked] = useState([]);

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    let updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };
  const isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";
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
            <CheckInput onChange={handleCheck} checkbox value={item} />
            <span onClick={handleCheck} className={isChecked(item)}>
              {item}
            </span>
          </li>
        ))}
      </Ul>
    </>
  );
};

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
    .checked-item {
      background: linear-gradient(107.73deg, #d81f5a 0%, #8438bf 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
      font-weight: "400";
    }
    a {
      text-decoration: none;
      color: #000000;
      margin-left: 10px;
    }
    span {
      margin-left: 10px;
      cursor: pointer;
    }
  }
`;
