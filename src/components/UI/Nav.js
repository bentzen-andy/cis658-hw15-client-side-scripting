import React from "react";
import { Link } from "react-router-dom";

import css from "./Nav.module.css";

const Nav = () => {
  return (
    <ul className={css["header"]}>
      <div className={css["header-main"]}>
        <li>
          <Link to="/">HW15 - Client-Side Scripting</Link>
        </li>
      </div>
      <div className={css["header-other"]}>
        <li>
          <Link to="/mini-project1">Data Grid</Link>
        </li>
        <li>
          <Link to="/mini-project2">Form</Link>
        </li>
        <li>
          <Link to="/mini-project3">Annoying Button</Link>
        </li>
      </div>
    </ul>
  );
};

export default Nav;
