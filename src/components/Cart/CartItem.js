import NumberInput from '../UI/NumberInput';
import style from './CartItem.module.css';
import img from '../../assets/img/pizza/pizza-boscaiola.jpeg';
import ClearIcon from '../UI/Icon/ClearIcon';

const CartItem = () => {
  return (
    <div className={style['cart-item']}>
      <img className={style.image} src={img} alt="meal" />
      <div className={style.detail}>
        <div className={style.data}>
          <h4 className={style.name}>Pizza Dummy</h4>
          <span className={style.price}>$13.5</span>
        </div>
        <div className={style.action}>
          <NumberInput />
          <span className={style.clear}>
            <ClearIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
