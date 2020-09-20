import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Input = styled.input`
  background: #bfbfbf;
  width: 80%;
  height: 60%;
  padding: 12px 20px;
  margin: 0 auto;
  border: 0;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  background: #f2f2f2;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;
`;

const AddTopic = ({ placeholder }) => (
  <Wrapper>
    <Input placeholder={placeholder} />
  </Wrapper>
);

export default AddTopic;

AddTopic.propTypes = {
  placeholder: PropTypes.string,
};
