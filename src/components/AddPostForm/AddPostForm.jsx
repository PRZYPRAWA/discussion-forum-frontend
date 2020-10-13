import React, { useState } from "react";
import styled from "styled-components";
import StyledButton from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import TextArea from "../TextArea/TextArea";
import colors from "../../utils/colors";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { postPost } from "../../methods/methods";
import { constants } from "../../constants/constants";

const StyledForm = styled(Form)`
  background: ${colors.light_gray};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-top: 0.5em;
`;

const ButtonsWrapper = styled.div`
  align-self: flex-end;
  display: flex;
  padding: 12px 20px;
  justify-content: flex-end;
  width: 30%;
`;

const StyledTextArea = styled(TextArea)`
  height: 50%;
`;

const AddPostForm = ({ posted, setPosted, topicId }) => {
  const [isFocus, setIsFocus] = useState(false);
  const initialValues = {
    content: "",
    username: "",
    email: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
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
        await postPost(values, topicId);
        setSubmitting(false);
        resetForm(initialValues);
        setPosted(!posted);
      }}
      onReset={() => {
        setIsFocus(false);
      }}
    >
      <StyledForm>
        <StyledTextArea
          name="content"
          type="text"
          placeholder="What do you think?"
          onClick={() => setIsFocus(true)}
        />
        {isFocus && (
          <>
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

export default AddPostForm;
