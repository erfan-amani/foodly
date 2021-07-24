import CartItem from './CartItem';
import style from './CartList.module.css';

const CartList = ({ items, addItemHandler, removeItemHandler }) => {
  let renderedList = (
    <p>Cart is empry. First choose your meals from menu 🍔.</p>
  );
  if (items.length !== 0)
    renderedList = items.map((item) => (
      <CartItem
        key={item.id}
        {...item}
        addItemHandler={addItemHandler.bind(null, { ...item, amount: 1 })}
        removeItemHandler={removeItemHandler.bind(null, {
          id: item.id,
          amount: 1,
        })}
        clearWholeItem={removeItemHandler.bind(null, {
          id: item.id,
          amount: item.amount,
        })}
      />
    ));

  return (
    <div className={style['cart-list']}>
      <h2>Cart</h2>
      <div className={style.items}>{renderedList}</div>
    </div>
  );
};

export default CartList;
