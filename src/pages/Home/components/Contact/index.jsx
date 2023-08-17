import styles from './styles.module.css';

import { ReactComponent as LocationIcon } from '@assets/svg/u_location-point.svg';
import { ReactComponent as PhoneIcon } from '@assets/svg/u_phone-alt.svg';
import { ReactComponent as MailIcon } from '@assets/svg/mail.svg';
import { ReactComponent as FacebookIcon } from '@assets/svg/akar-icons_facebook-fill.svg';
import { ReactComponent as InstagramIcon } from '@assets/svg/ant-design_instagram-filled.svg';
import { ReactComponent as TelegramIcon } from '@assets/svg/akar-icons_telegram-fill.svg';
import { ReactComponent as YoutubeIcon } from '@assets/svg/akar-icons_youtube-fill.svg';
import Map from '@assets/images/map1.jpg';
import RequestForm from '@components/RequestForm';

const Contact = () => {
  return (
    <div className={'container ' + styles.contactContainer}>
      <div data-aos="fade-right" className={styles.contactDetails_box}>
        <h2 className={styles.contactTitle}>
          Остались вопросы? Позвоните нам, и мы вас проконсультируем
        </h2>
        <p className={styles.contactLocation}>
          <LocationIcon />
          ул Турон 1, г.Коканд, Ферганская область, Республика Узбекистан
        </p>
        <a href='tel:+998 88 415 0922' className={styles.contactPhone}>
          <PhoneIcon />
          +998 88 415 0922
        </a>
        <a href='mailto:info@madeinkokand.uz' className={styles.contactPhone}>
          <MailIcon />
          info@madeinkokand.uz
        </a>
        <div className={styles.contactSocial}>
          <a href="https://instagram.com/madeinkokand?igshid=MzRlODBiNWFlZA==" target='_blank'> <FacebookIcon  /></a>
          <a href="https://instagram.com/madeinkokand?igshid=MzRlODBiNWFlZA==" target='_blank'> <InstagramIcon  /></a>
          <a href="https://instagram.com/madeinkokand?igshid=MzRlODBiNWFlZA==" target='_blank'> <TelegramIcon  /></a>
          <a href="https://instagram.com/madeinkokand?igshid=MzRlODBiNWFlZA==" target='_blank'> <YoutubeIcon  /></a>
          </div>
        {/* <Social /> */}
        <img className={styles.contactMap} src={Map} alt='map' />
      </div>
      <div data-aos="fade-left" className={styles.contactForm}>
        <h2 className={styles.contactForm_title}>Заполните форму запроса продукта</h2>
        <RequestForm />
      </div>
    </div>
  );
};

export default Contact;
