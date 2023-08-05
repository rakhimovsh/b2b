import React from 'react';
import styles from './style.module.css';
import Logo from '@assets/svg/companyLogo.svg';
import LocationIcon from '@assets/svg/locationIcon.svg';
import PhoneIcon from '@assets/svg/phoneIcon.svg';
import BoxIcon from '@assets/svg/boxIcon.svg';
import starIcon from '@assets/svg/star-outlineIcon.svg';
import Social from '../Social/index.jsx';
import ArrowRight from '@assets/svg/chevron-right.svg';

const CompanyCard = () => {
  return (
    <div className={styles.companyCard}>
      <div className={styles.companyTitle}>
        <img src={Logo} alt='logo' />
        <div className={styles.companyName}>
          <h2>{'Euro Paint'}</h2>
          <p className={styles.companyProduct}>{'Красочные материалы'}</p>
        </div>
      </div>
      <div className={styles.companyBox}>
        <div className={styles.companyAddress}>
          <img src={LocationIcon} alt='location' />
          <p className={styles.companyAddress_text}>{'Самаркандская 13,г. Коканд,Ферганская область, Узбекистан'}</p>
        </div>
        <div className={styles.companyInfo}>
          <img src={PhoneIcon} alt='phone' />
          <p>{'(998) 99 202 0777'}</p>
        </div>
        <div className={styles.companyInfo}>
          <img src={BoxIcon} alt='box' />
          <p>{'12 товаров'}</p>
        </div>
        <div className={styles.companyInfo}>
          <img src={starIcon} alt='box' />
          <p className={styles.companyRating}>{'3.6 рейтинг'}</p>
        </div>
        <Social />
      </div>
      <div className={styles.moreInfo}>
        <a href=''>подробнее</a>
        <img src={ArrowRight} alt='arrow' />
      </div>
    </div>
  );
};

export default CompanyCard;
