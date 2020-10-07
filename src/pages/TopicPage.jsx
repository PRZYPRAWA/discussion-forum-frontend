import React, { useState, useEffect } from "react";
import Container from "../components/Container/Container";
import StyledList from "../components/List/List";
import Topic from "../components/Topic/Topic";
import Post from "../components/Post/Post";
import Error from "../components/Error/Error";
import Loading from "../components/Loading/Loading";
import { getTopicWithPosts } from "../methods/methods";
import { Body, MainContent, Sidebar } from "../layout/Layout";

const TopicPage = ({ topicId }) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState({});
  const [loadPosts, setLoadPosts] = useState(false);

  useEffect(() => {
    getTopicWithPosts(topicId)()(setItems, setIsLoaded, setError);
  }, [loadPosts]);

  const renderTopics = (shrink = false, offset = 0) => {
    if (error) {
      return <Error>Error: {error.message}</Error>;
    } else if (!isLoaded) {
      return <Loading>Loading...</Loading>;
    } else {
      const topic = items["topic"];
      const posts = items["posts"];

      return (
        <>
          <Topic
            topicId={topic.id}
            topic={topic.topic}
            created={topic.created}
            createdBy={topic.created_by}
            shrink={shrink}
          />

          <div>COŚ POMIEDZY</div>
          <StyledList>
            {posts &&
              posts.map((post) => (
                <Post
                  key={post.id}
                  content={post.content}
                  created={post.created}
                  username={post.username}
                />
              ))}
          </StyledList>
        </>
      );
    }
  };

  return (
    <Body>
      <MainContent>
        <Container to="/">{renderTopics()}</Container>
      </MainContent>
      <Sidebar>NOTHING</Sidebar>
    </Body>
  );
};

export default TopicPage;
