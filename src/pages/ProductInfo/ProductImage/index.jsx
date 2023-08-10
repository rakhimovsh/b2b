import React from 'react'
import styles from './styles.module.css'
import ProductImg from '@assets/images/bigCapImage.png'
import GrayCap from '@assets/images/grayCap.png'
import YellowCap from '@assets/images/yellowCap.png'
import WhiteCap from '@assets/images/whiteCap.png'
import RedCap from '@assets/images/redCap.png'
import BlackCap from '@assets/images/blackCap.png'
import GreenCap from '@assets/images/greenCap.png'

const ProductImage = () => {
  return (
    <div>
        <div className={styles.productImage_box}><img className={styles.productImage} src={ProductImg} alt="product image" /></div>
        <div className={styles.productTypes}>
          <img src={GrayCap} alt="gray cap" />
          <img src={RedCap} alt="yellow cap" />
          <img src={GreenCap} alt="white cap" />
          <img src={RedCap} alt="red cap" />
          <img src={BlackCap} alt="black cap" />
          <img src={GreenCap} alt="green cap" />
        </div>
    </div>
  )
}

export default ProductImage