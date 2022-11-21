import React, { useState } from "react";
import styled from "styled-components";

import { colors } from "../../lib/colors";
import Button from "../button";
import CheckInput from "../checkInput";
import Filter from "../filter";
import MultiRangeSlider from "../multiRangeSlider/MultiRangeSlider";
import { Title } from "../multiRangeSlider/multiRangeSlider.styles";
import {
  Image,
  ProductBox,
  ProductBoxWrapper,
  ProductImageBox,
  ProductsWraper,
  SideBar,
} from "./products.styles";

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
        <div className="heading">
          <div className="title">
            <h3>Computers</h3>
            <span>Sort by</span>
          </div>
          <span>Seo text will be here</span>
        </div>
        <div className="container">
          {products.map(
            ({ buttonText, imgUrl, productName, rent, preRent }, idx) => (
              <ProductBox key={idx}>
                <ProductImageBox>
                  <div className="PIB-wrapper">
                    {buttonText !== "" && (
                      <div className="btn">
                        <Button alternate buttonText={buttonText} />
                      </div>
                    )}
                    <Image src={imgUrl} alt="product-image" />
                  </div>
                </ProductImageBox>
                <p>{productName}</p>
                {buttonText === "Sale" && <p>{preRent}</p>}
                {buttonText === "Sale" ? (
                  <h3 className="h3">{rent}</h3>
                ) : (
                  <h3>{rent}</h3>
                )}
              </ProductBox>
            )
          )}
        </div>
        <div className="more-btn">
          <Button secondary buttonText="Load more products" />
        </div>
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
const products = [
  {
    buttonText: "Special Offer",
    imgUrl: "/image1.svg",
    preRent: "",
    rent: "Rent for AED 139/month",
    productName: "Apple iPhone 13 Pro Max",
  },
  {
    buttonText: "Sale",
    imgUrl: "/image3.svg",
    preRent: "AED 339 / month",
    rent: "Rent for AED 139 / month",
    productName: "Microsoft Xbox Series S",
  },
  {
    buttonText: "Sale",
    imgUrl: "/image2.svg",
    preRent: "AED 339 / month",
    rent: "Rent for AED 139/month",
    productName: 'MacBook Pro 14" Laptop',
  },
  {
    buttonText: "Special Offer",
    imgUrl: "/image1.svg",
    preRent: "",
    rent: "Rent for AED 139/month",
    productName: "Apple iPhone 13 Pro Max ",
  },

  {
    buttonText: "",
    imgUrl: "/image2.svg",
    preRent: "",
    rent: "Rent for AED 139/month",
    productName: 'MacBook Pro 14" Laptop',
  },
  {
    buttonText: "Sale",
    imgUrl: "/image3.svg",
    preRent: "AED 339 / month",
    rent: "Rent for AED 139 / month",
    productName: "Microsoft Xbox Series S",
  },
  {
    buttonText: "",
    imgUrl: "/image1.svg",
    preRent: "",
    rent: "Rent for AED 139/month",
    productName: "Apple iPhone 13 Pro Max ",
  },

  {
    buttonText: "Sale",
    imgUrl: "/image2.svg",
    preRent: "AED 339 / month",
    rent: "Rent for AED 139/month",
    productName: 'MacBook Pro 14" Laptop',
  },
  {
    buttonText: "",
    imgUrl: "/image3.svg",
    preRent: "AED 339 / month",
    rent: "Rent for AED 139 / month",
    productName: "Microsoft Xbox Series S",
  },
  {
    buttonText: "",
    imgUrl: "/image1.svg",
    preRent: "",
    rent: "Rent for AED 139/month",
    productName: "Apple iPhone 13 Pro Max ",
  },
  {
    buttonText: "Sale",
    imgUrl: "/image3.svg",
    preRent: "AED 339 / month",
    rent: "Rent for AED 139 / month",
    productName: "Microsoft Xbox Series S",
  },

  {
    buttonText: "",
    imgUrl: "/image1.svg",
    preRent: "",
    rent: "Rent for AED 139/month",
    productName: "Apple iPhone 13 Pro Max ",
  },
  {
    buttonText: "Sale",
    imgUrl: "/image2.svg",
    preRent: "",
    rent: "Rent for AED 139/month",
    productName: 'MacBook Pro 14" Laptop',
  },
  {
    buttonText: "",
    imgUrl: "/image3.svg",
    preRent: "AED 339 / month",
    rent: "Rent for AED 139 / month",
    productName: "Microsoft Xbox Series S",
  },

  {
    buttonText: "Special Offer",
    imgUrl: "/image1.svg",
    preRent: "",
    rent: "Rent for AED 139/month",
    productName: "Apple iPhone 13 Pro Max ",
  },
  {
    buttonText: "",
    imgUrl: "/image3.svg",
    preRent: "AED 339 / month",
    rent: "Rent for AED 139 / month",
    productName: "Microsoft Xbox Series S",
  },
  {
    buttonText: "Sale",
    imgUrl: "/image2.svg",
    preRent: "AED 339 / month",
    rent: "Rent for AED 139/month",
    productName: 'MacBook Pro 14" Laptop',
  },
  {
    buttonText: "Sale",
    imgUrl: "/image2.svg",
    preRent: "AED 339 / month",
    rent: "Rent for AED 139/month",
    productName: 'MacBook Pro 14" Laptop',
  },
];
