import React from "react";
import useInput from "../../hooks/use-input";
import EMAIL_REGEX from "../../utils/email-regex";

import css from "./FormValidation.module.css";

const FormValidation = () => {
  const {
    value: fNameValue,
    isValid: fNameIsValid,
    isTouched: fNameIsTouched,
    validationText: fNameValidationText,
    valueChangeHandler: fNameChangeHandler,
    valueBlurHandler: fNameBlurHandler,
    reset: fNameReset,
  } = useInput("Field must not be blank", (value) => value.length > 0);

  const {
    value: lNameValue,
    isValid: lNameIsValid,
    isTouched: lNameIsTouched,
    validationText: lNameValidationText,
    valueChangeHandler: lNameChangeHandler,
    valueBlurHandler: lNameBlurHandler,
    reset: lNameReset,
  } = useInput("Field must not be blank", (value) => value.length > 0);

  const {
    value: emailValue,
    isValid: emailIsValid,
    isTouched: emailIsTouched,
    validationText: emailValidationText,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput("Not a valid email", (value) => value.toLowerCase().match(EMAIL_REGEX) !== null);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(fNameValue);
    console.log(lNameValue);
    console.log(emailValue);
    console.log(event.target.value);
    fNameReset();
    lNameReset();
    emailReset();
  };

  const formIsValid =
    fNameIsValid &&
    lNameIsValid &&
    emailIsValid &&
    fNameIsTouched &&
    lNameIsTouched &&
    emailIsTouched;

  return (
    <form>
      <div className={css["form-control"]}>
        {!fNameIsValid && fNameIsTouched && (
          <div className={css["validation-text"]}>{fNameValidationText}</div>
        )}
        <label htmlFor="first-name">First Name*</label>
        <input
          type="text"
          name="first-name"
          id="first-name"
          onChange={fNameChangeHandler}
          onBlur={fNameBlurHandler}
          value={fNameValue}
        />
      </div>
      <div className={css["form-control"]}>
        {!lNameIsValid && lNameIsTouched && (
          <div className={css["validation-text"]}>{lNameValidationText}</div>
        )}
        <label htmlFor="last-name">Last Name*</label>
        <input
          type="text"
          name="last-name"
          id="last-name"
          onChange={lNameChangeHandler}
          onBlur={lNameBlurHandler}
          value={lNameValue}
        />
      </div>
      <div className={css["form-control"]}>
        {!emailIsValid && emailIsTouched && (
          <div className={css["validation-text"]}>{emailValidationText}</div>
        )}
        <label htmlFor="email">Email*</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailValue}
        />
      </div>
      <button onClick={submitHandler} disabled={!formIsValid}>
        Submit
      </button>
      <div className={css["note"]}>* Required field</div>
    </form>
  );
};

export default FormValidation;
