import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import colors from "../utils/colors";

const Wrapper = styled.div`
  // background: ${colors.very_light_gray};
  border-radius: 1em;
  overflow: hidden;
  flex-grow: 1;
`;

const Header = styled.div`
  background: ${colors.blue};
  font-size: 1.25em;
  color: ${colors.white};
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
};
