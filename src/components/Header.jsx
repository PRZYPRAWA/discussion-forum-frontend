import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const HeaderContainer = styled.header`
  color: #fefefe;
  background: #262626;
  padding: 1em 3em 0;
  display: flex;
  align-items: center;
`;

const Title = styled.span`
  font-size: 72px;
  margin: 0;
`;

const Header = ({ title }) => {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
    </HeaderContainer>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string,
};
