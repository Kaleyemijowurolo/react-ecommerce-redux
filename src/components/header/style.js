import styled from "styled-components";
import { colors } from "../../lib/colors";

export const FlexibleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderWapper = styled(FlexibleDiv)`
  width: 100%;
  height: 80px;
  background: #ffffff;
  justify-content: space-between;
`;

export const Logo = styled.div`
  width: 20%;
  color: #22183c;
  font-size: 32px;
  font-weight: 700;
  line-height: 44px;
  font-style: normal;
  font-family: "Manrope";
`;
export const Ul = styled(FlexibleDiv)`
  width: 60%;
  justify-content: space-evenly;

  li {
    /* color: ${colors.primary}; */
    font-size: 16px;
    list-style: none;
    font-weight: 700;
    line-height: 22px;
    font-style: normal;

    a {
      color: #000000;
      font-size: 16px;
      font-weight: 400;
      line-height: 22px;
      font-style: normal;
      text-decoration: none;
      font-family: "Manrope";
    }
  }

  .active {
    background: -webkit-linear-gradient(${colors.primary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const SearchWrapper = styled(FlexibleDiv)`
  width: 30%;
`;
export const Profile = styled(FlexibleDiv)`
  width: 10%;
  height: 100%;
  justify-content: space-evenly;
`;

export const Image = styled.img`
  padding: 5px;
  overflow: hidden;
  object-fit: cover;
  max-width: max-content;
  max-height: max-content;
`;
