import React from 'react'
import styles from './styles.module.css'
import ProductImage1 from '../../../../assets/images/productImage1.png'
import ProductImage2 from '../../../../assets/images/productImage2.png'
import RatingStars from '../../../../components/RatingStars'

const Products = () => {
    const ProductData = [
        {
            image: ProductImage1,
            name: 'Футболки – для мужчин и женщин',
            material: 'Ткани',
            rating: <RatingStars />
        },
        {
            image: ProductImage2,
            name: 'Футболки – для мужчин и женщин',
            material: 'Ткани',
            rating: <RatingStars />
        },
        {
            image: ProductImage1,
            name: 'Футболки – для мужчин и женщин',
            material: 'Ткани',
            rating: <RatingStars />
        },
        {
            image: ProductImage2,
            name: 'Футболки – для мужчин и женщин',
            material: 'Ткани',
            rating: <RatingStars />
        },
        {
            image: ProductImage1,
            name: 'Футболки – для мужчин и женщин',
            material: 'Ткани',
            rating: <RatingStars />
        },
        {
            image: ProductImage2,
            name: 'Футболки – для мужчин и женщин',
            material: 'Ткани',
            rating: <RatingStars />
        },
        {
            image: ProductImage1,
            name: 'Футболки – для мужчин и женщин',
            material: 'Ткани',
            rating: <RatingStars />
        },
        {
            image: ProductImage2,
            name: 'Футболки – для мужчин и женщин',
            material: 'Ткани',
            rating: <RatingStars />
        },
        {
            image: ProductImage1,
            name: 'Футболки – для мужчин и женщин',
            material: 'Ткани',
            rating: <RatingStars />
        },
        {
            image: ProductImage2,
            name: 'Футболки – для мужчин и женщин',
            material: 'Ткани',
            rating: <RatingStars />
        },
        {
            image: ProductImage1,
            name: 'Футболки – для мужчин и женщин',
            material: 'Ткани',
            rating: <RatingStars />
        },
        {
            image: ProductImage2,
            name: 'Футболки – для мужчин и женщин',
            material: 'Ткани',
            rating: <RatingStars />
        },
    ]
  return (
    <div className={styles.productsContainer}>
        {ProductData.map((product) => {
            return (
                <div key={product.id} className={styles.productsCard}>
                    <img className={styles.productImage} src={product.image} alt="product" />
                    <p className={styles.productName}>{product.name}</p>
                    <p >{product.material}</p>
                    <RatingStars />
                </div>
            )
        })}
    </div>
  )
}

export default Products