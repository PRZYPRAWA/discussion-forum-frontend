import React, { useState, useEffect } from "react";
import Container from "../components/Container/Container";
import StyledList from "../components/List/List";
import Topic from "../components/Topic/Topic";
import Post from "../components/Post/Post";
import Error from "../components/Error/Error";
import AddPostForm from "../components/AddPostForm/AddPostForm";
import Loading from "../components/Loading/Loading";
import Rules from "../components/Rules/Rules";
import { getTopicWithPosts } from "../methods/methods";
import { Body, MainContent, Sidebar } from "../layout/Layout";

const TopicPage = ({ topicId, rules }) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState({});
  const [posted, setPosted] = useState(false);
  const [loadPosts, setLoadPosts] = useState(false);

  useEffect(() => {
    getTopicWithPosts(topicId)()(setItems, setIsLoaded, setError);
  }, [loadPosts, topicId]);

  const renderTopicWithPosts = (shrink = false, offset = 0) => {
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
            overflow="auto"
          />

          <AddPostForm
            posted={posted}
            setPosted={setPosted}
            topicId={topic.id}
          />
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
        <Container to="/">{renderTopicWithPosts()}</Container>
      </MainContent>
      <Sidebar>
        <Rules rules={rules}></Rules>
      </Sidebar>
    </Body>
  );
};

export default TopicPage;
