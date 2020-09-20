import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  background: #f2f2f2;
  border-radius: 1em;
  overflow: hidden;
  flex-grow: 1;
`;

const Header = styled.div`
  background: #5568d9;
  font-size: 1.25em;
  color: #fefefe;
  padding: 0.5em 1em;
`;

const Container = ({ title, children }) => (
  <Wrapper>
    <Header>{title}</Header>
    {children}
  </Wrapper>
);

export default Container;

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  flex: PropTypes.string,
};
