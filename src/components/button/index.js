import React from "react";
import styled from "styled-components";
import { colors } from "../../lib/colors";
const Button = ({ fullwitdth, secondary, buttonText = "Subscribe" }) => {
  return secondary ? (
    <SecondaryButtonWrapper fullwitdth={fullwitdth}>
      <SecondaryButton>
        <span>{buttonText}</span>{" "}
      </SecondaryButton>
    </SecondaryButtonWrapper>
  ) : (
    <PrimaryButton fullwitdth={fullwitdth}>{buttonText}</PrimaryButton>
  );
};

export default Button;

const PrimaryButton = styled.button`
  cursor: pointer;
  height: 40px;
  border: none;
  font-size: 16px;
  font-weight: 800;
  border-radius: 6px;
  color: ${colors.white};
  width: ${({ fullwitdth }) => (fullwitdth ? "100%" : "283px")};
  background: linear-gradient(107.73deg, #d81f5a 0%, #8438bf 100%);
`;
const SecondaryButton = styled(PrimaryButton)`
  width: 100%;
  height: 100%;
  background: ${colors.white};

  span {
    background: linear-gradient(107.73deg, #d81f5a 0%, #8438bf 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
`;
const SecondaryButtonWrapper = styled(PrimaryButton)`
  padding: 1px;
  background: linear-gradient(107.73deg, #d81f5a 0%, #8438bf 100%);
`;

export const CustomButton = styled(PrimaryButton)`
  width: 100%;
  height: 100%;
  background: ${colors.white};
  font-weight: 700;
  font-size: 10px;
  height: max-content;
  width: max-content;
  padding: 5px 10px;
  border-radius: 60px;

  span {
    background: linear-gradient(107.73deg, #d81f5a 0%, #8438bf 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
`;
