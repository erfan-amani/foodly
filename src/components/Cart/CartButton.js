import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import cartIcon from '../../assets/icons/cart-outline.svg';
import style from './CartButton.module.css';

const CartButton = ({ onClick }) => {
  const cartCtx = useContext(CartContext);

  const badgeNumber = cartCtx.items.reduce((acc, item) => acc + item.amount, 0);

  return (
    <div className={style['cart-button']} onClick={onClick}>
      <img
        className={style['cart-icon']}
        src={cartIcon}
        alt="shopping cart icon"
      />
      <span className={style.badge}>{badgeNumber}</span>
    </div>
  );
};

export default CartButton;
