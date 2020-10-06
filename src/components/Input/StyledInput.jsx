import styled from "styled-components";
import colors from "../../utils/colors";

const StyledInput = styled.input`
  background: ${colors.gray};
  width: 90%;
  height: 1em;
  padding: 12px 20px;
  margin: 1% auto;
  border: 0;
  box-sizing: border-box;
  border-radius: 10px;

  ::placeholder {
    text-size: 1.5em;
    color: black;
  }

  :focus {
    outline-color: ${colors.blue};
  }

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    -webkit-transition: color 9999s ease-out, background-color 9999s ease-out;
    -webkit-transition-delay: 9999s;
  }
`;

export default StyledInput;
