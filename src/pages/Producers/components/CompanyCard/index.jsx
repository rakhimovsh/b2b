import React from 'react'
import styles from './style.module.css'
import Logo from '../../../../assets/svg/companyLogo.svg'
import LocationIcon from '../../../../assets/svg/locationIcon.svg'
import PhoneIcon from '../../../../assets/svg/phoneIcon.svg'
import BoxIcon from '../../../../assets/svg/boxIcon.svg'
import starIcon from '../../../../assets/svg/star-outlineIcon.svg'
import Social from '../../../../components/Social'
import ArrowRight from '../../../../assets/svg/chevron-right.svg'

const CompanyData = [
    {
        logo: Logo,
        name: 'Euro Paint',
        product: 'Красочные материалы',
        address: 'Самаркандская 13,г. Коканд,Ферганская область, Узбекистан',
        phone: '(998) 99 202 0777',
        productRange: '12 товаров',
        rating: '3.6 рейтинг',
    },
    {
        logo: Logo,
        name: 'Euro Paint',
        product: 'Красочные материалы',
        address: 'Самаркандская 13,г. Коканд,Ферганская область, Узбекистан',
        phone: '(998) 99 202 0777',
        productRange: '12 товаров',
        rating: '3.6 рейтинг',
    },
    {
        logo: Logo,
        name: 'Euro Paint',
        product: 'Красочные материалы',
        address: 'Самаркандская 13,г. Коканд,Ферганская область, Узбекистан',
        phone: '(998) 99 202 0777',
        productRange: '12 товаров',
        rating: '3.6 рейтинг',
    },
    {
        logo: Logo,
        name: 'Euro Paint',
        product: 'Красочные материалы',
        address: 'Самаркандская 13,г. Коканд,Ферганская область, Узбекистан',
        phone: '(998) 99 202 0777',
        productRange: '12 товаров',
        rating: '3.6 рейтинг',
    },
    {
        logo: Logo,
        name: 'Euro Paint',
        product: 'Красочные материалы',
        address: 'Самаркандская 13,г. Коканд,Ферганская область, Узбекистан',
        phone: '(998) 99 202 0777',
        productRange: '12 товаров',
        rating: '3.6 рейтинг',
    },
    {
        logo: Logo,
        name: 'Euro Paint',
        product: 'Красочные материалы',
        address: 'Самаркандская 13,г. Коканд,Ферганская область, Узбекистан',
        phone: '(998) 99 202 0777',
        productRange: '12 товаров',
        rating: '3.6 рейтинг',
    },
    {
        logo: Logo,
        name: 'Euro Paint',
        product: 'Красочные материалы',
        address: 'Самаркандская 13,г. Коканд,Ферганская область, Узбекистан',
        phone: '(998) 99 202 0777',
        productRange: '12 товаров',
        rating: '3.6 рейтинг',
    },
    {
        logo: Logo,
        name: 'Euro Paint',
        product: 'Красочные материалы',
        address: 'Самаркандская 13,г. Коканд,Ферганская область, Узбекистан',
        phone: '(998) 99 202 0777',
        productRange: '12 товаров',
        rating: '3.6 рейтинг',
    },
    {
        logo: Logo,
        name: 'Euro Paint',
        product: 'Красочные материалы',
        address: 'Самаркандская 13,г. Коканд,Ферганская область, Узбекистан',
        phone: '(998) 99 202 0777',
        productRange: '12 товаров',
        rating: '3.6 рейтинг',
    },
]   

const CompanyCard = () => {
  return (
    <div className={styles.companyContainer}>
        {CompanyData.map((companyInfo) => {
            return (
                <div className={styles.companyCard}>
                    <div className={styles.companyTitle}>
                        <img src={companyInfo.logo} alt="logo" />
                        <div className={styles.companyName}>
                            <h2>{companyInfo.name}</h2>
                            <p className={styles.companyProduct}>{companyInfo.product}</p>
                        </div>
                    </div>
                    <div className={styles.companyBox}>
                        <div className={styles.companyAddress}>
                            <img src={LocationIcon} alt="location" />
                            <p className={styles.companyAddress_text}>{companyInfo.address}</p>
                        </div>
                        <div className={styles.companyInfo}>
                            <img src={PhoneIcon} alt="phone" /> 
                            <p>{companyInfo.phone}</p>
                        </div>
                        <div className={styles.companyInfo}>
                            <img src={BoxIcon} alt="box" />
                            <p>{companyInfo.productRange}</p>
                        </div>
                        <div className={styles.companyInfo}>
                            <img src={starIcon} alt="box" />
                            <p className={styles.companyRating}>{companyInfo.rating}</p>
                        </div>
                        <Social />
                    </div>
                    <div className={styles.moreInfo}>
                        <a href="">подробнее</a>
                        <img src={ArrowRight} alt="arrow" />
                    </div>
                </div>
            )
            })
        }
    </div>
  )
}

export default CompanyCard