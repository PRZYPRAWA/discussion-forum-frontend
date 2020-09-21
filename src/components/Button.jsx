import React from "react";
import styled, { css } from "styled-components";
import colors from "../utils/colors";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${colors.blue};
  color: ${colors.blue};
  margin: 0 1em;
  padding: 0.25em 1em;

  ${({ primary }) =>
    primary &&
    css`
      background: ${colors.blue};
      color: white;
    `};
`;

export default Button;
