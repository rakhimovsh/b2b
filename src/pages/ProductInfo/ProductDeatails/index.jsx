import React from 'react'
import styles from './styles.module.css'
import {ReactComponent as FiveStar} from '@assets/svg/fiveStar.svg'
import CompanyContact from '../CompanyContact'
import ProductDescription from '../ProductDescription'

const ProductDetails = () => {
  return (
    <div className={styles.productData}>
        <div className={styles.productDetails_conatiner}>
            <h2 className={styles.productName}>Бейсболки – оптовая цена</h2>
            <span className={styles.productRating}>
                <FiveStar style={{marginRight: '12px'}} /> 3.6 рейтинг
            </span>
            <div className={styles.productDetails}>
                <ProductDescription />
                <div>
                    <p className={styles.description}>Категории</p>
                    <div className={styles.productCategory}>
                        <button className={styles.productCategory_button}>Трикотажные изделия</button>
                        <button className={styles.productCategory_button}>Кепки</button>
                        <button className={styles.productCategory_button}>Женские кепки</button>
                        <button className={styles.productCategory_button}>Мужские кепки</button>
                    </div>
                </div>
                <div>
                    <p className={styles.description}>Метки</p>
                    <div className={styles.productCategory}>
                        <button className={styles.productCategory_button}>Бейсболки</button>
                        <button className={styles.productCategory_button}>Кепки</button>
                    </div>
                </div>
            </div>
        </div>
        <CompanyContact />
        

    </div>
  )
}

export default ProductDetails