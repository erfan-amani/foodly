import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import cartIcon from '../../assets/icons/cart-outline.svg';
import style from './CartButton.module.css';

const CartButton = ({ onClick }) => {
  const { items } = useContext(CartContext);
  const [btnIsHigh, setBtnIsHigh] = useState(false);
  const className = `${style['cart-button']} ${btnIsHigh ? style.bump : ''}`;

  useEffect(() => {
    setBtnIsHigh(true);
    const timerId = setTimeout(() => setBtnIsHigh(false), 300);

    return () => clearTimeout(timerId);
  }, [items]);

  const badgeNumber = items.reduce((acc, item) => acc + item.amount, 0);

  return (
    <div className={className} onClick={onClick}>
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
