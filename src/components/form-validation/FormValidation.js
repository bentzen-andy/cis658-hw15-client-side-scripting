import React from "react";
import useInput from "../../hooks/use-input";
import EMAIL_REGEX from "../../utils/email-regex";
import Card from "../UI/Card";

import css from "./FormValidation.module.css";

const FormValidation = () => {
  const {
    value: usernameValue,
    isValid: usernameIsValid,
    isTouched: usernameIsTouched,
    validationText: usernameValidationText,
    valueChangeHandler: usernameChangeHandler,
    valueBlurHandler: usernameBlurHandler,
    reset: usernameReset,
  } = useInput(
    "User name must be a minimum of 5 characters and a maximum of 10 characters",
    (value) => value.length >= 5 && value.length <= 10
  );

  const {
    value: emailValue,
    isValid: emailIsValid,
    isTouched: emailIsTouched,
    validationText: emailValidationText,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput("Not a valid email", (value) => value.toLowerCase().match(EMAIL_REGEX) !== null);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    isTouched: passwordIsTouched,
    validationText: passwordValidationText,
    valueChangeHandler: passwordChangeHandler,
    valueBlurHandler: passwordBlurHandler,
    reset: passwordReset,
  } = useInput(
    "Invalid password. Must be a minimum of 10 characters",
    (value) => value.length >= 10
  );

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(usernameValue);
    console.log(emailValue);
    console.log(passwordValue);
    console.log(event.target.value);
    usernameReset();
    emailReset();
    passwordReset();
  };

  const formIsValid = usernameIsValid && emailIsValid && passwordIsValid;

  return (
    <Card>
      <form className={css["form"]}>
        <div className={css["form-control"]}>
          <label htmlFor="username">Username*</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={usernameChangeHandler}
            onBlur={usernameBlurHandler}
            value={usernameValue}
          />
          {!usernameIsValid && usernameIsTouched && (
            <div className={css["validation-text"]}>{usernameValidationText}</div>
          )}
        </div>
        <div className={css["form-control"]}>
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={emailValue}
          />
          {!emailIsValid && emailIsTouched && (
            <div className={css["validation-text"]}>{emailValidationText}</div>
          )}
        </div>
        <div className={css["form-control"]}>
          <label htmlFor="password">Password*</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            value={passwordValue}
          />
          {!passwordIsValid && passwordIsTouched && (
            <div className={css["validation-text"]}>{passwordValidationText}</div>
          )}
        </div>
        <div className={css["note"]}>* Required field</div>
        <button onClick={submitHandler} disabled={!formIsValid}>
          Submit
        </button>
      </form>
    </Card>
  );
};

export default FormValidation;
