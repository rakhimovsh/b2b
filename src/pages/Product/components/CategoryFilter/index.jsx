import React, { useState } from 'react'
import styles from './style.module.css'
import ArrowDown from '../../../../assets/svg/ArrowDown.svg'

const CategoryFilter = () => {
  const [isOpen, setIsOpen] = useState(false)
  const showCheckbox = () => {
    const checkboxes = document.getElementById('checkboxes')
    console.log(checkboxes);
    if(isOpen) {
      checkboxes.style.display = 'block';
      setIsOpen(true);
    } else {
      checkboxes.classList.remove('showCheckboxes');
      setIsOpen(false)
    }
  }
  return (
    <div className={styles.categoryFilter_box}>
      <h3 className={styles.categoryTitle}>
        Категории
      </h3>
      <div className={styles.categoryBox}>
        <div className={styles.selectBox} onClick={showCheckbox}>
          <select className={styles.categoryName}>
            <option value="category">Ткани, нить & аксессуары</option>
          </select>
          <div className={styles.overSelect}></div>
        </div>
        <div className={styles.checkboxes} id='checkboxes'>
          <div className={styles.checkboxLabel}><label htmlFor="productOne"><input type="checkbox" />Ткани </label> <p>12</p></div>
          <label htmlFor="productTwo"><input type="checkbox" />Военные ткани</label>
          <label htmlFor="productThree"><input type="checkbox" />Кепки</label>
          <label htmlFor="productFour"><input type="checkbox" />Банные полотенца </label>
          <label htmlFor="productFive"><input type="checkbox" />Тканевые полотенца</label>
        </div>
        <div className={[styles.selectBox]} onClick={showCheckbox}>
          <select className={styles.categoryName}>
            <option value="category">Трикотажные изделия</option>
          </select>
          <div className={styles.overSelect}></div>
        </div>
        <div className={styles.selectBox} onClick={showCheckbox}>
          <select className={styles.categoryName}>
            <option value="category">Оптовая обувь</option>
          </select>
          <div className={styles.overSelect}></div>
        </div>
        <div className={styles.selectBox} onClick={showCheckbox}>
          <select className={styles.categoryName}>
            <option value="category">Кожаные изделия</option>
          </select>
          <div className={styles.overSelect}></div>
        </div>
        <div className={styles.selectBox} onClick={showCheckbox}>
          <select className={styles.categoryName}>
            <option value="category">Ручные инструменты</option>
          </select>
          <div className={styles.overSelect}></div>
        </div>
        </div>
        <div className={styles.selectBox} onClick={showCheckbox}>
          <select className={styles.categoryName}>
            <option value="category">Строительные материалы</option>
          </select>
          <div className={styles.overSelect}></div>
        </div>
      </div>
      
    
  )
}

export default CategoryFilter