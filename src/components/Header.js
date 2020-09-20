import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const HeaderContainer = styled.header`
  font-size: 72px;
  color: #fefefe;
  height: 100px;
  width: 100%;
  background: #262626;
  padding-left: 40px;
  padding-top: 14px;
`;

const Header = ({ title }) => {
  return <HeaderContainer>{title}</HeaderContainer>;
};

export default Header;

Header.propTypes = {
  title: PropTypes.string,
};
