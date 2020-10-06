import styled from "styled-components";
import colors from "../../utils/colors";

const StyledTextArea = styled.textarea`
  background: ${colors.gray};
  width: 90%;
  height: 70%;
  padding: 12px 20px;
  margin: 1% auto;
  border: 0;
  box-sizing: border-box;
  resize: vertical;
  border-radius: 10px;

  ::placeholder {
    text-size: 1.5em;
    color: black;
  }

  :focus {
    outline-color: ${colors.blue};
  }
`;

export default StyledTextArea;
