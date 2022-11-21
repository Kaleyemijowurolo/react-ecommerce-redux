import styled from "styled-components";
// import { colors } from "../../lib/colors";

export const ProductsWraper = styled.div`
  width: 100%;
  display: flex;
  min-height: 100vh;
  justify-content: space-between;
`;
export const SideBar = styled.aside`
  flex-basis: 20%;
  min-height: 100%;
`;
export const ProductBoxWrapper = styled.div`
  flex-basis: 75%;
  min-height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
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
    &:nth-child(3) {
      font-family: "Inter";
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      /* identical to box height */
      text-decoration-line: line-through;
      color: #000000;
    }
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
  overflow: hidden;
  background: transparent;
  /* border: solid red; */
`;
