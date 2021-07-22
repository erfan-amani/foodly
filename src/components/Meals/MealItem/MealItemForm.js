import style from './MealItemForm.module.css';
import RemoveIcon from './RemoveIcon';
import AddIcon from './AddIcon';

const MealItemForm = ({ price }) => {
  return (
    <form className={style.form}>
      <div className={style.count}>
        <span className={style.icon}>
          <RemoveIcon />
        </span>
        <input className={style.input} type="text" />
        <span className={style.icon}>
          <AddIcon />
        </span>
      </div>
      <button className={style.submit} type="submit">
        Add 1 to order {price}
      </button>
    </form>
  );
};

export default MealItemForm;
