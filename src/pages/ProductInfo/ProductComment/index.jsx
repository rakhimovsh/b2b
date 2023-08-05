import React from 'react'
import styles from './styles.module.css'
import ProductDescription from '../ProductDescription'
import Comments from './Comments'
import SellerInfo from './SellerInfo'

const ProductComment = () => {
  return (
    <div >
        <div className={styles.line}></div>
        <div className={styles.productScripts}>
          <p>Описание</p>
          <p>Отзывы (0)</p>
          <p>Информация о продавце</p>
        </div>
        <div style={{marginBottom: '100px', display: 'none'}}>
          <ProductDescription />
        </div>
        <div style={{display: 'none'}}>
          <Comments />
        </div>
        <div>
          <SellerInfo />
        </div>
    </div>
  )
}

export default ProductComment