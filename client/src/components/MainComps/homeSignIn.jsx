import React, { useState } from "react";

export default function HomeSignIn() {
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
    <div className="container">
      <form>
        {" "}
        SignIn
        {/* input for login? */}
        <label for="userName">
          <b>UserName</b>
        </label>
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <label for="password">
          <b>Password</b>
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="button" onClick={handleSigninSubmit}>
          SignIn
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="er-message">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
