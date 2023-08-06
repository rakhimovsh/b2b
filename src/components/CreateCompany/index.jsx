import React from 'react'
import styles from './styles.module.css'
import GraphChartImage from '@assets/images/graphChartImage.png'

const CreateCompany = () => {
  return (
        <div className={styles.productSearchCard}>
            <h3 className={styles.addCompany_title}>Станьте поставщиком на рынке B2B, и продавайте свои продукты</h3>
            <p className={styles.addCompany_text}>Станьте поставщиком на рынке B2B</p>
            <button className={styles.productSearch_button}>+ Добавить свою компанию</button>
            <p className={styles.addCompany_item1}>+560</p>
            <p className={styles.addCompany_item2}>производителей</p>
            <img className={styles.search_boxImage} src={GraphChartImage} alt="chart" />
        </div>
  )
}

export default CreateCompany