import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import StyledButton from "./Button";
import colors from "../utils/colors";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

const StyledInput = styled.input`
  background: ${colors.gray};
  width: 90%;
  height: 1em;
  padding: 12px 20px;
  margin: 1% auto;
  border: 0;
  box-sizing: border-box;
  border-radius: 10px;

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
  border-radius: 10px;

  ::placeholder {
    text-size: 1.5em;
    color: black;
  }

  :focus {
    outline-color: ${colors.blue};
  }
`;

const StyledForm = styled(Form)`
  background: ${colors.very_light_gray};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1em;

  .error {
    font-size: 12px;
    color: red;
    margin-top: 0.25rem;
  }
`;

const ButtonsWrapper = styled.div`
  align-self: flex-end;
  display: flex;
  padding: 12px 20px;
  justify-content: flex-end;
  width: 30%;
`;

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <StyledInput className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const TextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <StyledTextArea className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const postTopic = (values) => {
  fetch("/topics", {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

const AddTopicForm = () => {
  const [isFocus, setIsFocus] = useState(false);
  const initialValues = {
    topic: "",
    content: "",
    username: "",
    email: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        topic: Yup.string()
          .max(200, "Must be 200 characters or less")
          .required("Required"),
        content: Yup.string()
          .max(2000, "Must be 2000 characters or less")
          .required("Required"),
        username: Yup.string()
          .max(50, "Must be 50 characters or less")
          .required("Required"),
        email: Yup.string()
          .email("Invalid email addresss`")
          .required("Required"),
      })}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        await postTopic(values);
        setSubmitting(false);
        resetForm(initialValues);
        console.log(JSON.stringify(values, null, 2));
      }}
      onReset={() => {
        setIsFocus(false);
      }}
    >
      <StyledForm>
        <TextInput
          name="topic"
          type="text"
          placeholder="Add Topic"
          onClick={() => setIsFocus(true)}
        />
        {isFocus && (
          <>
            <TextArea name="content" type="text" placeholder="Content" />
            <TextInput name="username" type="text" placeholder="Username" />
            <TextInput name="email" type="email" placeholder="E-mail" />
            <ButtonsWrapper>
              <StyledButton primary type="submit">
                Add
              </StyledButton>
              <StyledButton type="reset">Cancel</StyledButton>
            </ButtonsWrapper>
          </>
        )}
      </StyledForm>
    </Formik>
  );
};

export default AddTopicForm;
