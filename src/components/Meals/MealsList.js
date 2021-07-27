import style from './MealsList.module.css';
import MealItem from './MealItem/MealItem';

const MealsList = ({ meals }) => {
  return (
    <div className={style['meals-list']}>
      {meals.map((meal) => (
        <MealItem key={meal.id} {...meal} />
      ))}
    </div>
  );
};

export default MealsList;
