import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import style from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = ({ name, price, category, image }) => {
  const cartCtx = useContext(CartContext);

  const imageSrc = require(`../../../assets/img/${category
    .toLowerCase()
    .split(' ')
    .join('-')}/${image}`).default;

  const formattedPrice = `$${price.toFixed(2)}`;

  const addItemToCart = (amount) => {
    cartCtx.addItem({
      id: name.split(' ').join('-'),
      name: name,
      category: category,
      amount: amount,
      price: price,
      image: image,
    });
  };

  return (
    <div className={style['meal-item']}>
      <img className={style.image} src={imageSrc} alt="delicious meal" />
      <div className={style.detail}>
        <div className={style.text}>
          <h3 className={style.name}>{name}</h3>
          <p className={style.price}>{formattedPrice}</p>
        </div>
        <MealItemForm price={price} onSubmit={addItemToCart} />
      </div>
    </div>
  );
};

export default MealItem;
