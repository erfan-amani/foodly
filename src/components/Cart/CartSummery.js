import style from './CartSummery.module.css';
import useRequest from '../../hooks/use-request';

const CartSummery = ({ items, onCloseCart, total, clearCart }) => {
  const { sendRequest, isLoading, error } = useRequest();

  const formattedTotal = `$${total.toFixed(2)}`;
  const isEmpty = items.length === 0;

  const applyData = (data) => {
    clearCart();
    console.log('order ID:' + data.name);
  };

  const orderHandler = () => {
    sendRequest(
      {
        url: 'https://foodly-api-default-rtdb.firebaseio.com/orders.json',
        method: 'POST',
        body: { ...items },
        header: { 'Content-type': 'application/json' },
      },
      applyData
    );
  };

  return (
    <div className={style.summery}>
      <h2>Order Summery</h2>
      <div className={style.detail}>
        <div className={style.data}>
          <p>Total Price</p>
          <span>{formattedTotal}</span>
        </div>
        <div className={style.data}>
          <p>Shipping</p>
          <span>$0.00</span>
        </div>
      </div>
      <div className={style.buttons}>
        <button
          className={`${style['close-button']} ${isEmpty ? style.orange : ''}`}
          onClick={onCloseCart}
        >
          close
        </button>
        {!isEmpty && (
          <button className={style['checkout-button']} onClick={orderHandler}>
            {isLoading ? 'Loading...' : 'checkout'}
          </button>
        )}
      </div>
    </div>
  );
};

export default CartSummery;
