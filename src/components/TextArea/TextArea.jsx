import React from "react";
import styled from "styled-components";
import colors from "../../utils/colors";
import { useField } from "formik";
import FormError from "../FormError/FormError";

const StyledTextArea = styled.textarea`
  background: ${colors.gray};
  width: 90%;
  height: 70%;
  padding: 12px 20px;
  margin: 1% auto;
  border: 0;
  box-sizing: border-box;
  resize: vertical;
  border-radius: 10px;

  ::placeholder {
    text-size: 1.5em;
    color: black;
  }

  :focus {
    outline-color: ${colors.blue};
  }
`;

const TextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <StyledTextArea className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? <FormError>{meta.error}</FormError> : null}
    </>
  );
};

export default TextArea;
