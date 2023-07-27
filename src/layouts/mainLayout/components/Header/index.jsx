import Navbar from '../Navbar';
import styles from './styles.module.css';
import { ReactComponent as Logo } from '@assets/svg/logo.svg';
import { ReactComponent as Globe } from '@assets/svg/globe-alt.svg';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <a href='/'>
          <Logo />
        </a>
        <Navbar />
      </div>
      <div className={styles.headerRight}>
        <div className={styles.languageChange}>
          <Globe />
          <select name='' id='lang-change' className={styles.languageChange_select}>
            <option value='En'>En</option>
            <option value='Ru'>Ru</option>
            <option value='Ru'>Uz</option>
          </select>
        </div>
        {/* <button className={styles.headerFisrtButton}>Войти</button> */}
        <button className={styles.headerSecondButton}>+ Добавить свою компанию</button>
      </div>
    </div>
  );
};

export default Header;
