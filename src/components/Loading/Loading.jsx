import styled from "styled-components";
import colors from "../../utils/colors";

const Loading = styled.div`
  background: ${colors.light_gray};
  flex-grow: 1;
  height: 3em;
  border-top 1.5px solid ${colors.gray};
  padding: 1% 2%;
  position: relative;
  transition: .2s ease;
  border-bottom-right-radius: 1em;
  border-bottom-left-radius: 1em;

  @media (max-width: 600px) {
    height: 4em;
  }
`;

export default Loading;
