import CartItem from './CartItem';
import style from './CartList.module.css';

const CartList = () => {
  return (
    <div className={style['cart-list']}>
      <h2>Cart</h2>
      <div className={style.items}>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </div>
  );
};

export default CartList;
