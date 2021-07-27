import NumberInput from '../UI/NumberInput';
import style from './CartItem.module.css';
import ClearIcon from '../UI/Icon/ClearIcon';

const CartItem = ({
  image,
  name,
  price,
  amount,
  category,
  addItemHandler,
  removeItemHandler,
  clearWholeItem,
}) => {
  const imageSrc = require(`../../assets/img/${category
    .toLowerCase()
    .split(' ')
    .join('-')}/${image}`).default;
  const formattedPrice = `$${price.toFixed(2)}`;
  const total = price * amount;

  return (
    <div className={style['cart-item']}>
      <img className={style.image} src={imageSrc} alt="meal" />
      <div className={style.detail}>
        <div className={style.data}>
          <h4 className={style.name}>{name}</h4>
          {/* <span className={style.price}>{formattedPrice}</span> */}
          <span className={style.clear} onClick={clearWholeItem}>
            <ClearIcon />
          </span>
        </div>
        <div className={style.action}>
          <NumberInput
            amount={amount}
            value={amount}
            onAdd={addItemHandler}
            onRemove={removeItemHandler}
          />
          <span className={style.price}>{`$${total.toFixed(2)}`}</span>
          {/* <span className={style.clear} onClick={clearWholeItem}>
            <ClearIcon />
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
