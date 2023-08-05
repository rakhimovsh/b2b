import React from 'react'
import styles from './styles.module.css'

const ProductDescription = () => {
  return (
    <div className={styles.productDescription}>
        <div>
            <p className={styles.description}>Описание</p>
            <p className={styles.descriptionText}>Пятиклинка, Застежка на липучке, Усиленный козырек</p>
        </div>
        <div>
            <p className={styles.description}>Состав</p>
            <p className={styles.descriptionText}>Хлопок 100%</p>
        </div>
        <div>
            <p className={styles.description}>Цвета</p>
            <p className={styles.descriptionText}>Доступны все цвета</p>
        </div>
    </div>
  )
}

export default ProductDescription