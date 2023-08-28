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
            <h3 className={styles.serviceName}>Международный</h3>
            <h4 className={styles.servicePrice}>14 млн 800 тыс. сум/г</h4>
            <p className={styles.serviceText}>
                Информация о вашей компании и продуктах будет
                доступна на 11 языках — 5 самых распространенных
                европейских языках, а также турецком, арабском и
                китайском. Ваша компания будет представлена на всех
                основных мировых рынках. Можно разместить до 200
                товаров. Международный позволяет на 100%
                эффективно использовать инструменты Made in
                Kokand по привлекательной цене. Цена указана без
                НДС.
            </p>
          </div>
          <button className={styles.serviceButton}>Interested to get</button>
        </div>
        <div className={styles.serviceCard}>
          <img className={styles.serviceImage} src='https://picsum.photos/200/300' alt="service image" />
          <div className={styles.serviceContent}>
            <h3 className={styles.serviceName}>Европейские страны.</h3>
            <h4 className={styles.servicePrice}>5 млн 500 тыс. сум/год</h4>
            <p className={styles.serviceText}>
              Для тех, кто хочет сосредоточиться на отдельных
              рынках. Информация о вашей компании и ее
              продукции будет опубликована на пяти самых
              популярных азиатских языках — русском, китайском, корейском, японском, а также еще на одном языке по
              вашему выбору из 11 доступных на сайте Made in
              Kokand. Можно разместить 50 товаров. Разумная цена. Цена указана без НДС. 
            </p>
          </div>
          <button className={styles.serviceButton}>Interested to get</button>
        </div>
        <div className={styles.serviceCard}>
          <img className={styles.serviceImage} src='https://picsum.photos/200/300' alt="service image" />
          <div className={styles.serviceContent}>
            <h3 className={styles.serviceName}>Азиатские страны.</h3>
            <h4 className={styles.servicePrice}>4 млн 800 тыс. сум/год</h4>
            <p className={styles.serviceText}>
              Для тех, кто хочет сосредоточиться на отдельных
              рынках. Информация о вашей компании и ее
              продукции будет опубликована на пяти самых
              популярных азиатских языках — русском, китайском, корейском, японском, а также еще на одном языке по
              вашему выбору из 11 доступных на сайте Made in
              Kokand, например. Можно разместить 50 товаров. Разумная цена. Цена указана без НДС.
            </p>
          </div >
          <button className={styles.serviceButton}>Interested to get</button>
        </div>
        <div className={styles.serviceCard}>
          <img className={styles.serviceImage} src='https://picsum.photos/200/300' alt="service image" />
          <div className={styles.serviceContent}>
            <h3 className={styles.serviceName}>Узбекистан</h3>
            <h4 className={styles.servicePrice}>3 млн 900 тыс</h4>
            <p className={styles.serviceText}>
              Информация о вашей компании и продуктах будет
              доступна на 2-х языках. Ваша компания будет
              представлена только на территории Узбекистана. Можно разместить до 20 товаров. Цена указана без
              НДС.
            </p>
          </div>
          <button className={styles.serviceButton}>Interested to get</button>
        </div>
      </div>
    </div>
  )
}

export default Services