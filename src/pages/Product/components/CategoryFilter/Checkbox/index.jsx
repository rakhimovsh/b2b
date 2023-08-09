import React from 'react'
import styles from './styles.module.css'

const Checkbox = () => {
  return (
    <>
        <div className={styles.checkboxLabel}>
            <div className={styles.checkboxItem}>
              <input type="checkbox" name='productOne'/>
              <label htmlFor="productOne">Ткани</label> 
            </div>
            <p className={styles.productNumber}>12</p>
        </div>
        <div className={styles.checkboxLabel}>
            <div className={styles.checkboxItem}>
              <input type="checkbox" name='productOne'/>
              <label htmlFor="productOne">Военные ткани</label> 
            </div>
            <p className={styles.productNumber}>12</p>
        </div>
        <div className={styles.checkboxLabel}>
            <div className={styles.checkboxItem}>
              <input type="checkbox" name='productOne'/>
              <label htmlFor="productOne">Банные полотенца</label> 
            </div>
            <p>12</p>
        </div>
        <div className={styles.checkboxLabel}>
            <div className={styles.checkboxItem}>
              <input  type="checkbox" name='productOne'/>
              <label htmlFor="productOne">Тканевые полотенца</label> 
            </div>
            <p>12</p>
        </div>
    </>
  )
}

export default Checkbox