import { useState } from 'react';

const useInput = (validate) => {
  const [value, setValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validate(value);
  const hasError = !valueIsValid && isTouched;

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onBlur = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setValue('');
    setIsTouched(false);
  };

  return {
    value,
    valueIsValid,
    hasError,
    onChange,
    onBlur,
    reset,
  };
};

export default useInput;
