import style from './CartButton.module.css';
import cartIcon from '../../assets/icons/cart-outline.svg';

const CartButton = ({ onClick }) => {
  return (
    <div className={style['cart-button']} onClick={onClick}>
      <img
        className={style['cart-icon']}
        src={cartIcon}
        alt="shopping cart icon"
      />
      <span className={style.badge}>0</span>
    </div>
  );
};

export default CartButton;
