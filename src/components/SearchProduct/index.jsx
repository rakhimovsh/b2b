import React from 'react'
import styles from './styles.module.css'
import BoxImage from '@assets/images/box-image.png'

const Searchproduct = () => {
  return (
        <div className={styles.productSearchCard}>
            <h3 className={styles.productSearch_title}>Пользуйтесь B2B чтобы найти продукт</h3>
            <div className={styles.productSearch_inputs}>
            {/*<div style={{marginBottom: '8px', marginTop: '34px'}}><HeroCategorySlct width='420px' name='Категория продуктов'/></div>*/}
            {/*<div style={{marginBottom: '8px'}}><HeroCategorySlct width='420px' name='Подкатегория продуктов'/></div>*/}
            <input type="text" placeholder='Введите название продукта' className={styles.productName_input} />
            </div>
            <button className={styles.productSearch_button}>Посмотреть все продукты</button>
            <img className={styles.search_boxImage} src={BoxImage} alt="box" />
        </div>
  )
}

export default Searchproduct