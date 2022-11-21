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
  height: 100%;
  flex-basis: 75%;

  .heading {
    height: 100px;
    display: flex column;
    justify-content: space-between;

    .title {
      display: flex;
      margin-bottom: 10px;
      align-items: center;
      justify-content: space-between;

      h3 {
        margin: 0;
        color: #000000;
        font-weight: 700;
        font-size: 24px;
        line-height: 33px;
      }

      span {
        font-weight: 700;
        font-size: 14px;
        line-height: 19px;
        color: #4f4f4f;
      }
    }
  }

  .container {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px 10px;
  }

  .more-btn {
    margin: 2rem 0;
    text-align: center;
  }
`;
export const ProductBox = styled.div`
  width: 285px;
  /* overflow: hidden; */
  height: max-content;
  margin: 5px 0;

  p {
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

  .h3 {
    background: linear-gradient(107.73deg, #d81f5a 0%, #8438bf 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    font-weight: "400";
  }
`;
export const ProductImageBox = styled.div`
  width: 285px;
  height: 285px;
  padding: 1px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  transition: all 200ms ease-in-out;

  &:hover {
    background: linear-gradient(107.73deg, #d81f5a 0%, #8438bf 100%);
  }

  .PIB-wrapper {
    height: 100%;
    width: 100%;
    border: none;
    display: flex;
    background: #f2f2f2;
    align-items: center;
    border-radius: 10px;
    justify-content: center;
    position: relative;
  }

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
`;
