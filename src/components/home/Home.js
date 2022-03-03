import React from "react";
import Container from "../UI/Container";

const Home = () => {
  return (
    <Container>
      <h1>Homework 15</h1>
      <p>Welcome to the webpage for HW15.</p>
      <p>Check out the links in the header of this page for each of the mini-projects.</p>
      <h1>Development Details</h1>
      <p>
        I wrote this as an SPA in React. Most of the DOM manipulations are done through React's
        state management. Please feel free to look at the source code with the browser's "inspect
        element" tool or by visiting my GitHub repo here:{" "}
        <a href="https://github.com/bentzen-andy/cis658-hw15-client-side-scripting">
          https://github.com/bentzen-andy/cis658-hw15-client-side-scripting
        </a>
      </p>

      <h2>Mini-Project 1: DataGrid</h2>
      <p>
        For this I just hardcoded some json data to create the table. I used React's state
        management to control whether each row should be shown. The "remove" button simply turns it
        off.{" "}
      </p>

      <h2>Mini-Project 2: Form Validation</h2>
      <p>
        On the form I used a custom React hook to control the state of the form validation messages.
        Using a custom hook in this way makes the React code a little more readable. The basic idea
        behind this validation is to dynamically check if required fields have been filled in
        properly. There's also a check to make sure the user actually had a chance to click into the
        field before it yells at you with nasty validation text. Additionally, the submit button is
        unclickable until each field is properly filled in. The validation scheme is borrowed
        heavily (but not copied) from this online course in React:{" "}
        <a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/">
          https://www.udemy.com/course/react-the-complete-guide-incl-redux/
        </a>
        . And I also used a regex that I borrowed from this Stack Overflow forum (it did not make
        sense me to rewrite an email regex from scratch):
        <a href="https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript">
          https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
        </a>
      </p>

      <h2>Mini-Project 3: Annoying Button</h2>
      <p>
        For this one, I simply created an event-handler on the button and adjusted the position via
        the styles. Nothing too complex here. The button sits in a div, and I just set the button to
        have a "relative" position.
      </p>
    </Container>
  );
};

export default Home;
