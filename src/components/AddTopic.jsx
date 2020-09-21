import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Button from "./Button";
import colors from "../utils/colors";

const Input = styled.input`
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
`;

const TextArea = styled.textarea`
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
      <Input placeholder={placeholder1} onClick={() => setIsFocus(true)} />
      {isFocus && (
        <>
          <TextArea placeholder={placeholder2} />
          <Input placeholder={placeholder3} />
          <Input placeholder={placeholder4} />
          <ButtonsWrapper>
            <Button primary>Add</Button>
            <Button onClick={() => setIsFocus(false)}>Cancel</Button>
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
