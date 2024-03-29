import React, {useEffect} from 'react'
import styles from './styles.module.css' 
import ProductImage from './ProductImage'
import ProductDetails from './ProductDeatails'
import ProductComment from './ProductComment'
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getProductById} from "@/redux/actions/product.js";


const ProductInfo = () => {
  const dispatch = useDispatch()
  const {productId} = useParams()
  const {singleProduct} = useSelector(state => state.product)

  useEffect(() => {
    dispatch(getProductById(productId))
  }, [productId])
  return (
    <div className={'container ' + styles.ProductInfoContainer}>
        <div className={styles.productInfo_box}>
          <ProductImage images={singleProduct.item?.images || []}/>
          <ProductDetails  details={singleProduct.item}/>
        </div>
        <ProductComment product={singleProduct.item}/>
    </div>
  )
}

export default ProductInfo