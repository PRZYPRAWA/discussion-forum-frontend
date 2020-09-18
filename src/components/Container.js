import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledContainer = styled.div`
  background: #f2f2f2;
  border-radius: 10px;
  min-width: ${({ minWidth }) => minWidth};
  grid-row: ${({ gridRow }) => gridRow};
  grid-column: ${({ gridCol }) => gridCol};
`;

const StyledContainerHeader = styled.div`
  background: #5568d9;
  height: calc(var(--containerHeaderHeight) - 12.5px);
  border-radius: 10px 10px 0px 0px;
  font-size: 20px;
  color: #fefefe;
  padding-top: calc(calc(var(--containerHeaderHeight) - 25px) / 2);
  padding-left: 12.5px;
`;

const Container = ({ title, content, gridRow, gridCol, minWidth }) => {
  return (
    <StyledContainer gridRow={gridRow} gridCol={gridCol} minWidth={minWidth}>
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
