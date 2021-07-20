import style from './CartButton.module.css';
import cartIcon from '../../assets/icons/cart-outline.svg';

const CartButton = () => {
  return (
    <div className={style['cart-button']}>
      <img
        className={style['cart-icon']}
        src={cartIcon}
        alt="shopping cart icon"
      />
    </div>
  );
};

export default CartButton;
