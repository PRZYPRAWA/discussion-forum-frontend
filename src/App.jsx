import React from "react";
import Header from "./components/Header/Header";
import styled from "styled-components";
import colors from "./utils/colors";
import { Router } from "@reach/router";
import MainPage from "./pages/MainPage";
import TopicPage from "./pages/TopicPage";

const Main = styled.main`
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${colors.light_gray};
`;

const App = () => {
  return (
    <Main>
      <Header title="Forum" />
      <Router>
        <MainPage path="/" />
        <Paths path="topics" content="TOPICS" />
        <Paths path="popular" content="POPULAR" />
        <TopicPage path="topics/:topicId" />
      </Router>
    </Main>
  );
};

const Paths = ({ content }) => {
  return (
    <>
      <div>{content}</div>
    </>
  );
};

export default App;
