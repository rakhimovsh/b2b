import styles from './styles.module.css'


import { ReactComponent as LocationIcon } from '@assets/svg/u_location-point.svg';
import { ReactComponent as PhoneIcon } from '@assets/svg/u_phone-alt.svg';
import { ReactComponent as MailIcon } from '@assets/svg/mail.svg';
import { ReactComponent as FacebookIcon } from '@assets/svg/akar-icons_facebook-fill.svg';
import { ReactComponent as InstagramIcon } from '@assets/svg/ant-design_instagram-filled.svg';
import { ReactComponent as TelegramIconIcon } from '@assets/svg/akar-icons_telegram-fill.svg';
import { ReactComponent as YoutubeIcon } from '@assets/svg/akar-icons_youtube-fill.svg';
import Map from "@assets/images/map1.jpg";
import Phone from '@assets/images/phone.png'
const ContactUs = () => {
  return (
    <div className={'container ' + styles.contactUsContainer}>
      <div className={styles.contactUsLeft}>
        <img className={styles.contactUsPhoneImgTop} src={Phone} alt='phone'/>
        <h2 className={styles.title}>Остались вопросы? Свяжитесь с нами</h2>
        <p className={styles.desc}>
          Если у вас есть какие-либо вопросы, пожалуйста, свяжитесь с нами. Мы здесь, чтобы помочь
        </p>
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
          <FacebookIcon />
          <InstagramIcon />
          <TelegramIconIcon />
          <YoutubeIcon />
        </div>
        <img className={styles.contactMap} src={Map} alt='map' />
      </div>
      <div className={styles.contactUsRight}>
        <img className={styles.contactUsPhoneImg} src={Phone} alt='phone'/>
        <div className={styles.contactUsForm}>
          <h3>
            Закажите Обратный звонок
          </h3>
          <p className={styles.contactForm_p}>Ваше имя</p>
          <input className={styles.contactForm_name_input} type='text' placeholder='Ваше имя' />
          {/*<p className={styles.contactForm_p}>Страна</p>*/}
          {/*<CountrySelect />*/}
          <p className={styles.contactForm_p}>Какой продукт вы ищете?*</p>
          <textarea
            className={styles.contactForm_textarea}
            cols='30'
            rows='10'
            placeholder='Опишите продукт'
          ></textarea>
          <button className={styles.contactForm_btn}>Отправить</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
