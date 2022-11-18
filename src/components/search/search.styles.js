import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid #c4c4c4;

  input {
    flex: 1;
    border: none;
    outline: none;
  }

  div {
    margin-left: 5px;
    cursor: pointer;
  }
`;
