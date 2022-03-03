import React from "react";

import css from "./Footer.module.css";

const Footer = () => {
  return (
    <ul className={css["footer"]}>
      <li>
        <div>HW15</div>
      </li>
      <li>
        <div>
          <a href="https://github.com/bentzen-andy/cis658-hw15-client-side-scripting">
            GitHub Repo
          </a>
        </div>
      </li>
    </ul>
  );
};

export default Footer;
