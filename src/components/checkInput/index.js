/**
 * pass the type radio or checkbox as needed
 */
import React from "react";

import { CheckInputWrapper } from "./checkInput.styles";

const CheckInput = ({
  isChecked,
  onChange,
  checkbox,
  onClick,
  value,
  radio,
  name,
  size,
  ...props
}) => {
  return (
    <CheckInputWrapper
      type={radio ? "radio" : checkbox ? "checkbox" : null}
      onChange={onChange}
      onClick={onClick}
      value={value}
      name={name}
      size={size}
      {...props}
      // isChecked={checked}
      checked={isChecked}
    />
  );
};

export default CheckInput;
