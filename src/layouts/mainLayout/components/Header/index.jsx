import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {useState} from "react";
import Navbar from '../Navbar';
import MobileNavbar from '@layouts/mainLayout/components/MobileNavbar/index.jsx';
import styles from './styles.module.css';
import { ReactComponent as Logo } from '@assets/svg/EMGULogo.svg';
import MiniLogo  from '@assets/svg/EMGUMiniLogo.png';
import { ReactComponent as Globe } from '@assets/svg/globe-alt.svg';
import { ReactComponent as Menu } from '@assets/svg/menu.svg';
import { ReactComponent as IconDown } from '@assets/svg/arrowDown.svg';


const Header = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)
  const [isLangSelectOpen, setIsLangSelectOpen] = useState(false)
  const [language, setLanguage] = useState('En')

  const handleChange = (evt) => {
    i18n.changeLanguage(evt.target.value);
  };
  return (
    <div className={isNavbarOpen ? styles.headerWrapper : ""}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <Link to='/'>
             <Logo className={styles.headerLogo} style={{width: '250px', height: '110px'}} />
             <img className={styles.headerMiniLogo} src={MiniLogo} alt="mini logo" />
          </Link>
          <nav className={styles.navbar}>
            <Navbar />
          </nav>
        </div>
        <div  className={styles.headerRight}>
          <div onClick={() => setIsLangSelectOpen(!isLangSelectOpen)} className={styles.languageChange}>
            <Globe />
            <div >
              <div  className={styles.languageChange_select1}>
                <p onChange={handleChange} >{language}</p>
                <IconDown/>
              </div>
              {isLangSelectOpen && 
                <div  className={styles.langDropdown}>
                  <p onClick={(e) => {setLanguage(e.target.textContent)}} className={styles.langItem}>En</p>
                  <p onClick={(e) => {setLanguage(e.target.textContent)}} className={styles.langItem}>Ru</p>
                  <p onClick={(e) => {setLanguage(e.target.textContent)}} className={styles.langItem}>Uz</p>
                </div>
              }
            </div>
            
            {/* <select 
              onChange={handleChange}
              defaultValue={i18n.language}
              name=''
              id='lang-change'
              className={styles.languageChange_select}
            >
              <option value='en'>En</option>
              <option value='ru'>Ru</option>
              <option value='uz'>Uz</option>
            </select> */}
            {/* <IconDown /> */}
          </div>
          {/* <button className={styles.headerFisrtButton}>Войти</button> */}
          <button onClick={() => navigate('/application')} className={styles.headerSecondButton}>
            + Добавить свою компанию
          </button>
          <button onClick={() => setIsNavbarOpen(prevState => !prevState)} className={styles.menuBtn}>
            <Menu />
          </button>
        </div>
      </div>
      <MobileNavbar isMenuOpen={isNavbarOpen} setIsMenuOpen={setIsNavbarOpen}/>
    </div>
  );
};

export default Header;
