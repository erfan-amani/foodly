import style from './MealsList.module.css';
import { MEALS_DATA } from './mealsData';
import MealItem from './MealItem/MealItem';

const MealsList = () => {
  return (
    <div className={style['meals-list']}>
      {MEALS_DATA.map((meal) => (
        <MealItem
          key={meal.id}
          name={meal.name}
          price={13.5}
          category={meal.category}
          image={meal.image}
        />
      ))}
    </div>
  );
};

export default MealsList;
