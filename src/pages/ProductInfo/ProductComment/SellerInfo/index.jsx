import React from 'react'
import styles from './styles.module.css'
import { ReactComponent as StarIcon } from '@assets/svg/StarSVG.svg';

const SellerInfo = () => {
  return (
    <div>
        <h3 className={styles.sellerName}>Euro Paint</h3>
        <p className={styles.companyProduct}>Красочные материалы</p>
        <span className={styles.companyRating}>
            <StarIcon className={styles.starIcon} /> 3.6 рейтинг
        </span>
        <p className={styles.companyInfo}>Адресс:</p>
        <p className={styles.companyRequisites}>Самаркандская 13,г. Коканд,Ферганская область, Узбекистан</p>
        <p className={styles.companyInfo}>Номер:</p>
        <p className={styles.companyRequisites}>(998) 99 202 0777</p>
    </div>
  )
}

export default SellerInfo