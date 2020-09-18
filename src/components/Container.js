import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledContainer = styled.div`
  background: #f2f2f2;
  border-radius: 10px;
  min-width: ${({ minWidth }) => minWidth};
  margin: 50px;
`;

const StyledContainerHeader = styled.div`
  background: #5568d9;
  height: calc(var(--containerHeaderHeight) - 12.5px);
  border-radius: 10px 10px 0 0;
  font-size: 20px;
  color: #fefefe;
  padding: calc(calc(var(--containerHeaderHeight) - 25px) / 2);
`;

const Container = ({ title, content, minWidth }) => {
  return (
    <StyledContainer minWidth={minWidth}>
      <StyledContainerHeader>{title}</StyledContainerHeader>
      {content}
    </StyledContainer>
  );
};

export default Container;

Container.propTypes = {
  title: PropTypes.string,
  content: PropTypes.any,
  flex: PropTypes.string,
  minWidth: PropTypes.string,
};
