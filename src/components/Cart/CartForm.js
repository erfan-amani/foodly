import style from './CartForm.module.css';
import useRequest from '../../hooks/use-request';
import useInput from '../../hooks/use-input';

const CartForm = ({ items, onCloseCart, total, clearCart }) => {
  const { sendRequest, isLoading, error } = useRequest();

  const formattedTotal = `$${total.toFixed(2)}`;
  const isEmpty = items.length === 0;

  const {
    value: name,
    valueIsValid: nameIsValid,
    hasError: nameHasError,
    onChange: nameChangeHandler,
    onBlur: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== '');
  const {
    value: address,
    valueIsValid: addressIsValid,
    hasError: addressHasError,
    onChange: addressChangeHandler,
    onBlur: addressBlurHandler,
    reset: resetAddress,
  } = useInput((value) => value.trim() !== '');
  const {
    value: postCode,
    valueIsValid: postCodeIsValid,
    hasError: postCodeHasError,
    onChange: postCodeChangeHandler,
    onBlur: postCodeBlurHandler,
    reset: resetPostCode,
  } = useInput((value) => value.trim() !== '');

  const formIsValid =
    nameIsValid && addressIsValid && postCodeIsValid && !isEmpty;

  const submissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    sendOrder();
    resetName();
    resetAddress();
    resetPostCode();
  };

  const applyData = (data) => {
    clearCart();
    console.log('order ID:' + data.name);
  };

  const sendOrder = () => {
    const deliveryData = {
      name,
      address,
      postCode,
    };

    sendRequest(
      {
        url: 'https://foodly-api-default-rtdb.firebaseio.com/orders.json',
        method: 'POST',
        body: { items, deliveryData },
        header: { 'Content-type': 'application/json' },
      },
      applyData
    );
  };

  const nameInputClasses = nameHasError
    ? `${style['form-control']} ${style.invalid}`
    : `${style['form-control']}`;
  const addressInputClasses = addressHasError
    ? `${style['form-control']} ${style.invalid}`
    : `${style['form-control']}`;
  const postCodeInputClasses = postCodeHasError
    ? `${style['form-control']} ${style.invalid}`
    : `${style['form-control']}`;

  return (
    <form className={style['cart-form']} onSubmit={submissionHandler}>
      <h2>Checkout</h2>
      <div className={nameInputClasses}>
        <label>Full Name *</label>
        <input
          type="text"
          value={name}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameHasError && (
          <p className={style['error-text']}>Full Name can't be empty!</p>
        )}
      </div>
      <div className={addressInputClasses}>
        <label>Address *</label>
        <input
          type="text"
          value={address}
          onChange={addressChangeHandler}
          onBlur={addressBlurHandler}
        />
        {addressHasError && (
          <p className={style['error-text']}>Address can't be empty!</p>
        )}
      </div>
      <div className={postCodeInputClasses}>
        <label>Post Code *</label>
        <input
          type="text"
          value={postCode}
          onChange={postCodeChangeHandler}
          onBlur={postCodeBlurHandler}
        />
        {postCodeHasError && (
          <p className={style['error-text']}>Post Code can't be empty!</p>
        )}
      </div>
      <div className={style.buttons}>
        <button
          className={`${style['close-button']} ${
            !formIsValid ? style.orange : ''
          }`}
          onClick={onCloseCart}
        >
          close
        </button>
        <button className={style['checkout-button']} disabled={!formIsValid}>
          {isLoading ? 'Loading...' : `Checkout ${formattedTotal}`}
        </button>
      </div>
    </form>
  );
};

export default CartForm;
