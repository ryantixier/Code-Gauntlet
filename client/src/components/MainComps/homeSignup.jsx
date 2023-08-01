import React from "react";

export default function HomeSignup() {
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
