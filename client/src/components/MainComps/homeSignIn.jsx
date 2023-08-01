import React from "react";

export default function homeSignIn() {
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
