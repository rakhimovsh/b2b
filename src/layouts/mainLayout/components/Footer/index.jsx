import styles from './styles.module.css';

import { ReactComponent as FacebookIcon } from '@assets/svg/akar-icons_facebook-fill.svg';
import { ReactComponent as InstagramIcon } from '@assets/svg/ant-design_instagram-filled.svg';
import { ReactComponent as TelegramIcon } from '@assets/svg/akar-icons_telegram-fill.svg';
import { ReactComponent as YoutubeIcon } from '@assets/svg/akar-icons_youtube-fill.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='container'>
      <div className={styles.footerContent}>
        {/* <div className={styles.footerList}>
          <h4 className={styles.footerTitle}>Категории</h4>
          <p className={styles.footerText}>Хлопковая пряжа</p>
          <p className={styles.footerText}>Ткани</p>
          <p className={styles.footerText}>Аксессуары</p>
          <p className={styles.footerText}>Другие продукты</p>
        </div> */}
        <div className={styles.footerList}>
          <h4 className={styles.footerTitle}>Служба поддержки</h4>
          <Link to='/how-to-buy-product ' className={styles.footerText}>
            Как купить
          </Link>
          <Link to='/for-companies' className={styles.footerText}>
            Для покупателей
          </Link>
          <Link to='/payment' className={styles.footerText}>
            Платежи
          </Link>
          <Link to='/return-policy' className={styles.footerText}>
            Политика возврата
          </Link>
          <Link to='/faq' className={styles.footerText}>
            Вопросы Ответы
          </Link>
        </div>
        <div className={styles.footerList}>
          <h4 className={styles.footerTitle}>Быстрые ссылки</h4>
          <Link to='/contact-us' className={styles.footerText}>
            Свяжиьесь с нами
          </Link>
          <Link to='/about' className={styles.footerText}>
            О компании
          </Link>
        </div>
        <div className={styles.footerSocial}>
          <button className={styles.footerSocial_icon} >
            <a href="https://instagram.com/madeinkokand?igshid=MzRlODBiNWFlZA==" target='_blank'><FacebookIcon /></a>
            <span className={styles.footerSocial_text}>Facebook</span>
          </button>
          <button className={styles.footerSocial_icon} >
            <a href="https://instagram.com/madeinkokand?igshid=MzRlODBiNWFlZA==" target='_blank'><InstagramIcon /></a>
            <span className={styles.footerSocial_text}>Instagram</span>
          </button>
          <button className={styles.footerSocial_icon} >
            <a href="https://instagram.com/madeinkokand?igshid=MzRlODBiNWFlZA==" target='_blank'><TelegramIcon /></a>
            <span className={styles.footerSocial_text}>Telegram</span>
          </button>
          <button className={styles.footerSocial_icon} >
            <a href="https://instagram.com/madeinkokand?igshid=MzRlODBiNWFlZA==" target='_blank'><YoutubeIcon /></a>
            <span className={styles.footerSocial_text}>Youtube</span>
          </button>
        </div>
      </div>
      <div className={styles.footerLine}></div>
      <div className={styles.developerRights}>
        <p className={styles.footerDeveloperRights}>©2023 all rights reserved</p>
        <p className={styles.footerDeveloperRights}>Developped by: S-Orca IT center</p>
      </div>
    </div>
  );
};

export default Footer;
