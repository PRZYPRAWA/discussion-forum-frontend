import React, { useState, useEffect } from "react";
import Container from "../components/Container/Container";
import AddTopicForm from "../components/AddTopicForm/AddTopicForm";
import StyledList from "../components/List/List";
import Topic from "../components/Topic/Topic";
import Button from "../components/Button/Button";
import Error from "../components/Error/Error";
import Loading from "../components/Loading/Loading";
import styled from "styled-components";
import { getTopics } from "../methods/methods";
import { constants } from "../constants/constants";
import { Body, MainContent, Sidebar } from "../layout/Layout";

const StyledButton = styled(Button)`
  width: 10em;
`;

const MainPage = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [posted, setPosted] = useState(false);
  const [loadTopics, setLoadTopics] = useState(false);

  useEffect(() => {
    getTopics()([], setItems, setIsLoaded, setError);
  }, [posted]);

  useEffect(() => {
    if (loadTopics) {
      getTopics(constants.LIMIT, constants.LIMIT + 1)(
        items,
        setItems,
        setIsLoaded,
        setError
      );

      setLoadTopics(false);
    }
  }, [loadTopics]);

  const renderTopics = (
    shrink = false,
    sort = false,
    sidebar = false,
    limit = constants.LIMIT
  ) => {
    function compare(a, b) {
      return b.created - a.created;
    }

    if (error) {
      return <Error>Error: {error.message}</Error>;
    } else if (!isLoaded) {
      return <Loading>Loading...</Loading>;
    } else {
      const topics = sidebar
        ? items
            .sort((a, b) => (sort ? compare(a, b) : 0))
            .slice(0, limit)
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
            ))
        : items
            .sort((a, b) => (sort ? compare(a, b) : 0))
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
            ));

      return <StyledList>{topics}</StyledList>;
    }
  };

  return (
    <Body>
      <MainContent>
        <AddTopicForm posted={posted} setPosted={setPosted} />
        <Container title="Topics">{renderTopics((false, true))}</Container>
        {isLoaded && (
          <StyledButton onClick={() => setLoadTopics(!loadTopics)}>
            Load more
          </StyledButton>
        )}
      </MainContent>
      <Sidebar>
        <Container title="Popular">
          {renderTopics(true, true, true, 10)}
        </Container>
      </Sidebar>
    </Body>
  );
};

export default MainPage;
