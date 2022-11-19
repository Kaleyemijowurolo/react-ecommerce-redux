import styled from "styled-components";
import { colors } from "../../lib/colors";

export const SliderWrapper = styled.div`
  height: 300px;
  position: relative;

  .container {
    height: 100%;
    width: 100%;
    display: flex;
    overflow-x: scroll;
    align-items: center;
    justify-content: space-between;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .left_arrow {
    cursor: pointer;
    position: absolute;
    left: -4rem;
    top: 50%;
  }
  .right_arrow {
    cursor: pointer;
    position: absolute;
    right: -2.2rem;
    top: 50%;
  }
`;
