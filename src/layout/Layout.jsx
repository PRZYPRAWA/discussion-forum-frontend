import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  padding: 1em;
  flex-grow: 1;
  width: 100%;
  max-width: 1000px;
  margin: auto;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
`;

export const MainContent = styled(Section)`
  flex-grow: 1;
`;

export const Sidebar = styled(Section)`
  min-width: 300px;

  @media (max-width: 768px) {
    display: none;
  }
`;
