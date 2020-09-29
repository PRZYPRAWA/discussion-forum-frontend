import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import StyledButton from "./Button";
import colors from "../utils/colors";

const StyledInput = styled.input`
  background: ${colors.gray};
  width: 90%;
  height: 1em;
  padding: 12px 20px;
  margin: 1% auto;
  border: 0;
  box-sizing: border-box;

  ::placeholder {
    text-size: 1.5em;
    color: black;
  }

  :focus {
    outline-color: ${colors.blue};
  }
`;

const StyledTextArea = styled.textarea`
  background: ${colors.gray};
  width: 90%;
  height: 70%;
  padding: 12px 20px;
  margin: 1% auto;
  border: 0;
  box-sizing: border-box;
  resize: vertical;

  &::placeholder {
    text-size: 1.5em;
    color: black;
  }

  :focus {
    outline-color: ${colors.blue};
  }
`;

const Wrapper = styled.div`
  background: ${colors.very_light_gray};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1em;
`;

const ButtonsWrapper = styled.div`
  align-self: flex-end;
  display: flex;
  padding: 12px 20px;
  justify-content: flex-end;
  width: 30%;
`;

const AddTopic = ({
  placeholder1,
  placeholder2,
  placeholder3,
  placeholder4,
}) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <Wrapper>
      <StyledInput
        placeholder={placeholder1}
        onClick={() => setIsFocus(true)}
      />
      {isFocus && (
        <>
          <StyledTextArea placeholder={placeholder2} />
          <StyledInput placeholder={placeholder3} />
          <StyledInput placeholder={placeholder4} />
          <ButtonsWrapper>
            <StyledButton primary>Add</StyledButton>
            <StyledButton onClick={() => setIsFocus(false)}>
              Cancel
            </StyledButton>
          </ButtonsWrapper>
        </>
      )}
    </Wrapper>
  );
};

export default AddTopic;

AddTopic.propTypes = {
  placeholder: PropTypes.string,
};
