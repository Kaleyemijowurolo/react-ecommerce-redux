import React from "react";
import styled from "styled-components";
import { colors } from "../../lib/colors";

const Input = ({ placeholder, fullwitdth }) => (
  <InputWrapper
    fullwitdth={fullwitdth}
    placeholder={placeholder || "placeholder"}
  />
);
export default Input;

const InputWrapper = styled.input`
  color: #fff;
  height: 40px;
  border: none;
  outline: none;
  text-indent: 15px;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.2);
  width: ${({ fullwitdth }) => (fullwitdth ? "100%" : "283px")};

  &::placeholder {
    font-size: 14px;
    font-weight: 700;
    line-height: 19px;
    font-style: normal;
    font-family: "Manrope";
    color: ${colors.outline};
  }
`;
