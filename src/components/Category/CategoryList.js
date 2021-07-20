import { useState } from 'react';
import CategoryItem from './CategoryItem';
import style from './CategoryList.module.css';

const CATEGORIS_DATA = [
  {
    title: 'Pizza',
    imageSrc: 'pizza.png',
  },
  {
    title: 'Fast food',
    imageSrc: 'fast-food.png',
  },
  {
    title: 'Indian',
    imageSrc: 'indian.png',
  },
  {
    title: 'Italian',
    imageSrc: 'italian.png',
  },
  {
    title: 'Mexican',
    imageSrc: 'mexican.png',
  },
  {
    title: 'Thai',
    imageSrc: 'thai.png',
  },
  {
    title: 'Sushi',
    imageSrc: 'sushi.png',
  },
  {
    title: 'Salad',
    imageSrc: 'salad.png',
  },
  {
    title: 'Drink',
    imageSrc: 'drink.png',
  },
];

const CategoryList = () => {
  const [selectedCategory, setSelectedCategory] = useState('Pizza');

  const changeCategoryHandler = (id) => {
    setSelectedCategory(id);
  };

  return (
    <div className={style['category-list']}>
      {CATEGORIS_DATA.map((item) => (
        <CategoryItem
          title={item.title}
          image={item.imageSrc}
          selected={selectedCategory === item.title}
          changeCategoryHandler={changeCategoryHandler}
        />
      ))}
    </div>
  );
};

export default CategoryList;
