import React, { useState, useEffect } from "react";
import Container from "../components/Container/Container";
import AddTopicForm from "../components/AddTopicForm/AddTopicForm";
import StyledList from "../components/List/List";
import Topic from "../components/Topic/Topic";
import Error from "../components/Error/Error";
import Loading from "../components/Loading/Loading";
import styled from "styled-components";
import { getTopics } from "../methods/methods";

const TopicPage = ({ topicId }) => {
  return <div>Topic: {topicId}</div>;
};

export default TopicPage;
