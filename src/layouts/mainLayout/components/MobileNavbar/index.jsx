import { useTranslation } from 'react-i18next';
import styles from './styles.module.css'
import {Link} from "react-router-dom";


const MobileNavbar = ({isMenuOpen, setIsMenuOpen}) => {
  const {t} = useTranslation()
  return (
    <nav
         className={styles.wrapper}>
      <div className={`${styles.content} ${isMenuOpen ? styles.open : ""}`}>
        <ul className={styles.list}>
          <li onClick={() => setIsMenuOpen(false)}>
            <Link to="/company">{t('header.navbar.companies')}</Link>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <Link to="/product">{t('header.navbar.products')}</Link>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <Link to="/services">{t('header.navbar.services')}</Link>
          </li>
          {/* <li onClick={() => setIsMenuOpen(false)}>
            <Link to="/about">О Компании</Link>
          </li> */}
          <li onClick={() => setIsMenuOpen(false)}>
            <Link to="/contact-us">{t('header.navbar.contactUs')}</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}


export default MobileNavbar