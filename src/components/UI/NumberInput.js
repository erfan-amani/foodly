import style from './NumberInput.module.css';
import AddIcon from './Icon/AddIcon';
import RemoveIcon from './Icon/RemoveIcon';

const NumberInput = ({ value, onChange, onAdd, onRemove }) => {
  return (
    <div className={style.container}>
      <span className={style.icon} onClick={onRemove}>
        <RemoveIcon />
      </span>
      <input
        disabled={onChange === undefined}
        className={style.input}
        type="text"
        value={value}
        onChange={onChange}
      />
      <span className={style.icon} onClick={onAdd}>
        <AddIcon />
      </span>
    </div>
  );
};

export default NumberInput;
