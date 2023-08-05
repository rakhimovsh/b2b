import React from 'react'
import styles from './styles.module.css' 
import ProductImage from './ProductImage'
import ProductDetails from './ProductDeatails'
import ProductComment from './ProductComment'


const ProductInfo = () => {
  return (
    <div className={'container ' + styles.ProductInfoContainer}>
        <div className={styles.productInfo_box}>
          <ProductImage />
          <ProductDetails />
        </div>
        <ProductComment />
    </div>
  )
}

export default ProductInfo