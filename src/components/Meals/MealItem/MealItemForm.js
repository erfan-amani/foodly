import { useState } from 'react';
import style from './MealItemForm.module.css';
import NumberInput from '../../UI/NumberInput';

const MealItemForm = ({ price, onSubmit }) => {
  const [enteredAmount, setEnteredAmount] = useState(1);

  const changeAmountHandler = (event) => {
    const value = event.target.value;
    if (value < 0) return;
    setEnteredAmount(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    onSubmit(enteredAmount);
    setEnteredAmount(1);
  };

  const increaseAmountHandler = () => {
    setEnteredAmount((prev) => prev + 1);
  };
  const decreaseAmountHandler = () => {
    setEnteredAmount((prev) => {
      if (+prev === 0) return 0;
      return prev - 1;
    });
  };

  const totalPrice = `$${(price * enteredAmount).toFixed(2)}`;

  return (
    <form className={style.form} onSubmit={submitFormHandler}>
      <NumberInput
        value={enteredAmount}
        onChange={changeAmountHandler}
        onAdd={increaseAmountHandler}
        onRemove={decreaseAmountHandler}
      />
      <button className={style.submit} type="submit">
        Add {enteredAmount} to order {totalPrice}
      </button>
    </form>
  );
};

export default MealItemForm;
