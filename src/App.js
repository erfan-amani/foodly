import CategoryList from './components/Category/CategoryList';
import Header from './components/Layout/Header';
import style from './App.module.css';

const App = () => {
  return (
    <>
      <Header />
      <main className={style.main}>
        <CategoryList />
      </main>
    </>
  );
};

export default App;
