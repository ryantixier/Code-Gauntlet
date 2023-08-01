import React from "react";
import logo from "../../assets/images/code_gauntlet_horiz_text_on_trans.png";

export default function NavLogo() {
  return (
    <div>
      <img
        className="navImg"
        height="200px"
        width="200px"
        src={logo}
        alt="Code Gauntlet Logo"
      />
    </div>
  );
}
