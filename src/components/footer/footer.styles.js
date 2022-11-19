import styled from "styled-components";
import { colors } from "../../lib/colors";

export const FooterWraper = styled.section`
  width: 100%;
  height: 424px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    107.73deg,
    #2b1e2f 0%,
    #2a1630 46.88%,
    #451121 100%
  );
`;
export const FooterDiv = styled.div`
  width: 85%;
  /* height: 80%; */
  display: flex;
  padding: 1rem 0;
  flex-direction: column;
  justify-content: space-between;
`;
export const Footer1 = styled.footer`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Footer2 = styled.footer`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #e0e0e0;

  .copyright {
    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
    font-style: normal;
    font-family: "Manrope";
  }

  .social {
    display: flex;
    font-weight: 700;
    align-items: center;
    justify-content: space-between;

    svg {
      margin: 0 5px;
    }
  }
`;
export const Ul = styled.ul`
  text-align: left;
  max-width: 250px;
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
    color: ${colors.white};
  }
  .btn {
    /* margin: 2px 0; */
  }
`;
