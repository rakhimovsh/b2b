import React from 'react'
import styles from './styles.module.css'
import CompanyLogo from '@assets/images/mock-company.png'
import { ReactComponent as StarIcon } from '@assets/svg/StarSVG.svg';
import Social from '@components/Social'
import MailSvg from '@assets/svg/mailSvg.svg'
import PhoneIcon from '@assets/svg/phoneIcon.svg'
import RequestPopUp from './RequestPopUp';

const CompanyContact = () => {
  return (
    <div className={styles.companyContact}>
        <div className={styles.companyInfo}>
            <div>
                <img src={CompanyLogo} alt="company logo" />
            </div>
            <div style={{marginLeft: '15px', marginTop: '15px'}}>
                <h3 className={styles.companyName}>Euro Paint</h3>
                <p className={styles.companyProduct}>Красочные материалы</p>
                <span className={styles.companyRating}>
                    <StarIcon className={styles.companyStarIcon} /> 3.6 рейтинг
                </span>
                <Social />
            </div>
        </div>
        <div>
            <button className={styles.mailButton}><img style={{marginRight: '6px'}} src={MailSvg} alt="mail icon" />Узнать оптовую цену</button>
            <button className={styles.phoneButton}><img style={{marginRight: '6px'}} src={PhoneIcon} alt="phone icon" />Связаться с продавцом</button>
        </div>
        <RequestPopUp />
    </div>
  )
}

export default CompanyContact