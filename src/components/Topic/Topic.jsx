import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import colors from "../../utils/colors";
import formatDate from "../../utils/formatDate";
import StyledLink from "../StyledLink/StyledLink";

const StyledTopic = styled.li`
  background: ${colors.very_light_gray};
  flex-grow: 1;
  text-decoration: none;
  list-style-type: none;
  height: 3em;
  border-top 1.5px solid ${colors.gray};
  padding: 1% 2%;
  position: relative;
  transition: .2s ease;

  :hover {
    background: ${colors.light_gray};
  }

  @media (max-width: 600px) {
    height: 4em;
  }
`;

const Author = styled.div`
  margin-top: 0.5%;
  font-size: 0.8em;
`;

const LastResponse = styled.div`
  font-size: 0.8em;
  position: absolute;
  right: 10px;
  top: 5px;

  ${({ shrink }) =>
    shrink &&
    css`
      position: static;
    `};

  @media (max-width: 600px) {
    position: static;
  }
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
        {topic}
      </StyledLink>
      <Author>{shrink || `By ${createdBy}, ${formatDate(created)}`}</Author>
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
