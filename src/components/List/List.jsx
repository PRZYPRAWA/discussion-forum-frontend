import styled from "styled-components";

const StyledList = styled.ul`
  // list-style-type: none;
  margin: 0;
  padding: 0;

  > * {
    &:last-child {
      border-bottom-right-radius: 1em;
      border-bottom-left-radius: 1em;
    }
  }
`;

export default StyledList;
