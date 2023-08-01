import React, { useState } from "react";

export default function HomeSignup() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const checkPassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const isLengthValid = password.length >= 8;
    return hasUpperCase && hasLowerCase && isLengthValid;
  };

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setPassword(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !userName) {
      setErrorMessage("Invalid username/email entered");
      return;
    }
    if (!checkPassword(password)) {
      setErrorMessage(`Make Password more secure or else 🤨: ${userName}`);
      return;
    }
    alert(`signed in as ${userName}`);
    setUserName("");
    setPassword("");
    setEmail("");
  };

  const handleSigninSubmit = (e) => {
    e.preventDefault();

    alert(`signed in as ${userName}`);
    setUserName("");
    setPassword("");
  };

  return (
    <div>
      <form>
        {" "}
        Signup
        {/* input for sign up? */}
        <input
          value={setUserName}
          onChange={handleInputChange}
          type="text"
          placeholder="username"
        />
        <input
          value={setEmail}
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={setPassword}
          onChange={handleInputChange}
          type="password"
          placeholder="password"
        />
        <button className="buttonlook" type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
