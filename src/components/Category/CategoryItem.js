import style from './CategoryItem.module.css';

const CategoryItem = ({ title, image, selected, changeCategoryHandler }) => {
  const imageSrc = require(`../../assets/img/categories/${image}`).default;

  return (
    <div
      className={`${style.item}  ${selected ? style.active : ''}`}
      onClick={() => changeCategoryHandler(title)}
    >
      <img
        className={style.icon}
        src={imageSrc}
        alt={`small icon for ${title} category`}
      />
      <span className={style.title}>{title}</span>
    </div>
  );
};

export default CategoryItem;
