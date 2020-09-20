import React from "react";
import Header from "components/Header";
import Container from "components/Container";
import AddTopic from "components/AddTopic";
import styled from "styled-components";

const Main = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #e3e3e3;
`;

const Body = styled.div`
  display: flex;
  padding: 1em;
  flex-grow: 1;
  width: 100%;
  max-width: 1000px;
  margin: auto;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
`;

const MainContent = styled(Section)`
  flex-grow: 1;
`;

const Sidebar = styled(Section)`
  min-width: 300px;
`;

const App = () => (
  <Main>
    <Header title="Forum" />
    <Body>
      <MainContent>
        <AddTopic placeholder="Add Topic" />
        <Container title="Topics">
          CONTENT
        </Container>
      </MainContent>
      <Sidebar>
        <Container title="Popular">
          CONTENT
        </Container>
      </Sidebar>
    </Body>
  </Main>
);

export default App;
