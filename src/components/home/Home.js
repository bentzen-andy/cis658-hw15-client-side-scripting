import React from "react";
import css from "./Home.module.css";

const Home = () => {
  return (
    <React.Fragment>
      <h1>Homework</h1>
      <p>Welcome to the webpage for HW15.</p>
      <p>Check out the links in the header of this page for each of the mini-projects.</p>
      <h1>Development Details</h1>
      <p>
        I wrote this as an SPA in React. Most of the DOM manipulations are done through React's
        state management. Please feel free to look at the source code with the browser's "inspect
        element" tool or by visiting my GirHub repo here:{" "}
        <a href="https://github.com/bentzen-andy/cis658-hw15-client-side-scripting">
          https://github.com/bentzen-andy/cis658-hw15-client-side-scripting
        </a>
      </p>
    </React.Fragment>
  );
};

export default Home;
