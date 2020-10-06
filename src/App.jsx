import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import AddTopicForm from "./components/AddTopicForm/AddTopicForm";
import StyledList from "./components/List/List";
import Topic from "./components/Topic/Topic";
import Error from "./components/Error/Error";
import Loading from "./components/Loading/Loading";
import styled from "styled-components";
import colors from "./utils/colors";
import { getTopics } from "./methods/methods";

const Main = styled.main`
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${colors.light_gray};
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

  @media (max-width: 768px) {
    display: none;
  }
`;

const App = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [posted, setPosted] = useState(false);

  useEffect(() => {
    getTopics()(setItems, setIsLoaded, setError);
  }, [posted]);

  const renderTopics = (shrink = false, offset = 0, sort = false) => {
    function compare(a, b) {
      return b.created - a.created;
    }

    if (error) {
      return <Error>Error: {error.message}</Error>;
    } else if (!isLoaded) {
      return <Loading>Loading...</Loading>;
    } else {
      return (
        <StyledList>
          {items
            .sort((a, b) => (sort ? compare(a, b) : 0))
            .slice(offset, offset + 10)
            .map((item) => (
              <Topic
                key={item.id}
                topic={item.topic}
                created={item.created}
                createdBy={item.created_by}
                lastResponse={item.last_response}
                shrink={shrink}
              />
            ))}
        </StyledList>
      );
    }
  };

  return (
    <Main>
      <Header title="Forum" />
      <Body>
        <MainContent>
          <AddTopicForm posted={posted} setPosted={setPosted} />
          <Container title="Topics">{renderTopics()}</Container>
        </MainContent>
        <Sidebar>
          <Container title="Popular">{renderTopics(true)}</Container>
        </Sidebar>
      </Body>
    </Main>
  );
};

export default App;
