import React, { useEffect, useState } from "react";
import Granim from "granim";
import "../styles/Main.css";

function Main() {
  const [name, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [setErrorMessage, errorMessage] = useState("");

  useEffect(() => {
    const granimInstance = new Granim({
      element: "#canvas-complex",
      direction: "left-right",
      isPausedWhenNotInView: true,
      states: {
        "default-state": {
          gradients: [
            [
              { color: "#833ab4", pos: 0.2 },
              { color: "#fd1d1d", pos: 0.8 },
              { color: "#38ef7d", pos: 1 },
            ],
            [
              { color: "#40e0d0", pos: 0 },
              { color: "#ff8c00", pos: 0.2 },
              { color: "#ff0080", pos: 0.75 },
            ],
          ],
        },
      },
    });
    return () => granimInstance.destroy();
  }, []);

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

    return (
      <div className="container">
        <canvas id="canvas-complex"></canvas>
        <h1>Code Gauntlet</h1>
        <div>
          <img src=" " alt="logo">
            Logo?
          </img>
          <div className="container">
            <p>
              Code Gauntlet is a free interactive space to not only challenge
              your coding skills but your friends as well. Sign up to take full
              advantage of our features
            </p>
          </div>
        </div>
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
            <button
              className="buttonlook"
              type="button"
              onClick={handleFormSubmit}
            >
              Submit
            </button>
          </form>
        </div>
        <div className="container">
          <form>
            {" "}
            SignIn
            {/* input for login? */}
            <label for="userName">
              <b>UserName</b>
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
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
            <button type="button" onClick={handleFormSubmit}>
              SignIn
            </button>
          </form>
          {errorMessage && (
            <div>
              <p className="er-message">{errorMessage}</p>
            </div>
          )}
        </div>
        <div>About:Benefits to signing up, basic layout of challenges, etc</div>
        {/* Difficulty Buttons for Navigation?? */}
        <div>
          <button>Select Beginner</button>
          <button>Select Intermediate</button>
          <button>Select Hard</button>
        </div>
      </div>
    );
  };
}

export default Main;
