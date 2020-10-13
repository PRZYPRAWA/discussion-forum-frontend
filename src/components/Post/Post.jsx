import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import colors from "../../utils/colors";
import formatDate from "../../utils/formatDate";

const StyledTopic = styled.li`
  background: ${colors.light_gray};
  flex-grow: 1;
  text-decoration: none;
  list-style-type: none;
  min-height: 4rem;
  border-top 1.5px solid ${colors.gray};
  padding: 1% 2%;
  position: relative;
  transition: .2s ease;

  @media (max-width: 600px) {
    height: 4em;
  }
`;

const Author = styled.div`
  margin-top: 0.5em;
  font-size: 0.8em;
`;

const StyledP = styled.p`
  margin: 0.2em 0;
`;

const Post = ({ content, created, username }) => {
  return (
    <StyledTopic>
      {content.split("\n").map((elem, i) => (
        <StyledP key={i}>{elem}</StyledP>
      ))}
      {created && <Author>{`By ${username}, ${formatDate(created)}`}</Author>}
    </StyledTopic>
  );
};

export default Post;

Post.propTypes = {
  content: PropTypes.string.isRequired,
  created: PropTypes.string,
  username: PropTypes.string,
};
