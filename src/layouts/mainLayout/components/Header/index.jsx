import {Link, useNavigate} from "react-router-dom";
import Navbar from '../Navbar';
import styles from './styles.module.css';
import { ReactComponent as Logo } from '@assets/svg/logo.svg';
import { ReactComponent as Globe } from '@assets/svg/globe-alt.svg';
import { ReactComponent as Menu } from '@assets/svg/menu.svg';
import {useTranslation } from "react-i18next";

const Header = () => {
  const navigate = useNavigate()
  const {i18n} = useTranslation ()

  const handleChange = (evt) =>{
    i18n.changeLanguage(evt.target.value)
  }
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <Link to='/'>
          <Logo />
        </Link>
        <nav className={styles.navbar}>
          <Navbar />
        </nav>
      </div>
      <div className={styles.headerRight}>
        <div className={styles.languageChange}>
          <Globe />
          <select onChange={handleChange} defaultValue={i18n.language} name='' id='lang-change' className={styles.languageChange_select}>
            <option value='en'>En</option>
            <option value='ru'>Ru</option>
            <option value='uz'>Uz</option>
          </select>
        </div>
        {/* <button className={styles.headerFisrtButton}>Войти</button> */}
        <button onClick={()=> navigate('/application')} className={styles.headerSecondButton}>+ Добавить свою компанию</button>
        <button className={styles.menuBtn}>
          <Menu />
        </button>
      </div>
    </div>
  );
};

export default Header;
