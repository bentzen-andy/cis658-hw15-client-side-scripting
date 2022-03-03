import { useState } from "react";

const useInput = (validationText, checkValidity) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = checkValidity(value);

  const valueChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const valueBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setValue("");
    setIsTouched(false);
  };

  return {
    value,
    isTouched,
    isValid,
    validationText,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  };
};

export default useInput;
