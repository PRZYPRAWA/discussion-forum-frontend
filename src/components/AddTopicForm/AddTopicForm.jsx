import React, { useState } from "react";
import styled from "styled-components";
import StyledButton from "../Button/Button";
import StyledInput from "../Input/StyledInput";
import StyledTextArea from "../TextArea/StyledTextArea";
import colors from "../../utils/colors";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import { postTopic } from "../../methods/methods";
import { constants } from "../../constants/constants";

const StyledForm = styled(Form)`
  background: ${colors.very_light_gray};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1em;
  box-shadow: 1px 1px 2px ${colors.gray};
`;

const FormError = styled.div`
  font-size: 12px;
  color: red;
  margin-top: 0.1rem;
  padding-left: 2rem;
  align-self: flex-start;
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
      {meta.touched && meta.error ? <FormError>{meta.error}</FormError> : null}
    </>
  );
};

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

const AddTopicForm = ({ posted, setPosted }) => {
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
          .max(constants.topicMax, "Must be 200 characters or less")
          .required("Required"),
        content: Yup.string()
          .max(constants.contentMax, "Must be 2000 characters or less")
          .required("Required"),
        username: Yup.string()
          .max(constants.usernameMax, "Must be 50 characters or less")
          .required("Required"),
        email: Yup.string()
          .email("Invalid email addresss`")
          .required("Required"),
      })}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        await postTopic(values);
        setSubmitting(false);
        resetForm(initialValues);
        setPosted(!posted);
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
