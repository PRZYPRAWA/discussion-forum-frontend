import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import colors from "../../utils/colors";
import formatDate from "../../utils/formatDate";

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

const Post = ({ content, created, username }) => {
  return (
    <StyledTopic>
      {content}
      <Author>{`By ${username}, ${formatDate(created)}`}</Author>
    </StyledTopic>
  );
};

export default Post;

Post.propTypes = {
  content: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};
