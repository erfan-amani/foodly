import { useContext } from 'react';
import MealsContext from '../../store/meals-context';
import CategoryItem from './CategoryItem';
import style from './CategoryList.module.css';
import { CATEGORIES_DATA } from './categoriesData';

const CategoryList = () => {
  const mealsCtx = useContext(MealsContext);

  return (
    <div className={style['category-list']}>
      {CATEGORIES_DATA.map((item) => {
        return (
          <CategoryItem
            key={item.title}
            title={item.title}
            image={item.imageSrc}
            selectCategoryHandler={mealsCtx.selectCategoryHandler}
            isActive={mealsCtx.selectedCategory === item.title}
          />
        );
      })}
    </div>
  );
};

export default CategoryList;
