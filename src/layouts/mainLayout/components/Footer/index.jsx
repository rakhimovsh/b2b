import styles from './styles.module.css';

import { ReactComponent as FacebookIcon } from '@assets/svg/akar-icons_facebook-fill.svg';
import { ReactComponent as InstagramIcon } from '@assets/svg/ant-design_instagram-filled.svg';
import { ReactComponent as TelegramIcon } from '@assets/svg/akar-icons_telegram-fill.svg';
import { ReactComponent as YoutubeIcon } from '@assets/svg/akar-icons_youtube-fill.svg';

const Footer = () => {
  return (
    <div className='container'>
      <div className={styles.footerContent}>
        <div className={styles.footerList}>
          <h4 className={styles.footerTitle}>Категории</h4>
          <p className={styles.footerText}>Хлопковая пряжа</p>
          <p className={styles.footerText}>Ткани</p>
          <p className={styles.footerText}>Аксессуары</p>
          <p className={styles.footerText}>Другие продукты</p>
        </div>
        <div className={styles.footerList}>
          <h4 className={styles.footerTitle}>Служба поддержки</h4>
          <p className={styles.footerText}>Хлопковая пряжа</p>
          <p className={styles.footerText}>Ткани</p>
          <p className={styles.footerText}>Аксессуары</p>
        </div>
        <div className={styles.footerList}>
          <h4 className={styles.footerTitle}>Быстрые ссылки</h4>
          <p className={styles.footerText}>Свяжиьесь с нами</p>
          <p className={styles.footerText}>О компании</p>
        </div>
        <div className={styles.footerSocial}>
          <button className={styles.footerSocial_icon} href='#facebook'>
            <FacebookIcon />
            <span className={styles.footerSocial_text}>Facebook</span>
          </button>
          <button className={styles.footerSocial_icon} href='#instagram'>
            <InstagramIcon />
            <span className={styles.footerSocial_text}>Instagram</span>
          </button>
          <button className={styles.footerSocial_icon} href='#instagram'>
            <TelegramIcon />
            <span className={styles.footerSocial_text}>Telegram</span>
          </button>
          <button className={styles.footerSocial_icon} href='#instagram'>
            <YoutubeIcon />
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
