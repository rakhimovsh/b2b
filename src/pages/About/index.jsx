import React from 'react'
import styles from './styles.module.css'
import {ReactComponent as LogoSvg} from '@assets/svg/EMGULogo.svg'
import AboutImage from '@assets/images/aboutImage.png'
import B2bBlock from '@components/B2bBlock'
import SearchProduct from '@components/SearchProduct'
import CreateCompany from '@components/CreateCompany'
import ContactUs from '@components/ContactUs'
import { useTranslation } from 'react-i18next'

const About = () => {
  const {t} = useTranslation()
  return (
    <div className={'container ' + styles.about}>
        <div className={styles.aboutMain}>
            <div className={styles.aboutContent}>
                <h2 className={styles.aboutTitle}>{t('aboutUs.title')}</h2>
                <p className={styles.aboutText}>{t('aboutUs.text')}</p>
            </div>
            <LogoSvg className={styles.logo} />
        </div>
          <img  className={styles.aboutImage} src={AboutImage} alt="about image" />
     
        
        <div className={styles.aboutB2b}>
            <B2bBlock  />
        </div>
        <div className={styles.productSearch}>
         <SearchProduct /> 
         <CreateCompany />
        </div>
        <ContactUs />
    </div>
  )
}

export default About