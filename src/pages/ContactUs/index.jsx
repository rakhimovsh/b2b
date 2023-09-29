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
import RequestForm from "@components/RequestForm/index.jsx";
import { useTranslation } from 'react-i18next';
const ContactUs = () => {
  const {t} = useTranslation()
  return (
    <div className={'container ' + styles.contactUsContainer}>
      <div className={styles.contactUsLeft}>
        <img className={styles.contactUsPhoneImgTop} src={Phone} alt='phone'/>
        <h2 className={styles.title}>{t('contactUs.title')}</h2>
        <p className={styles.desc}>
        {t('contactUs.text')}
        </p>
        <p className={styles.contactLocation}>
          <LocationIcon />
          {t('contactUs.address')}
        </p>
        <a href='tel:+998 88 415 0922' className={styles.contactPhone}>
          <PhoneIcon />
          {t('contactUs.phoneNumber')}
        </a>
        <a href='mailto:info@madeinkokand.uz' className={styles.contactPhone}>
          <MailIcon />
          {t('contactUs.email')}
        </a>
        <div className={styles.contactSocial}>
          <a href="https://instagram.com/madeinkokand?igshid=MzRlODBiNWFlZA==" target='_blank'><FacebookIcon /></a>
          <a href="https://instagram.com/madeinkokand?igshid=MzRlODBiNWFlZA==" target='_blank'><InstagramIcon /></a>
          <a href="https://instagram.com/madeinkokand?igshid=MzRlODBiNWFlZA==" target='_blank'><TelegramIconIcon /></a>
          <a href="https://instagram.com/madeinkokand?igshid=MzRlODBiNWFlZA==" target='_blank'><YoutubeIcon /></a>
        </div>
        <img className={styles.contactMap} src={Map} alt='map' />
      </div>
      <div className={styles.contactUsRight}>
        <img className={styles.contactUsPhoneImg} src={Phone} alt='phone'/>
        <div className={styles.contactUsForm}>
          <RequestForm/>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
