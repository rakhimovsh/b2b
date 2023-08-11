import React from 'react'
import styles from './styles.module.css'
import {ReactComponent as LogoSvg} from '@assets/svg/logo.svg'
import AboutImage from '@assets/images/aboutImage.png'
import B2bBlock from '@components/B2bBlock'
import SearchProduct from '@components/SearchProduct'
import CreateCompany from '@components/CreateCompany'
import ContactUs from '@components/ContactUs'

const About = () => {
  return (
    <div className={'container ' + styles.about}>
        <div className={styles.aboutMain}>
            <div className={styles.aboutContent}>
                <h2 className={styles.aboutTitle}>Made In Kodand- Крупнейшая международная B2B площадка в городе Коканд.</h2>
                <p className={styles.aboutText}>Найдите продукцию более 1000 компаний во всех секторах B2B в Ферганской области. Выбирайте и связывайтесь с лучшими поставщиками бесплатно, и мы отправляем по всему миру.</p>
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