import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import AddTopic from "./components/AddTopic";
import StyledList from "./components/List";
import Topic from "./components/Topic";
import styled from "styled-components";
import colors from "./utils/colors";

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

  useEffect(() => {
    fetch("/topics")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const renderTopics = () => {
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      console.table(items);
      return (
        <StyledList>
          {items.slice(0, 9).map((item) => (
            <Topic
              key={item.id}
              topic={item.topic}
              created={item.created}
              createdBy={item.created_by}
              lastResponse={item.last_response}
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
          <AddTopic
            placeholder1="Add Topic"
            placeholder2="Content"
            placeholder3="Username"
            placeholder4="Email"
          />
          <Container title="Topics">{renderTopics()}</Container>
        </MainContent>
        <Sidebar>
          <Container title="Popular">CONTENT</Container>
        </Sidebar>
      </Body>
    </Main>
  );
};

export default App;
