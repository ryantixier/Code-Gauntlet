import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { animate, delay, motion } from "framer-motion";
import { useFormControls } from "./formValidation.tsx";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../databaseOperations/mutations";

export default function HomeSignup({ buttons }) {
  const [addUser, addUserMutResponse] = useMutation(ADD_USER);
  const inputFieldValues = [
    {
      name: "name",
      label: "Full Name",
      id: "user-name",
      type: "text",
    },
    {
      name: "email",
      label: "Email",
      id: "user-email",
      type: "text",
    },
    {
      name: "password",
      label: "Password",
      id: "user-password",
      type: "password",
    },
  ];

  const { handleInputValue, handleFormSubmit, formIsValid, errors } =
    useFormControls();
  function handleSignIn(e) {
    handleFormSubmit(e, addUser, "addUser");
  }
  return (
    <div className="divWrapper">
      <div className="signInForm center">
        <form onSubmit={handleSignIn} className="contactForm">
          {inputFieldValues.map((inputFieldValue, index) => {
            return (
              <TextField
                key={index}
                type={inputFieldValues.type}
                onBlur={handleInputValue}
                onChange={handleInputValue}
                name={inputFieldValue.name}
                label={inputFieldValue.label}
                multiline={inputFieldValue.multiline ?? false}
                rows={inputFieldValue.rows ?? 1}
                autoComplete="none"
                className="signInFormItem"
                {...(errors[inputFieldValue.name] && {
                  error: true,
                  helperText: errors[inputFieldValue.name],
                })}
              />
            );
          })}
          {buttons}
          {/* <Button type="submit" disabled={!formIsValid()}>
            Sign Up
          </Button> */}
        </form>
      </div>
    </div>
  );
}
