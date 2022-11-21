import styled from "styled-components";
// import { colors } from "../../lib/colors";

export const ProductsWraper = styled.div`
  width: 100%;
  display: flex;
  border: solid red;
  min-height: 100vh;
  justify-content: space-between;
`;
export const SideBar = styled.aside`
  width: 20%;
  min-height: 100%;
  border: solid blue;
`;
export const ProductBoxWrapper = styled.section`
  flex: 1;
  width: 15%;
  min-height: 100%;
  border: solid yellow;
`;
export const ProductBox = styled.div`
  width: 285px;
  overflow: hidden;
  height: max-content;

  p {
    /* margin: 1rem 0 !important; */
    color: #4f4f4f;
    font-size: 14px;
    font-weight: 500;
    line-height: 19px;
  }
  h3 {
    margin: 0;
    padding: 0;
    color: #333333;
    font-size: 16px;
    line-height: 22px;
    font-weight: 700;
  }
`;
export const ProductImageBox = styled.div`
  width: 285px;
  height: 285px;
  display: flex;
  background: #f2f2f2;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  position: relative;

  .btn {
    position: absolute;
    left: 0;
    top: 0;
    padding: 10px;
  }
`;

export const Image = styled.img`
  width: 165px;
  height: 210px;
  border: solid red;
`;
