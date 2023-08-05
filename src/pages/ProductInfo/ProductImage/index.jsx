import React from 'react'
import styles from './styles.module.css'
import ProductImg from '@assets/images/bigCapImage.png'
import GrayCap from '@assets/images/grayCap.png'
import YellowCap from '@assets/images/yellowCap.png'
import WhiteCap from '@assets/images/whiteCap.png'
import RedCap from '@assets/images/RedCap.png'
import BlackCap from '@assets/images/blackCap.png'
import GreenCap from '@assets/images/greenCap.png'

const ProductImage = () => {
  return (
    <div>
        <div className={styles.productImage}><img src={ProductImg} alt="product image" /></div>
        <div className={styles.productTypes}>
          <img src={GrayCap} alt="gray cap" />
          <img src={YellowCap} alt="yellow cap" />
          <img src={WhiteCap} alt="white cap" />
          <img src={RedCap} alt="red cap" />
          <img src={BlackCap} alt="black cap" />
          <img src={GreenCap} alt="green cap" />
        </div>
    </div>
  )
}

export default ProductImage