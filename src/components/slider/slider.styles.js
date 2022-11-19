import styled from "styled-components";
import { colors } from "../../lib/colors";

export const SliderWrapper = styled.div`
  height: 300px;
  display: flex;
  overflow-y: scroll;
  align-items: center;
  justify-content: space-between;

  .left_arrow .right_arrow {
    cursor: pointer;
  }
`;
