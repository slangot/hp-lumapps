import React from "react";
import { NavLink } from "react-router-dom";

import SearchField from "../SearchField/SearchField";

import Logo from "../../assets/images/hp-logo-long.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo-container">
        <NavLink to="/" aria-label="Home page">
          <img
            src={Logo}
            alt="Harry Potter home logo"
            className="header-logo"
          />
        </NavLink>
      </div>
      <SearchField />
    </header>
  );
};

export default Header;
