import CartButton from '../Cart/CartButton';
import style from './Header.module.css';
import headerImage from '../../assets/img/header.jpg';

const Header = () => {
  return (
    <>
      <div className={style.nav}>
        <h1>Foodly</h1>
        <CartButton />
      </div>
      <header className={style.header}>
        <img
          className={style['header-image']}
          src={headerImage}
          alt="table full of delicious foods"
        />
      </header>
    </>
  );
};

export default Header;
