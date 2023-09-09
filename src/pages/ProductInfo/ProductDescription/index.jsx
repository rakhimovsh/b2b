import React from 'react'
import styles from './styles.module.css'

const ProductDescription = ({ desc }) => {
  return (
    <div className={styles.productDescription}>
        {/*<div>*/}
        {/*    <p className={styles.description}>Описание</p>*/}
        {/*    <p className={styles.descriptionText}>{desc}</p>*/}
        {/*</div>*/}
        <div>
            {/*<p className={styles.description}>Состав</p>*/}
            <p className={styles.descriptionText}>{desc}</p>
        </div>
        {/*<div>*/}
        {/*    <p className={styles.description}>Цвета</p>*/}
        {/*    <p className={styles.descriptionText}>Доступны все цвета</p>*/}
        {/*</div>*/}
    </div>
  )
}

export default ProductDescription