import NumberInput from '../UI/NumberInput';
import style from './CartItem.module.css';
import ClearIcon from '../UI/Icon/ClearIcon';

const CartItem = ({ image, name, price, amount, category }) => {
  const imageSrc = require(`../../assets/img/${category.toLowerCase()}/${image}`);
  const formattedPrice = `$${price.toFixed(2)}`;

  return (
    <div className={style['cart-item']}>
      <img className={style.image} src={imageSrc} alt="meal" />
      <div className={style.detail}>
        <div className={style.data}>
          <h4 className={style.name}>{name}</h4>
          <span className={style.price}>{formattedPrice}</span>
        </div>
        <div className={style.action}>
          <NumberInput amount={amount} />
          <span className={style.clear}>
            <ClearIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
