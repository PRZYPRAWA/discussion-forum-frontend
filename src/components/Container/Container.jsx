import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import colors from "../../utils/colors";
import StyledLink from "../StyledLink/StyledLink";

const Wrapper = styled.div`
  border-radius: 1em;
  overflow: hidden;
  box-shadow: 1px 0 0.5px ${colors.shadow};
`;

const Header = styled.div`
  background: ${colors.blue};
  font-size: 1.25em;
  color: ${colors.white};
  padding: 0.5em 1em;
`;

const Container = ({ title, children, to }) => (
  <Wrapper>
    <Header>
      {title && to ? (
        <StyledLink color={colors.white} to={to}>
          {title}
        </StyledLink>
      ) : (
        <>{title}</>
      )}
    </Header>
    {children}
  </Wrapper>
);

export default Container;

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
