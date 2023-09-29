import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Countries from '../../data/countries.js'
import styles from './style.module.css';
import PhoneIcon from '@assets/svg/phoneIcon.svg';
import BoxIcon from '@assets/svg/boxIcon.svg';
import ArrowRight from '@assets/svg/chevron-right.svg';
import { ReactComponent as VerifiedIcon } from '@assets/svg/verified.svg';



const CompanyCard = ({company}) => {
  const {i18n} = useTranslation()
  const lang = i18n.language  
  const {t} = useTranslation()
  const navigate = useNavigate()

  const getCountryName = () => {
    return Countries.find(c => c.code.toLowerCase() === company?.country?.toLowerCase())?.name
  }
  return (
    <div onClick={()=> navigate(`/company/info/${company?.id}`)} className={styles.companyCard}>
      <div className={styles.companyTitle}>
        <img 
          src={company?.image} 
          alt='company image'
          width={77}
          height={77}
          // style={{borderRadius: '50%'}}
        />
        <div className={styles.companyName}>
          <h2>{company?.name}</h2>
          <p className={styles.companyProduct}>{company?.type_product?.translations[lang]?.name}</p>
        </div>
      </div>
      <div className={styles.companyBox}>
        <div className={styles.companyAddress}>
          <img width={25} src={`https://flagsapi.com/${company?.country}/flat/64.png`} alt='location' />
          <p className={styles.companyAddress_text}>{getCountryName()}</p>
        </div>
        {/*<div className={styles.companyAddress}>*/}
        {/*  <img src={LocationIcon} alt='location' />*/}
        {/*  <p className={styles.companyAddress_text}>Tashkent, Uchtepa 15</p>*/}
        {/*</div>*/}
        <div className={styles.companyInfo}>
          <img src={PhoneIcon} alt='phone' />
          <p>{company?.phone_number}</p>
        </div>
        <div className={styles.companyInfo}>
          <img src={BoxIcon} alt='box' />
          <p>{company?.products?.length} {t('companies.products')}</p>
        </div>
        {/* <div className={styles.companyInfo}>
          <VerifiedIcon style={{width: '18px', marginRight: '8px'}} />
          <p>Verified</p>
        </div> */}
        {/* <div className={styles.companyInfo}>
          <img src={starIcon} alt='box' />
          <p className={styles.companyRating}>{'3.6 рейтинг'}</p>
        </div> */}
        {/* <Social /> */}
      </div>
      <div className={styles.moreInfo}>
        <a href=''>{t('companies.more')}</a>
        <img src={ArrowRight} alt='arrow' />
      </div>
    </div>
  );
};

export default CompanyCard;
