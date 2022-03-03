import React from "react";
import css from "./AnnoyingButton.module.css";

const AnnoyingButton = () => {
  const getRandomPct = () => {
    let max = 0.9;
    let min = 0.1;
    let rand = Math.random();
    let num = (max - min) * rand + min;
    num *= 100;
    return `${num}%`;
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
