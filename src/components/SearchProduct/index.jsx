import React from 'react'
import styles from './styles.module.css'
import BoxImage from '@assets/images/box-image.png'

const Searchproduct = () => {
  return (
        <div className={styles.productSearchCard}>
            <h3 className={styles.productSearch_title}>Пользуйтесь B2B чтобы найти продукт</h3>
            <div className={styles.productSearch_inputs}>
            <div className={styles.selectCategory_box}>
                <select className={styles.selectCategory} name="selectCategory" id="">
                  <option value="category-first" hidden>Категория продукта</option>
                  <option value="category-first" >Продект 1</option>
                  <option value="category-first" >Продект 2</option>
                </select>
            </div>
            <div className={styles.selectCategory_box}>
                <select className={styles.selectCategory} name="selectCategory" id="">
                  <option value="category-first" hidden>Подкатегория продукта</option>
                  <option value="category-first" >Продект 1</option>
                  <option value="category-first" >Продект 2</option>
                </select>
            </div>
            <input type="text" placeholder='Введите название продукта' className={styles.productName_input} />
            </div>
            <button className={styles.productSearch_button}>Посмотреть все продукты</button>
            <img className={styles.search_boxImage} src={BoxImage} alt="box" />
        </div>
  )
}

export default Searchproduct