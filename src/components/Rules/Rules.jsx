import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Container from "../Container/Container";
import StyledList from "../List/List";
import colors from "../../utils/colors";

const Rule = styled.li`
  background: ${colors.light_gray};
  flex-grow: 1;
  min-height: 2rem;
  border-top 1.5px solid ${colors.gray};
  padding: 1% 2%;
  position: relative;
  transition: .2s ease;

  @media (max-width: 600px) {
    height: 2em;
  }
`;

const Rules = ({ rules }) => {
  return (
    <Container title="Rules">
      <StyledList>
        {rules && rules.map((rule) => <Rule key={rule}>{rule}</Rule>)}
      </StyledList>
    </Container>
  );
};

export default Rules;

Rules.propTypes = {
  rules: PropTypes.array.isRequired,
};
