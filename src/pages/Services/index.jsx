import React from 'react'
import styles from './styles.module.css'
import { useNavigate } from 'react-router-dom'
import InternationalImage from '@assets/images/International-Emgu.png'
import EuropeImage from '@assets/images/Europe-EMGU.png'
import AsiaImage from '@assets/images/Asia-EMGU.png'
import UzbImage from '@assets/images/Uzbekistan-EMGU.png'



const Services = () => {
  const navigate = useNavigate();
  return (
    <div className={'container ' + styles.serviceContainer}>
      <h2 className={styles.serviceTitle}>Сервисы-EMGU</h2>
      <div className={styles.serviceBox}>
        <div className={styles.serviceCard}>
          <img className={styles.serviceImage} src={InternationalImage} alt="service image" />
          <div className={styles.serviceContent}>
            <h3 className={styles.serviceName}>Международный рынок</h3>
            <h4 className={styles.servicePrice}>14 млн сум/год</h4>
            <p className={styles.serviceText}>
              Информация о вашей компании и продукции будет доступна на 15 языках – 12 самых распространенных европейских языках, а также турецком, арабском и китайском. Ваша компания будет представлена на всех основных мировых рынках. Можно разместить до 150 товаров. Ваша компания будет в топе Google SER на языке покупателя. Цена указана без НДС.
            </p>
          </div>
          <button onClick={() => navigate('/application')} className={styles.serviceButton}>Получить услугу</button>
        </div>
        <div className={styles.serviceCard}>
          <img className={styles.serviceImage} src={EuropeImage} alt="service image" />
          <div className={styles.serviceContent}>
            <h3 className={styles.serviceName}>Европейский рынок</h3>
            <h4 className={styles.servicePrice}>12 млн сум/год</h4>
            <p className={styles.serviceText}>
              Для тех, кто хочет сосредоточиться на отдельных рынках. Информация о вашей компании и ее продукции будет опубликована на пяти самых популярных европейских языках — английском, французском, немецком, итальянском и испанском, а также еще на одном языке по вашему выбору и может быть размещено до 120 товаров. Ваша компания будет высоко оценена в результатах поиска Google SERP на выбранных языках. Разумная цена. Цена указана без НДС.
            </p>
          </div>
          <button onClick={() => navigate('/application')} className={styles.serviceButton}>Получить услугу</button>
        </div>
        <div className={styles.serviceCard}>
          <img className={styles.serviceImage} src={AsiaImage} alt="service image" />
          <div className={styles.serviceContent}>
            <h3 className={styles.serviceName}>Азиатский рынок</h3>
            <h4 className={styles.servicePrice}>9 млн 500 тыс. сум/год</h4>
            <p className={styles.serviceText}>
              Пакет для доступа к азиатским рынкам. Информация о вашей компании и ее продукции будет доступна на четырех самых популярных азиатских языках – русском, китайском, японском, корейском и еще одном языке по выбору клиента. Список до 100 товаров. Цена указана без НДС.
            </p>
          </div >
          <button onClick={() => navigate('/application')} className={styles.serviceButton}>Получить услугу</button>
        </div>
        <div className={styles.serviceCard}>
          <img className={styles.serviceImage} src={UzbImage} alt="service image" />
          <div className={styles.serviceContent}>
            <h3 className={styles.serviceName}>Рынок Узбекистана</h3>
            <h4 className={styles.servicePrice}>Бесплатно</h4>
            <p className={styles.serviceText}>
              Бесплатный пакет для доступа к рынкам Узбекистана. Информация о вашей компании и ее продукции будет доступна на 1 языке – узбекском и еще одном языке по выбору клиента. Размещение до 2-х товаров. Цена указана без НДС.
            </p>
          </div>
          <button onClick={() => navigate('/application')} className={styles.serviceButton}>Получить услугу</button>
        </div>
      </div>
    </div>
  )
}

export default Services