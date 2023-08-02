import React, { useState } from "react";
import HomeChallengeBtns from "../components/MainComps/homeChallengeBtns";
import HomeSignIn from "../components/MainComps/homeSignIn";
import HomeSignup from "../components/MainComps/homeSignup";
import HomeImg from "../components/MainComps/homeImg";

function Home() {
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
      {/* <canvas id="canvas-complex"></canvas> */}
      <HomeImg />
      <div className="pageDiv">
        <div className="container">
          <h1 className="center">Code Gauntlet</h1>
          <div className="flex around">
            <h3 className="center">Get Challenged.</h3>
            <h3 className="center">Win Challenges.</h3>
            <h3 className="center">Challenge Others.</h3>
          </div>
          <HomeChallengeBtns />
          <HomeSignIn />
          <HomeSignup />
        </div>
        {/* <div className="elementsWrapper"> */}
        {/* </div> */}
      </div>

      {/* <div>About:Benefits to signing up, basic layout of challenges, etc</div> */}
    </div>
  );
}
