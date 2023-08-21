import React from 'react'
import styles from './styles.module.css'

const Services = () => {
  return (
    <div className={'container ' + styles.serviceContainer}>
      <h2 className={styles.serviceTitle}>Сервисы-EMGU</h2>
      <div className={styles.serviceBox}>
        <div className={styles.serviceCard}>
          <img className={styles.serviceImage} src='https://picsum.photos/200/300' alt="service image" />
          <div className={styles.serviceContent}>
            <h3 className={styles.serviceName}>International Premium</h3>
            <h4 className={styles.servicePrice}>3800 евро / год</h4>
            <p>
              The information about your company and products will be available in 15 languages – the 12 most common European languages along with Turkish, Arabic and Chinese. Your company will be presented in all major global markets. 30 keywords in every language. Up to 200 products can be placed. Your company will be at the top of Google SER in the buyer’s .
            </p>
          </div>
          <button className={styles.serviceButton}>Interested to get</button>
        </div>
        <div className={styles.serviceCard}>
          <img className={styles.serviceImage} src='https://picsum.photos/200/300' alt="service image" />
          <div className={styles.serviceContent}>
            <h3 className={styles.serviceName}>International Plus Premium</h3>
            <h4 className={styles.servicePrice}>3800 евро / год</h4>
            <p>
              The information about your company and products will be available in 15 languages – the 12 most common European languages along with Turkish, Arabic and Chinese. Your company will be presented in all major global markets. 30 keywords in every language. Up to 200 products can be placed. Your company will be at the top of Google SER in the buyer’s .
            </p>
          </div>
          <button className={styles.serviceButton}>Interested to get</button>
        </div>
        <div className={styles.serviceCard}>
          <img className={styles.serviceImage} src='https://picsum.photos/200/300' alt="service image" />
          <div className={styles.serviceContent}>
            <h3 className={styles.serviceName}>International Plus Entry</h3>
            <h4 className={styles.servicePrice}>3800 евро / год</h4>
            <p>
              The information about your company and products will be available in 15 languages – the 12 most common European languages along with Turkish, Arabic and Chinese. Your company will be presented in all major global markets. 30 keywords in every language. Up to 200 products can be placed. Your company will be at the top of Google SER in the buyer’s .
            </p>
          </div>
          <button className={styles.serviceButton}>Interested to get</button>
        </div>
        <div className={styles.serviceCard}>
          <img className={styles.serviceImage} src='https://picsum.photos/200/300' alt="service image" />
          <div className={styles.serviceContent}>
            <h3 className={styles.serviceName}>International Premium</h3>
            <h4 className={styles.servicePrice}>3800 евро / год</h4>
            <p>
              The information about your company and products will be available in 15 languages – the 12 most common European languages along with Turkish, Arabic and Chinese. Your company will be presented in all major global markets. 30 keywords in every language. Up to 200 products can be placed. Your company will be at the top of Google SER in the buyer’s .
            </p>
          </div>
          <button className={styles.serviceButton}>Interested to get</button>
        </div>
      </div>
    </div>
  )
}

export default Services