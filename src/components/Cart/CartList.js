import { useContext } from 'react';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';
import style from './CartList.module.css';

const CartList = () => {
  const {
    items,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    totalAmount,
  } = useContext(CartContext);

  const isEmpty = items.length === 0;

  let renderedList = (
    <p>Cart is empry. First choose your meals from menu 🍔.</p>
  );
  if (!isEmpty)
    renderedList = items.map((item) => (
      <CartItem
        key={item.id}
        {...item}
        addItemHandler={addItemHandler.bind(null, { ...item, amount: 1 })}
        removeItemHandler={removeItemHandler.bind(null, { id: item.id })}
        clearWholeItem={removeItemHandler.bind(null, {
          id: item.id,
          clear: true,
        })}
      />
    ));

  return (
    <div className={style['cart-list']}>
      <h2>Cart</h2>

      <div className={style.items}>{renderedList}</div>
      <div className={style['cart-data']}>
        <div>
          <p className={style.total}>Total</p>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
        <div>
          <p className={style.ship}>Shipping</p>
          <span>$00.00</span>
        </div>
      </div>
    </div>
  );
};

export default CartList;
