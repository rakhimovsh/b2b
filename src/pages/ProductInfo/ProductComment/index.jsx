import React, {useState} from 'react'
import {useTranslation} from "react-i18next";
import ProductDescription from '../ProductDescription'
import Comments from './Comments'
import styles from './styles.module.css'

const ProductComment = ({product}) => {
  const [commentBlock, setCommentblock] = useState(1)
  const {i18n} = useTranslation()
  const lang = i18n.language
  return (
    <div>
      <div className={ styles.line }></div>
      <div className={ styles.productScripts }>
        <p className={ commentBlock === 1 ? styles.active : styles.notActive }
           onClick={ () => setCommentblock(1) }>Описание</p>
        <p className={ commentBlock === 2 ? styles.active : styles.notActive }
           onClick={ () => setCommentblock(2) }>Отзывы ({product?.product_reviews?.length})</p>
        {/*<p className={ commentBlock === 3 ? styles.active : styles.notActive }*/}
        {/*   onClick={ () => setCommentblock(3) }>Информация о продавце</p>*/}
      </div>
      <div className={ styles.ProductComment_box }
           style={ {display: commentBlock === 1 ? 'block' : 'none'} }>
        <ProductDescription compound={product?.translations[lang]?.compound}/>
      </div>
      <div className={ styles.ProductComment_box }
           style={ {display: commentBlock === 2 ? 'block' : 'none'} }>
        <Comments comments={product?.product_reviews}/>
      </div>
      {/*<div className={ styles.ProductComment_box }*/}
      {/*     style={ {display: commentBlock === 3 ? 'block' : 'none'} }>*/}
      {/*  <SellerInfo/>*/}
      {/*</div>*/}
    </div>
  )
}

export default ProductComment