import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledContainer = styled.div`
  background: #f2f2f2;
  border-radius: 10px;
  flex: ${({ flex }) => flex};
`;

const StyledContainerHeader = styled.div`
  background: #5568d9;
  height: 50px;
  border-radius: 10px 10px 0px 0px;
  font-size: 20px;
  color: #fefefe;
`;

const Container = ({ title, content, flex }) => {
  return (
    <StyledContainer flex={flex}>
      <StyledContainerHeader>{title}</StyledContainerHeader>
      {content}
    </StyledContainer>
  );
};

export default Container;

Container.propTypes = {
  title: PropTypes.string,
  width: PropTypes.string,
  content: PropTypes.any,
  flex: PropTypes.string,
};
