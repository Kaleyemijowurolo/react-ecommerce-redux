import styled from "styled-components";

export const SliderWrapper = styled.div`
  width: 100%;
  height: 300px;
  position: relative;

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: center;
  }
  ul {
    margin: 0;
    padding: 0;
    color: #fff;
    width: 100%;
    display: flex;
    list-style: none;
    transform: translateX(0);
    justify-content: space-between;
  }

  ul li {
    min-width: 16%;
    flex-shrink: 0;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .left_arrow {
    top: 50%;
    left: -4rem;
    cursor: pointer;
    position: absolute;
  }
  .right_arrow {
    top: 50%;
    right: -2.2rem;
    cursor: pointer;
    position: absolute;
  }
`;
