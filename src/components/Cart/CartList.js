import CartItem from './CartItem';
import style from './CartList.module.css';

const CartList = ({ items }) => {
  let renderedList = (
    <p>Cart is empry. First choose your meals from menu 🍔.</p>
  );
  if (items.length !== 0)
    renderedList = items.map((item) => <CartItem id={item.id} />);

  return (
    <div className={style['cart-list']}>
      <h2>Cart</h2>
      <div className={style.items}>{renderedList}</div>
    </div>
  );
};

export default CartList;
