import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import colors from "../../utils/colors";
import StyledLink from "../StyledLink/StyledLink";

const HeaderContainer = styled.header`
  color: ${colors.white};
  background: ${colors.dark};
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
      <Title>
        <StyledLink color={colors.white} to="/">
          {title}
        </StyledLink>
      </Title>
    </HeaderContainer>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string,
};
