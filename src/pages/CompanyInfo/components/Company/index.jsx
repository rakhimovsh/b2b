import styles from './styles.module.css';

import MockCompany from '@assets/images/mock-company.png';
import { ReactComponent as StarIcon } from '@assets/svg/StarSVG.svg';
import { ReactComponent as FaceBookIcon } from '@assets/svg/akar-icons_facebook-fill.svg';
import { ReactComponent as InstagramIcon } from '@assets/svg/ant-design_instagram-filled.svg';
import { ReactComponent as TelegramIcon } from '@assets/svg/akar-icons_telegram-fill.svg';
import { ReactComponent as YouTubeIcon } from '@assets/svg/akar-icons_youtube-fill.svg';
import { ReactComponent as PhoneIcon } from '@assets/svg/u_phone-alt.svg';
import { ReactComponent as LocationIcon } from '@assets/svg/u_location-point.svg';
import { ReactComponent as BoxIcon } from '@assets/svg/box-icon.svg';

const CompanyInfo = () => {
  return (
    <>
      <h3 className={styles.companyTitle}>Euro Paint</h3>
      <h4 className={styles.companyDesc}>Красочные материалы</h4>
      <span className={styles.companyGrade}>
          <StarIcon className={styles.companyStarIcon} /> 3.6 рейтинг
        </span>
    </>
  )
};

const Company = () => {
  return (
    <div className={styles.company}>
      <div className={styles.companyTop}>
        <img
          className={styles.companyImg}
          src={MockCompany}
          alt='company image'
          width={77}
          height={77}
        />
        <div className={styles.companyInfoMobile}>
          <CompanyInfo/>
        </div>
      </div>
      <div>
        <div className={styles.companyInfo}>
          <CompanyInfo/>
        </div>
        <ul className={styles.socialNetworks}>
          <li>
            <a target='_blank'>
              <FaceBookIcon />
            </a>
          </li>
          <li>
            <a target='_blank'>
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a target='_blank'>
              <TelegramIcon />
            </a>
          </li>
          <li>
            <a target='_blank'>
              <YouTubeIcon />
            </a>
          </li>
        </ul>
        <ul className={styles.companyDetails}>
          <li>
            <PhoneIcon /> (998) 99 202 0777
          </li>
          <li>
            <LocationIcon />
            Самаркандская 13,г. Коканд,Ферганская область, Узбекистан
          </li>
          <li>
            <BoxIcon />
            12 товаров
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Company;
