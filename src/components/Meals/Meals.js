import { useContext, useEffect } from 'react';
import style from './Meals.module.css';
import MealsList from './MealsList';
import MealsContext from '../../store/meals-context';
import useRequest from '../../hooks/use-request';

const Meals = () => {
  const { filteredMeals, initialMealsData } = useContext(MealsContext);

  const { sendRequest, error, isLoading } = useRequest();

  useEffect(() => {
    const applyData = (data) => {
      const mealsArray = [];
      console.log(data);
      for (const key in data) {
        mealsArray.push({
          id: key,
          ...data[key],
        });
      }

      initialMealsData(mealsArray);
    };

    sendRequest(
      {
        url: 'https://foodly-api-default-rtdb.firebaseio.com/meals.json',
      },
      applyData
    );
  }, [sendRequest, initialMealsData]);

  let content = <p>Sorry we are close right now. NO MEALS!</p>;
  if (isLoading) content = <p>Loading...</p>;
  if (error) content = <p>Something went wrong!</p>;
  if (filteredMeals.length > 0) content = <MealsList meals={filteredMeals} />;

  return (
    <div className={style.meals}>
      <h2>Meals</h2>
      {content}
    </div>
  );
};

export default Meals;
