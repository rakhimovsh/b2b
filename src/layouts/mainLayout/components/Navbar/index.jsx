import styles from './styles.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <a href='#producers'>Производители</a>
      <a href='#marketing'>Маркетинг</a>
      <a href='#about'>О Компании</a>
      <a href='#contact'>Свяжитесь с нами</a>
    </div>
  );
};

export default Navbar;
