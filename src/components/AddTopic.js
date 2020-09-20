import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledInput = styled.input`
  background: #bfbfbf;
  width: 90%;
  height: 60%;
  padding: 12px 20px;
  margin: 0 auto;
  border: 0;
  box-sizing: border-box;

  &::placeholder {
    text-size: 1.5em;
    color: black;
  }
`;

const StyledInputContainer = styled.div`
  background: #f2f2f2;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: ${({ gridCol }) => gridCol};
  grid-row: ${({ gridRow }) => gridRow};
`;

const AddTopic = ({ placeholder, gridCol, gridRow }) => {
  return (
    <StyledInputContainer gridCol={gridCol} gridRow={gridRow}>
      <StyledInput placeholder={placeholder} />
    </StyledInputContainer>
  );
};

export default AddTopic;

AddTopic.propTypes = {
  placeholder: PropTypes.string,
};
