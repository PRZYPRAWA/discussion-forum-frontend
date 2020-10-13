import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import colors from "../../utils/colors";
import formatDate from "../../utils/formatDate";
import StyledLink from "../StyledLink/StyledLink";

const StyledParagraph = styled.p`
  margin: 0;
  padding: 0;
  overflow-wrap: break-word;
`;

const StyledTopic = styled.li`
  background: ${colors.light_gray};
  flex-grow: 1;
  text-decoration: none;
  list-style-type: none;
  min-height: 3em;
  border-top 1.5px solid ${colors.gray};
  padding: 1% 2%;
  position: relative;
  transition: .2s ease;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    height: 4em;
  }
`;

const Author = styled.div`
  margin: 0.5% 0;
  font-size: 0.8em;
`;

const LastResponse = styled.div`
  font-size: 0.8em;
`;

const Topic = ({
  topicId,
  topic,
  created,
  createdBy,
  lastResponse,
  shrink,
}) => {
  return (
    <StyledTopic>
      <StyledLink color={colors.dark} to={`/topics/${topicId}`}>
        <StyledParagraph>{topic}</StyledParagraph>
      </StyledLink>
      <Author>{shrink && `By ${createdBy}, ${formatDate(created)}`}</Author>
      {lastResponse && (
        <LastResponse shrink={shrink}>
          Last response: {formatDate(lastResponse)}
        </LastResponse>
      )}
    </StyledTopic>
  );
};

export default Topic;

Topic.propTypes = {
  topic: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  createdBy: PropTypes.string.isRequired,
  lastResponse: PropTypes.string,
  shrink: PropTypes.bool,
};
