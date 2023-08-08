import styles from './styles.module.css';
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to='/company'>Производители</Link>
      <Link to='/product'>Маркетинг</Link>
      <Link to='/about'>О Компании</Link>
      <Link to='/contact-us'>Свяжитесь С Нами</Link>
    </div>
  );
};

export default Navbar;
