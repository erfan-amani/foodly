import style from './MealItemForm.module.css';
import NumberInput from '../../UI/NumberInput';

const MealItemForm = ({ price }) => {
  return (
    <form className={style.form}>
      <NumberInput />
      <button className={style.submit} type="submit">
        Add 1 to order {price}
      </button>
    </form>
  );
};

export default MealItemForm;
