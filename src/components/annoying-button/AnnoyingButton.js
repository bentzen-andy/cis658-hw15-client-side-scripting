import React from "react";
import css from "./AnnoyingButton.module.css";

const AnnoyingButton = () => {
  const getRandomPct = () => {
    let rand = 100.0 * Math.random();
    return `${rand}%`;
  };

  const mouseMoveHandler = (event) => {
    event.target.style.left = getRandomPct();
    event.target.style.top = getRandomPct();
  };

  return (
    <div className={css["annoying-btn"]}>
      <button onMouseMove={mouseMoveHandler}>Click Me</button>
    </div>
  );
};

export default AnnoyingButton;
