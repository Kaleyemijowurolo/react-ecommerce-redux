import styled from "styled-components";
import { colors } from "../../lib/colors";

export const ProductsWraper = styled.div`
  min-height: 100vh;
  width: 100%;
  border: solid red;
  display: flex;
  justify-content: space-between;
`;
export const SideBar = styled.aside`
  min-height: 100%;
  width: 20%;
  border: solid blue;
`;
export const ProductBox = styled.section`
  min-height: 100%;
  width: 15%;
  border: solid yellow;
  flex: 1;
`;
