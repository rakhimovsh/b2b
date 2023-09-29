import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';
import {Link} from "react-router-dom";

const Navbar = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.navbar}>
      <Link to='/company'>{t('header.navbar.companies')}</Link>
      <Link to='/product'>{t('header.navbar.products')}</Link>
      <Link to='/services'>{t('header.navbar.services')}</Link>
      {/* <Link to='/about'>О Компании</Link> */}
      <Link to='/contact-us'>{t('header.navbar.contactUs')}</Link>
    </div>
  );
};

export default Navbar;
