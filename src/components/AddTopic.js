import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledInput = styled.input`
  background: #bfbfbf;
  width: 80%;
  height: 60%;
  padding: 12px 20px;
  margin: 0 auto;
  border: 0;
  box-sizing: border-box;
`;

const StyledInputContainer = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  background: #f2f2f2;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddTopic = ({ placeholder }) => {
  return (
    <StyledInputContainer>
      <StyledInput placeholder={placeholder} />
    </StyledInputContainer>
  );
};

export default AddTopic;

AddTopic.propTypes = {
  placeholder: PropTypes.string,
};
