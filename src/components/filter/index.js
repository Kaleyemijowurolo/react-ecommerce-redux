import React from "react";
import styled from "styled-components";
import { colors } from "../../lib/colors";
import { NavLink, useMatch, useResolvedPath } from "react-router-dom";
import { Title } from "../multiRangeSlider/multiRangeSlider.styles";

const list = ["< All Categories", "All computers", " Laptop", " Keyboard"];
const Filter = () => {
  return (
    <>
      <Title>Filter by</Title>
      <Ul>
        {list.map((item, idx) => (
          <li key={idx + item}>
            <CustomNavLink to={`/${item}`} title={item} />
          </li>
        ))}
      </Ul>
    </>
  );
};

export default Filter;

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

    a {
      text-decoration: none;
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
