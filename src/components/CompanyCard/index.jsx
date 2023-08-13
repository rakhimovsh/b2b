import React from 'react';
import styles from './style.module.css';
import LocationIcon from '@assets/svg/locationIcon.svg';
import PhoneIcon from '@assets/svg/phoneIcon.svg';
import BoxIcon from '@assets/svg/boxIcon.svg';
import starIcon from '@assets/svg/star-outlineIcon.svg';
import Social from '../Social/index.jsx';
import ArrowRight from '@assets/svg/chevron-right.svg';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';



const CompanyCard = ({company}) => {
  const {i18n} = useTranslation()
  const lang = i18n.language  
  const navigate = useNavigate()
  return (
    <div onClick={()=> navigate(`/company/info/${company?.id}`)} className={styles.companyCard}>
      <div className={styles.companyTitle}>
        <img 
          src={company?.image} 
          alt='company image'
          width={77}
          height={77}
          style={{borderRadius: '50%'}}
        />
        <div className={styles.companyName}>
          <h2>{company?.name}</h2>
          <p className={styles.companyProduct}>{company?.type_product?.translations[lang]?.name}</p>
        </div>
      </div>
      <div className={styles.companyBox}>
        <div className={styles.companyAddress}>
          <img src={LocationIcon} alt='location' />
          <p className={styles.companyAddress_text}>{company?.location}</p>
        </div>
        <div className={styles.companyInfo}>
          <img src={PhoneIcon} alt='phone' />
          <p>{company?.phone_number}</p>
        </div>
        <div className={styles.companyInfo}>
          <img src={BoxIcon} alt='box' />
          <p>{company?.products?.length} товаров</p>
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
