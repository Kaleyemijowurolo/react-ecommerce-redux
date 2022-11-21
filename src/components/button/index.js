import React from "react";
import styled from "styled-components";
import { colors } from "../../lib/colors";
const Button = ({
  alternate,

  fullwitdth,
  secondary,
  buttonText = "Subscribe",
}) => {
  return secondary ? (
    <SecondaryButtonWrapper fullwitdth={fullwitdth}>
      <SecondaryButton>
        <span>{buttonText}</span>{" "}
      </SecondaryButton>
    </SecondaryButtonWrapper>
  ) : alternate ? (
    <AlternateButtonWrapper>
      <AlternateButton>
        <span>{buttonText}</span>{" "}
      </AlternateButton>
    </AlternateButtonWrapper>
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
const AlternateButtonWrapper = styled(PrimaryButton)`
  padding: 1px;
  width: max-content;
  height: max-content;
  background: linear-gradient(107.73deg, #d81f5a 0%, #8438bf 100%);
  border-radius: 60px;
`;

export const AlternateButton = styled("button")`
  width: 100%;
  height: 100%;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 10px;
  padding: 5px 10px;
  border-radius: 60px;
  background: ${colors.white};

  span {
    background: linear-gradient(107.73deg, #d81f5a 0%, #8438bf 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
`;
