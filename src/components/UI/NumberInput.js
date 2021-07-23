import style from './NumberInput.module.css';
import AddIcon from './Icon/AddIcon';
import RemoveIcon from './Icon/RemoveIcon';

const NumberInput = ({ amount }) => {
  return (
    <div className={style.container}>
      <span className={style.icon}>
        <RemoveIcon />
      </span>
      <input className={style.input} type="text" />
      <span className={style.icon}>
        <AddIcon />
      </span>
    </div>
  );
};

export default NumberInput;
