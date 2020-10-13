import React, { useState } from "react";
import styled from "styled-components";
import StyledButton from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import TextArea from "../TextArea/TextArea";
import colors from "../../utils/colors";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { postTopic } from "../../methods/methods";
import { constants } from "../../constants/constants";

const StyledForm = styled(Form)`
  background: ${colors.light_gray};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1em;
  box-shadow: 1px 1px 2px ${colors.gray};
`;

const ButtonsWrapper = styled.div`
  align-self: flex-end;
  display: flex;
  padding: 12px 20px;
  justify-content: flex-end;
  width: 30%;
`;

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
          .max(constants.TOPIC_MAX, "Must be 200 characters or less")
          .required("Required"),
        content: Yup.string()
          .max(constants.CONTENT_MAX, "Must be 2000 characters or less")
          .required("Required"),
        username: Yup.string()
          .max(constants.USERNAME_MAX, "Must be 50 characters or less")
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
                Submit
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
