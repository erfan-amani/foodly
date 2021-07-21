import style from './MealItem.module.css';

const MealItem = ({ name, price, category, image }) => {
  const imageSrc = require(`../../../assets/img/${category
    .toLowerCase()
    .split(' ')
    .join('-')}/${image}`).default;
  const formattedPrice = `$${price.toFixed(2)}`;

  return (
    <div className={style['meal-item']}>
      <img className={style.image} src={imageSrc} alt="delicious meal" />

      <div className={style.text}>
        <h3 className={style.name}>{name}</h3>
        <p className={style.price}>{formattedPrice}</p>
      </div>
    </div>
  );
};

export default MealItem;
