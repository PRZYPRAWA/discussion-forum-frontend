import React from "react";
import Header from "./components/Header/Header";
import styled from "styled-components";
import colors from "./utils/colors";
import { Router } from "@reach/router";
import MainPage from "./pages/MainPage";
import TopicPage from "./pages/TopicPage";
import { rules } from "./utils/rules";

const Main = styled.main`
  min-height: 100%;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  background: ${colors.gray};
`;

const App = () => {
  return (
    <Main>
      <Header title="Forum" />
      <Router>
        <MainPage path="/" />
        <TopicPage path="topics/:topicId" rules={rules} />
      </Router>
    </Main>
  );
};

export default App;
