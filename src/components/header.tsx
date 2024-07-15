import React from "react";

import { Link } from "react-router-dom";

import { routes } from "../constants/routes";

const Header = () => {
  return (
    <div>
      <h1>Logo</h1>

      <nav>
        <ul style={{ display: "flex" }}>
          <li style={{ marginRight: 20 }}>
            <Link to={routes.HOME}>Home</Link>
          </li>
          <li style={{ marginRight: 20 }}>
            <Link to={routes.ABOUT}>About</Link>
          </li>
          <li style={{ marginRight: 20 }}>
            <Link to={routes.CONTACT}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
