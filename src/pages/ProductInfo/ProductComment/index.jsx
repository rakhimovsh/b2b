import React, { useState } from 'react'
import styles from './styles.module.css'
import ProductDescription from '../ProductDescription'
import Comments from './Comments'
import SellerInfo from './SellerInfo'

const ProductComment = () => {
  const [commentBlock, setCommentblock] = useState(1)
  return (
    <div >
        <div className={styles.line}></div>
        <div className={styles.productScripts}>
          <p className={commentBlock === 1 ? styles.active : styles.notActive} onClick={()=> setCommentblock(1)}>Описание</p>
          <p className={commentBlock === 2 ? styles.active : styles.notActive} onClick={()=> setCommentblock(2)}>Отзывы (0)</p>
          <p className={commentBlock === 3 ? styles.active : styles.notActive} onClick={()=> setCommentblock(3)}>Информация о продавце</p>
        </div>
        <div className={styles.ProductComment_box} style={{ display: commentBlock == 1 ? 'block' : 'none'}}>
          <ProductDescription />
        </div>
        <div className={styles.ProductComment_box} style={{display: commentBlock === 2 ? 'block' : 'none'}}>
          <Comments />
        </div>
        <div className={styles.ProductComment_box} style={{display: commentBlock === 3 ? 'block' : 'none'}}>
          <SellerInfo />
        </div>
    </div>
  )
}

export default ProductComment