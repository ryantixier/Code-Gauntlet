import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER, ADD_USER } from "../../databaseOperations/mutations";
import authService from "../../util/auth";

const PostContactForm = async (
  values: any,
  successCallback: any,
  errorCallback: any
) => {
  const [login, loginMutResponse] = useMutation(LOGIN_USER);
  const [addUser, addUserMutResponse] = useMutation(ADD_USER);
  //naive way to check if the signup or sign in form was used.  maybe we can pass in a string so its explicit?
  console.log(values);
  if (!values.fullName) {
    const { data } = await login({
      variables: values,
    });
    console.log("login response!", data);
    if (data.login.token) {
      authService.login(data.login.token);
      successCallback();
    } else errorCallback();
  } else {
    const { data } = await addUser({
      variables: {
        name: values.fullName,
        email: values.email,
        password: values.password,
      },
    });
    console.log("sign up response!", data);
    if (data.addUser.token) {
      authService.login(data.addUser.token);
      successCallback();
    } else errorCallback();
  }
};

const initialFormValues = {
  fullName: "",
  email: "",
  password: "",
  formSubmitted: false,
  success: false,
};

export const useFormControls = () => {
  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({} as any);

  const validate: any = (fieldValues = values) => {
    let temp: any = { ...errors };

    if ("fullName" in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "This field is required.";

    if ("email" in fieldValues) {
      temp.email = fieldValues.email ? "" : "This field is required.";
      if (fieldValues.email)
        temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
          ? ""
          : "Email is not valid.";
    }

    if ("password" in fieldValues)
      temp.password =
        fieldValues.password.length !== 0 ? "" : "This field is required.";
    if (fieldValues.password)
      temp.password =
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,32}$/.test(
          fieldValues.password
        )
          ? ""
          : "Minimum 8 with 1 lowercase, 1 uppercase, 1 number, and 1 special character.";

    setErrors({
      ...temp,
    });
  };

  const handleInputValue = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    validate({ [name]: value });
  };

  const handleSuccess = () => {
    setValues({
      ...initialFormValues,
      formSubmitted: true,
      success: true,
    });
  };

  const handleError = () => {
    setValues({
      ...initialFormValues,
      formSubmitted: true,
      success: false,
    });
  };

  const formIsValid = (fieldValues = values) => {
    const isValid =
      fieldValues.fullName &&
      fieldValues.email &&
      fieldValues.password &&
      Object.values(errors).every((x) => x === "");

    return isValid;
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    const isValid =
      Object.values(errors).every((x) => x === "") && formIsValid();
    if (isValid) {
      await PostContactForm(values, handleSuccess, handleError);
    }
  };

  return {
    values,
    errors,
    handleInputValue,
    handleFormSubmit,
    formIsValid,
  };
};
