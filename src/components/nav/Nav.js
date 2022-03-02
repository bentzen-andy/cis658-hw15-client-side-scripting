import React from "react";
import { Link } from "react-router-dom";

import "./Nav.module.css";

function Nav() {
  return (
    <header id="top">
      <ul>
        <li>
          <div>
            <Link to="/home">HW15 - Client-Side Scripting</Link>
          </div>
        </li>
        <li>
          <div>
            <Link to="/mini-project1">Data Grid</Link>
          </div>
        </li>
        <li>
          <div>
            <Link to="/mini-project2">Form</Link>
          </div>
        </li>
        <li>
          <div>
            <Link to="/mini-project3">Annoying Button</Link>
          </div>
        </li>
      </ul>
    </header>
  );
}

export default Nav;
