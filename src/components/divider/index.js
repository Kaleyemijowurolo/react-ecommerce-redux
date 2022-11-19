import React from "react";
import styled from "styled-components";
import { colors } from "../../lib/colors";

const HorizontalLine = ({ color, style }) => <Hr style={style} color={color} />;

export default HorizontalLine;

const Hr = styled.hr`
  margin: 1rem 0;
  border: ${({ color }) =>
    color ? `1px solid ${colors}` : `1px solid ${colors.outline}`};
`;
