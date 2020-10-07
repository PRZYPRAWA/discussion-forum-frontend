import React, { useState, useEffect } from "react";
import Container from "../components/Container/Container";
import AddTopicForm from "../components/AddTopicForm/AddTopicForm";
import StyledList from "../components/List/List";
import Topic from "../components/Topic/Topic";
import Error from "../components/Error/Error";
import Loading from "../components/Loading/Loading";
import { getTopics } from "../methods/methods";
import { Body, MainContent, Sidebar } from "../layout/Layout";

const MainPage = () => {
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
                topicId={item.id}
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
    <Body>
      <MainContent>
        <AddTopicForm posted={posted} setPosted={setPosted} />
        <Container title="Topics" to="/topics">
          {renderTopics()}
        </Container>
      </MainContent>
      <Sidebar>
        <Container title="Popular" to="/popular">
          {renderTopics(true)}
        </Container>
      </Sidebar>
    </Body>
  );
};

export default MainPage;
