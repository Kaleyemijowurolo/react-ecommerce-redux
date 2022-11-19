import styled from "styled-components";
import { colors } from "../../../lib/colors";

export const SliderCardWrapper = styled.div`
  width: 183px;
  height: 244px;
  display: flex;
  overflow: hidden;
  border-radius: 20px;
  flex-direction: column;
  justify-content: flex-end;
  background: ${({ bgImg }) => `url(${bgImg})`};

  span {
    height: 10%;
    font-size: 16px;
    font-weight: 700;
    padding: 1.2rem 0;
    font-style: normal;
    text-align: center;
    color: ${colors.white};
    background: rgb(0, 0, 0);
    background: -moz-linear-gradient(
      360deg,
      rgba(0, 0, 0, 0.6) -1.58%,
      rgba(0, 0, 0, 0) 75.24%
    );
    background: -webkit-linear-gradient(
      360deg,
      rgba(0, 0, 0, 0.6) -1.58%,
      rgba(0, 0, 0, 0) 75.24%
    );

    background: linear-gradient(
      360deg,
      rgba(0, 0, 0, 0.6) -1.58%,
      rgba(0, 0, 0, 0) 75.24%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1);
  }

  svg {
    border: 0.5px solid red;
    background-color: red;
  }
`;
