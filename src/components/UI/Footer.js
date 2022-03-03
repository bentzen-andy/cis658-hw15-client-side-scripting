import React from "react";

import css from "./Footer.module.css";

const Footer = () => {
  return (
    <ul className={css["footer"]}>
      <li>HW15</li>
      <li>
        <a href="https://github.com/bentzen-andy/cis658-hw15-client-side-scripting">GitHub Repo</a>
      </li>
    </ul>
  );
};

export default Footer;
