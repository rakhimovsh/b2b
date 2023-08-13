import styles from './styles.module.css'
import {Link} from "react-router-dom";


const MobileNavbar = ({isMenuOpen, setIsMenuOpen}) => {
  return (
    <nav
         className={styles.wrapper}>
      <div className={`${styles.content} ${isMenuOpen ? styles.open : ""}`}>
        <ul className={styles.list}>
          <li onClick={() => setIsMenuOpen(false)}>
            <Link to="/company">Производители</Link>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <Link to="/product">Маркетинг</Link>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <Link to="/about">О Компании</Link>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <Link to="/contact-us">Свяжитесь С Нами</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}


export default MobileNavbar