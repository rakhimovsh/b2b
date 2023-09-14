import React from 'react'
import styles from './styles.module.css'
import CategoryFilter from './components/CategoryFilter'
import Sort from './components/Sort'
import Products from './components/Products'
import PlaceFilter from '../Producers/components/Filter/PlaceFilter'
import Country from './components/Country'
import Country2 from './components/Country2'

const Product = () => {
  
  return (
    <div className={'container ' + styles.filterBlock}>
      <div className={styles.filterbox}>
        {/* <Country /> */}
        <Country2 />
        <CategoryFilter />
        <Sort />        
      </div>
      <Products />
    </div>
  )
}

export default Product