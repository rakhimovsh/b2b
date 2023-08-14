import React from 'react'
import styles from './styles.module.css'
import CategoryFilter from './components/CategoryFilter'
import Sort from './components/Sort'
import Products from './components/Products'

const Product = () => {
  
  return (
    <div className={'container ' + styles.filterBlock}>
      <div className={styles.filterbox}>
        <CategoryFilter />
        <Sort />
      </div>
      <Products />
    </div>
  )
}

export default Product